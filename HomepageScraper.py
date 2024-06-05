import threading
import logging
from concurrent.futures import ThreadPoolExecutor, as_completed
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs
import sqlite3
import requests
from urllib.robotparser import RobotFileParser
import os
from difflib import SequenceMatcher
import base64

DatabaseName = "FinalDBHome.db"
logging.basicConfig(filename='error_log.txt', level=logging.ERROR, format='%(asctime)s:%(levelname)s:%(message)s')

#region Database Functions
def initialize_db(db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS websites
                          (id INTEGER PRIMARY KEY, Domain TEXT UNIQUE, Status TEXT)''')
        cursor.execute('''CREATE TABLE IF NOT EXISTS pages
                          (id INTEGER PRIMARY KEY, website_id INTEGER, url TEXT, status TEXT,
                           FOREIGN KEY(website_id) REFERENCES websites(id))''')
        cursor.execute('''CREATE TABLE IF NOT EXISTS scripts
                          (id INTEGER PRIMARY KEY, page_id INTEGER, JSTypeWhere TEXT, JSTypeHow TEXT, Library TEXT, version TEXT,
                           FOREIGN KEY(page_id) REFERENCES pages(id))''')

def insert_scripts(page_id, libraries, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        flattened_libraries = []

        for item in libraries:
            if isinstance(item, dict):
                flattened_libraries.append(item)
            elif isinstance(item, list):
                for subitem in item:
                    if isinstance(subitem, dict):
                        flattened_libraries.append(subitem)
                    else:
                        print("Unexpected structure in libraries list:", subitem)
            else:
                print("Unexpected structure in libraries list:", item)

        libraries_data = [
            (page_id,
             lib.get('where', 'default_where'),
             lib.get('how', 'default_how'),
             lib.get('library', 'default_library'),
             lib.get('version', 'default_version'))
            for lib in flattened_libraries
        ]

        cursor.executemany('''INSERT INTO scripts (page_id, JSTypeWhere, JsTypeHow, library, version)
                              VALUES (?, ?, ?, ?, ?)''', libraries_data)

def fetch_websites_by_status(statuses, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        statuses_tuple = tuple(statuses)
        query = "SELECT Domain FROM websites WHERE Status IN ({seq})".format(seq=','.join(['?']*len(statuses)))
        cursor.execute(query, statuses_tuple)
        return [row[0] for row in cursor.fetchall()]

def update_website_status(url, status, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute('''UPDATE websites SET Status = ? WHERE Domain = ?''', (status, url))

def update_page_status(url, status, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute('''UPDATE pages SET Status = ? WHERE url = ?''', (status, url))

def get_website_status(url, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Status FROM websites WHERE Domain = ? AND status like 'Done'", (url,))
        status = cursor.fetchone()
        return status[0] if status else None

def get_page_status(url, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT status FROM pages WHERE url = ? AND status like 'Done' ", (url,))
        status = cursor.fetchone()
        return status[0] if status else None

def insert_website_get_id(url, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT OR IGNORE INTO websites (Domain) VALUES (?)", (url,))
        cursor.execute("SELECT id FROM websites WHERE Domain = ?", (url,))
        website_id = cursor.fetchone()[0]
    return website_id
#endregion

def get_scripts_list_from_folder(libraries_base_path="Libraries"):
    scripts = []
    for library_name in os.listdir(libraries_base_path):
        library_path = os.path.join(libraries_base_path, library_name)
        if os.path.isdir(library_path):
            for version_dir in os.listdir(library_path):
                version_path = os.path.join(library_path, version_dir)
                if os.path.isdir(version_path):
                    for file in os.listdir(version_path):
                        if file.endswith('.js'):
                            file_path = os.path.join(version_path, file)
                            script_content = read_file_content(file_path)
                            scripts.append((library_name, version_dir, script_content))
    return scripts

def can_fetch_url(website_url, user_agent='*'):
    parsed_url = urlparse(website_url)
    base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"
    robots_url = f"{base_url}/robots.txt"
    rp = RobotFileParser()
    rp.set_url(robots_url)
    rp.read()
    return rp.can_fetch(user_agent, website_url)

def create_webdriver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    return webdriver.Chrome(options=chrome_options)

def get_base_url(url):
    parsed_url = urlparse(url)
    return f"{parsed_url.scheme}://{parsed_url.netloc}"

def is_internal_link(base_url, link):
    return urlparse(link).netloc == urlparse(base_url).netloc

def get_links(driver, url, max_links=25):
    base_url = get_base_url(url)
    driver.get(url)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    links = set()
    links.add(url)
    a_tags = soup.find_all('a', href=True)
    for a in a_tags:
        href = a['href']
        if href.startswith('http') and is_internal_link(base_url, href) and href not in links:
            links.add(href)
            if len(links) == max_links:
                break
    return list(links)

def detect_webpack(soup):
    script_tags = soup.find_all('script', src=True)
    webpack_patterns = [r"bundle\.js", r"webpack", r"\.chunk\.js"]
    webpack_signature = re.compile(r"(webpackJsonp|webpackChunk)")
    for script in script_tags:
        src = script.get('src', '')
        if any(re.search(pattern, src, re.IGNORECASE) for pattern in webpack_patterns):
            return True
        if src.startswith("http"):
            try:
                js_content = requests.get(src).text
                if webpack_signature.search(js_content):
                    return True
            except requests.exceptions.RequestException as e:
                logging.error(f"Error downloading script: {src}: {e}")
    return False

def get_library_version(driver, lib_details):
    try:
        js_check = lib_details['check']
        version = driver.execute_script(f"return {js_check}")
        if version is not None:
            return {"library": lib_details['library'], "version": str(version), "how": "execute script", "where": "scripts"}
    except Exception as e:
        logging.error(f"Error getting library version for {lib_details['library']}: {e}")
    return None

def read_file_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def calculate_diff_score(file1_content, file2_content):
    return SequenceMatcher(None, file1_content, file2_content).ratio()

def compare_file(script_content, script_size, file_path, percentage_tolerance=5):
    size_tolerance = script_size * (percentage_tolerance / 100.0)
    file_size = os.path.getsize(file_path)
    if abs(file_size - script_size) <= size_tolerance:
        library_file_content = read_file_content(file_path)
        score = calculate_diff_score(script_content, library_file_content)
        return file_path, score
    return file_path, 0

def find_closest_match_parallel(script_content, libraries_base_path="Libraries", percentage_tolerance=5):
    script_size = len(script_content.encode('utf-8'))
    best_match_info = {'score': 0, 'library': None, 'version': None, 'file_path': None}

    with ThreadPoolExecutor(max_workers=os.cpu_count()) as executor:
        futures = {executor.submit(compare_file, script_content, script_size, file_data[2], percentage_tolerance): file_data for file_data in files_to_compare}
        for future in as_completed(futures):
            file_data = futures[future]
            _, score = future.result()
            if score > best_match_info['score']:
                best_match_info.update({'score': score, 'library': file_data[0], 'version': file_data[1], 'file_path': file_data[2]})
                if score > 0.95:
                    break

    if best_match_info['score'] > 0.95:
        return True, best_match_info['score'], best_match_info['library'], best_match_info['version']
    return None, None, None, None

def normalize_url(url, current_url):
    parsed_current_url = urlparse(current_url)
    base_url = f"{parsed_current_url.scheme}://{parsed_current_url.netloc}"
    if url.startswith("//"):
        return f"{parsed_current_url.scheme}:{url}"
    elif url.startswith("/"):
        return f"{base_url}{url}"
    return url

def insert_page_get_id(page_url, website_id, db_name=DatabaseName):
    """
    Inserts a page URL and website ID into the database and returns the page ID.
    
    :param page_url: URL of the page to insert.
    :param website_id: ID of the website the page belongs to.
    :param db_name: Name of the database.
    :return: ID of the inserted page.
    """
    try:
        conn = sqlite3.connect(db_name)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO pages (url, website_id) VALUES (?, ?)", (page_url, website_id))
        conn.commit()
        page_id = cursor.lastrowid
        conn.close()
        return page_id
    except sqlite3.Error as e:
        print(f"Database error: {e}")
        logging.error(f"Database error: {e}")
    except Exception as e:
        print(f"Exception in _query: {e}")
        logging.error(f"Exception in _query: {e}")
    return None

def get_webpage_scripts(driver):
    webpage_scripts = []
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    current_url = driver.current_url

    for script in soup.find_all('script'):
        if script is not None:
            if not script.get('src'):
                script_content = script.text
                if script_content:
                    webpage_scripts.append((None, script_content))
            else:
                script_src = script['src']
                if script_src.startswith('data:'):
                    content_type, content_data = script_src.split(',', 1)
                    if ';base64' in content_type:
                        content_data = base64.b64decode(content_data)
                    else:
                        content_data = unquote_plus(content_data)
                    webpage_scripts.append((script_src, content_data.decode('utf-8')))
                else:
                    script_src = normalize_url(script_src, current_url)
                    try:
                        response = requests.get(script_src)
                        if response.status_code == 200:
                            script_content = response.text
                            webpage_scripts.append((script_src, script_content))
                        else:
                            logging.error(f"Failed to fetch script: {script_src}, Status Code: {response.status_code}")
                    except Exception as e:
                        logging.error(f"Error fetching script {script_src}: {e}")
        else:
            logging.error("No Script tags found")
    return webpage_scripts


def detect_inline_js_libraries(soup):
    inline_libraries = []
    patterns = {
        'jQuery': r'\$\(',  
        'Dojo': r'dojo\.require',
        'D3': r'd3\.',
        'Pixi.js': r'new PIXI\.',
        'Three.js': r'THREE\.',
        'Velocity': r'\.velocity\(',
        'React': r'ReactDOM\.render\(',
        'Vue': r'new Vue\(',
        'Ember': r'Ember\.Application\.create\(',
        'Angular': r'angular\.module\(',
    }
    scripts = soup.find_all('script')
    for script in scripts:
        if not script.get('src'):
            script_content = script.string if script.string else ""
            for lib, pattern in patterns.items():
                if re.search(pattern, script_content, re.IGNORECASE):
                    inline_libraries.append({"library": lib, "how": "inline script", "where": "inline", "version": "Unknown"})
    return inline_libraries

def detect_js_libraries(driver, current_url, soup=None):
    try:
        libraries_to_check = [
            {"library": "Webpack", "check": "!!(window.webpackJsonp || window['webpackJsonp']) ? 'Unknown' : null"},
            {"library": "jQuery", "check": "(typeof jQuery !== 'undefined') ? jQuery.fn.jquery : null"},
            {"library": "Dojo", "check": "(typeof dojo !== 'undefined') ? dojo.version.toString() : null"},
            {"library": "D3", "check": "(typeof d3 !== 'undefined') ? d3.version : null"},
            {"library": "Pixi.js", "check": "(typeof PIXI !== 'undefined') ? PIXI.VERSION : null"},
            {"library": "Three.js", "check": "(typeof THREE !== 'undefined') ? THREE.REVISION : null"},
            {"library": "Velocity.js", "check": "typeof Velocity !== 'undefined' ? Velocity : null"},
            {"library": "React", "check": "(typeof React !== 'undefined') ? React.version : ((typeof _react !== 'undefined') ? _react.version : null)"},
            {"library": "Vue.js", "check": "(typeof Vue !== 'undefined') ? Vue.version : null"},
            {"library": "Ember.js", "check": "(typeof Ember !== 'undefined') ? Ember.VERSION : null"},
            {"library": "Angular", "check": "(window.angular !== undefined) ? window.angular.version.full : ((window.ng !== undefined && window.ng.version !== undefined) ? window.ng.version.full : null)"}
        ]
        
        libraries = []
        
        if soup is None:
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            
        if detect_webpack(soup):
            libraries.append({"library": "Webpack", "version": "Unknown", "how": "known filename", "where": "scripts"})
            
        for lib in libraries_to_check:
            lib_version_info = get_library_version(driver, lib)
            if lib_version_info:
                libraries.append(lib_version_info)
                
        inline_detected_scripts = detect_inline_js_libraries(soup=soup)
        if inline_detected_scripts:
            libraries.extend(inline_detected_scripts)
            
        scripts = soup.find_all('script', src=True)
        for script in scripts:
            src = script.get('src')
            patterns = {
                'jquery': r"(?i)jquery(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'dojo': r"(?i)dojo(?:-\d+\.\d+\.\d+)?\.js",
                'd3': r"(?i)d3(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'pixi': r"(?i)pixa(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'three': r"(?i)three(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'velocity': r"(?i)velocity(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'react': r"(?i)react(?:-\d+\.\d+\.\d+)?(?:\.development|\.production\.min)?\.js",
                'vue': r"(?i)vue(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'ember': r"(?i)ember(?:-\d+\.\d+\.\d+)?\.min\.js",
                'angular': r"(?i)angular(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js"
            }
            for lib, pattern in patterns.items():
                if re.search(pattern, src, re.IGNORECASE):
                    parsed_url = urlparse(src)
                    version_query = parse_qs(parsed_url.query).get('v')
                    version = version_query[0] if version_query else 'Unknown'
                    
                    lib_name = lib.capitalize()
                    if lib == "jquery":
                        lib_name = "jQuery"
                    elif lib == "dojo":
                        lib_name = "Dojo.js"
                    elif lib == "d3":
                        lib_name = "D3"
                    elif lib == "pixi":
                        lib_name = "PixiJS"
                    elif lib == "three":
                        lib_name = "Three.js"
                    elif lib == "vue":
                        lib_name = "Vue.js"
                    elif lib == "react":
                        lib_name = "React.js"
                    elif lib == "velocity":
                        lib_name = "Velocity.js"    
                    elif lib == "ember":
                        lib_name = "Ember.js"
                    elif lib == "angular":
                        lib_name = "Angular"
                    
                    libraries.append({"library": lib_name, "version": version, "how": "known pattern", "where": "script src"})
                    break
        
        if libraries:
            flattened_libraries = []
            for item in libraries:
                if isinstance(item, list):
                    flattened_libraries.extend(item)
                elif isinstance(item, dict):
                    flattened_libraries.append(item)
        
            print('Found Libraries in url:'+ current_url +': ' + ', '.join([f"{lib['library']} {lib['version']}" for lib in flattened_libraries]))
        else:
            print('No libraries found.')
        return libraries
    except Exception as e:
        logging.error(f"Error in detect_js_libraries at {current_url}: {e}")
    return libraries

def process_single_website(website, db_name=DatabaseName):
    status = get_website_status(website, db_name=db_name)
    if status == 'Done' or status == "No Libraries Found" :
        print(f"Skipping {website} as it is already processed.")
        return
    
    website_id = insert_website_get_id(website, db_name=db_name)

    try:
        update_website_status(website, 'Started', db_name=db_name)
        
        homepage_url = website
        page_id = insert_page_get_id(homepage_url, website_id, db_name=db_name)
        if get_page_status(homepage_url, db_name=db_name):
            print(f"Skipping already processed homepage: {homepage_url}")
            return
        
        with create_webdriver() as driver:
            driver.get(homepage_url)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            js_libraries_detected = detect_js_libraries(driver, homepage_url, soup=soup)
            
            if js_libraries_detected:
                insert_scripts(page_id, js_libraries_detected, db_name=db_name)
                update_page_status(homepage_url, "Done", db_name=db_name)
                update_website_status(website, 'Done', db_name=db_name)
                print(f"JavaScript libraries found in {website}: {js_libraries_detected}")
            else:
                update_page_status(homepage_url, "No Libraries Found", db_name=db_name)
                update_website_status(website, 'No Libraries Found', db_name=db_name)
                print(f"No libraries found in {website}")
    except Exception as e:
        print(f"Error processing {website}: {e}")
        logging.error(f"Error processing {website}: {e}")
        update_website_status(website, 'Error', db_name=db_name)

def process_websites(websites, db_name=DatabaseName, max_workers=5):
    statuses_to_fetch = ["No Libraries Found", "Done"]
    not_done_websites = [website for website in websites if website not in fetch_websites_by_status(statuses=statuses_to_fetch, db_name=db_name)]

    total_websites = len(not_done_websites)
    processed_websites = 0
    if total_websites <= 0:
        print("No websites to process or all websites are already marked as 'Done'.")
        return
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_website = {executor.submit(process_single_website, website, db_name): website for website in not_done_websites}
        for future in as_completed(future_to_website):
            website = future_to_website[future]
            try:
                processed_websites += 1
                data = future.result()
                progress_percent = (processed_websites / total_websites) * 100
                print(f"Progress: {progress_percent:.2f}% ({processed_websites}/{total_websites})")
            except Exception as exc:
                logging.error(f"Error processing {website}: {exc}")
                print(f'{website} generated an exception: {exc}')
            else:
                print(f'{website} is processed.')
        print("All websites have been processed.")

def main():
    with open("WebList1000_modified.txt", 'r') as file:
        websites = [line.strip() for line in file if line.strip()]  
    process_websites(websites=websites, max_workers=3)
    
if __name__ == "__main__":
    scripts = get_scripts_list_from_folder("libraries")
    libraries_base_path="Libraries"
    files_to_compare = []
    for library_name in os.listdir(libraries_base_path):
        library_path = os.path.join(libraries_base_path, library_name)
        for version_dir in os.listdir(library_path):
            version_path = os.path.join(library_path, version_dir)
            for file in os.listdir(version_path):
                file_path = os.path.join(version_path, file)
                files_to_compare.append((library_name, version_dir, file_path))
                
    initialize_db()
    main()
    print("Finished Program")
