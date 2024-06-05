from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
import re
import sqlite3
import requests
from urllib.robotparser import RobotFileParser
import os
from difflib import SequenceMatcher
import logging
import base64

DatabaseName = "FinalDBMaltese.db"
logging.basicConfig(filename='error_log.txt', level=logging.ERROR, format='%(asctime)s:%(levelname)s:%(message)s')

#region

def initialize_db(db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        
        #Adjust existing Websites table
        cursor.execute('''CREATE TABLE IF NOT EXISTS websites
                          (id INTEGER PRIMARY KEY, Domain TEXT UNIQUE, Status TEXT)''')
        
        #Create Pages table
        cursor.execute('''CREATE TABLE IF NOT EXISTS pages
                          (id INTEGER PRIMARY KEY, website_id INTEGER, url TEXT, status TEXT
                          ,
                           FOREIGN KEY(website_id) REFERENCES websites(id))''')
        
        #Create Scripts table
        cursor.execute('''CREATE TABLE IF NOT EXISTS scripts
                          (id INTEGER PRIMARY KEY,page_id INTEGER, JSTypeWhere TEXT, JSTypeHow TEXT, Library TEXT, version TEXT
                          ,FOREIGN KEY(page_id) REFERENCES pages(id))''')
        
        #Create JSLibraryVersionVulnerabilities table not linked to the others
        cursor.execute('''CREATE TABLE IF NOT EXISTS JSLibraryVersionVulnerabilities
                          (library TEXT, version TEXT, vulnerable TEXT, level TEXT)''')


def insert_scripts(page_id, libraries, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()

        # Initialize a new list to hold flattened library information
        flattened_libraries = []

        # Iterate through each item in the original libraries list
        for item in libraries:
            # If the item is a dictionary (expected case), append it directly
            if isinstance(item, dict):
                flattened_libraries.append(item)
            # If the item is a list, extend flattened_libraries with this list
            elif isinstance(item, list):
                for subitem in item:
                    # Ensure the subitem is a dictionary before adding
                    if isinstance(subitem, dict):
                        flattened_libraries.append(subitem)
                    else:
                        print("Unexpected structure in libraries list:", subitem)
                        # Handle unexpected structure or skip
            else:
                print("Unexpected structure in libraries list:", item)
                # Handle unexpected structure or skip

        # Prepare the data for database insertion
        libraries_data = [
            (page_id,
             lib.get('where', 'default_where'),
             lib.get('how', 'default_how'),
             lib.get('library', 'default_library'),
             lib.get('version', 'default_version'))
            for lib in flattened_libraries
        ]

        # Execute the database insertion
        cursor.executemany('''INSERT INTO scripts (page_id, JSTypeWhere, JsTypeHow, library, version)
                              VALUES (?, ?, ?, ?, ?)''', libraries_data)

def check_website_for_cdn(website_url, driver, db_name=DatabaseName):
    #Check if website is using any of the CDN Links to match the js library
    libraries = []
    try:
        #Use Selenium's driver to get current page's source for compatibility with dynamic content
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        scripts = soup.find_all('script')
        if scripts:
            with sqlite3.connect(db_name) as conn:
                cursor = conn.cursor()
                for script_tag in scripts:
                    src = script_tag.get('src')
                    if src:
                        cursor.execute("SELECT * FROM library_cdn_links WHERE cdn_link=?", (src,))
                        match = cursor.fetchone()
                        if match:
                            #print(f"Match found on {website_url}: {match[2]} for library {match[1]} version {match[3]}")
                            libraries.append({"how":"cdn","where":"link","library": {match[1]}, "version": {match[3]}})
    except Exception as e:
        print(f"Error finding CDN {website_url}: {e}")
        logging.error(f"Error finding CDN {website_url}: {e}")
    finally:
        return libraries

def check_page_processed(website_id, link, db_name=DatabaseName):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM pages WHERE website_id = ? AND url = ?", (website_id, link))
    result = cursor.fetchone()
    conn.close()
    return result is not None

def insert_page_get_id(url, website_id , db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT OR IGNORE INTO pages (url,website_id,status) VALUES (?,?,?)", (url,website_id,'Started'))
        cursor.execute("SELECT id FROM pages WHERE url = ?", (url,))
        website_id = cursor.fetchone()[0]
    return website_id

def fetch_pages_by_status(status, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT url FROM pages WHERE status = ?", (status,))
        return [row[0] for row in cursor.fetchall()]
    
def insert_website_get_id(url, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT OR IGNORE INTO websites (Domain) VALUES (?)", (url,))
        cursor.execute("SELECT id FROM websites WHERE Domain = ?", (url,))
        website_id = cursor.fetchone()[0]
    return website_id

def fetch_websites_by_status1(status, db_name=DatabaseName):
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Domain FROM websites WHERE Status = ?", (status,))
        return [row[0] for row in cursor.fetchall()]

def fetch_websites_by_status(statuses, db_name=DatabaseName):  # Assuming .db extension for clarity
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        # Prepare a tuple of status values for the SQL query's parameters
        # The tuple is required for the query to correctly replace the placeholder with the values
        statuses_tuple = tuple(statuses)
        # Use the IN operator to select domains with any of the statuses in the statuses_tuple
        query = "SELECT Domain FROM websites WHERE Status IN ({seq})".format(seq=','.join(['?']*len(statuses)))
        cursor.execute(query, statuses_tuple)
        return [row[0] for row in cursor.fetchall()]

def update_website_status(url, status, db_name=DatabaseName):
    #Update the status of website
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute('''UPDATE websites SET Status = ? WHERE Domain = ?''', (status, url))

def update_page_status(url, status, db_name=DatabaseName):
    #Update the status of page
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute('''UPDATE pages SET Status = ? WHERE url = ?''', (status, url))

def get_website_status(url, db_name=DatabaseName):
    #Check if website completed
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Status FROM websites WHERE Domain = ? AND status like 'Done'", (url,))
        status = cursor.fetchone()
        if status:
            return status[0]
        else:
            return None

def get_page_status(url, db_name=DatabaseName):
    #Check if page completed
    with sqlite3.connect(db_name) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT status FROM pages WHERE url = ? AND status like 'Done' ", (url,))
        status = cursor.fetchone()
        if status:
            return status[0]
        else:
            return None
        
#endregion    
def get_scripts_list_from_folder(libraries_base_path="Libraries"):
    scripts = []
    for library_name in os.listdir(libraries_base_path):
        library_path = os.path.join(libraries_base_path, library_name)
        if os.path.isdir(library_path):  #Check if it's a directory
            for version_dir in os.listdir(library_path):
                version_path = os.path.join(library_path, version_dir)
                if os.path.isdir(version_path):  #Check if it's a directory
                    for file in os.listdir(version_path):
                        if file.endswith('.js'):  #Check if the file is a JS file
                            file_path = os.path.join(version_path, file)
                            script_content = read_file_content(file_path)
                            scripts.append((library_name, version_dir, script_content))  # Include version_dir in the tuple
    return scripts

def can_fetch_url(website_url, user_agent='*'):
    #Check if website has Robots.txt for ethical reasons 
    parsed_url = urlparse(website_url)
    base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"
    robots_url = f"{base_url}/robots.txt"
    rp = RobotFileParser()
    rp.set_url(robots_url)
    rp.read()
    can_fetch = rp.can_fetch(user_agent, website_url)
    return can_fetch

def create_webdriver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Enables headless mode
    chrome_options.add_argument("--no-sandbox")  # Bypass OS security model, REQUIRED for Docker
    chrome_options.add_argument("--disable-dev-shm-usage")  # Overcome limited resource problems
    chrome_options.add_argument("--window-size=1920,1080")  # Optional: Set a window size if specific dimensions are required for the site
    driver = webdriver.Chrome(options=chrome_options)
    return driver

def create_firefox_webdriver():
    options = Options()
    options.add_argument("--headless")  # Enables headless mode for Firefox
    options.add_argument("--window-size=1920,1080")  # Optional, if specific dimensions are required
    # Additional Firefox-specific configurations can be added here
    driver = webdriver.Firefox(options=options)
    return driver

def get_base_url(url):
    parsed_url = urlparse(url)
    base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"
    return base_url

def is_internal_link(base_url, link):
    return urlparse(link).netloc == urlparse(base_url).netloc

def get_links(driver, url, max_links=25):
    base_url = get_base_url(url)
    driver.get(url)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    links = set()  #Use a set to avoid duplicates
    links.add(url)
    a_tags = soup.find_all('a', href=True)
    if a_tags:
        for a in a_tags:
            href = a['href']
            #Check if the link is internal
            if href.startswith('http') and is_internal_link(base_url, href) and href not in links:
                links.add(href)
                if len(links) == max_links:
                    break
    return list(links)

# def detect_webpack(soup):
#     script_tags = soup.find_all('script', src=True)
#     webpack_patterns = [r"bundle\.js", r"webpack", r"\.chunk\.js"]
#     webpack_signature = re.compile(r"(webpackJsonp|webpackChunk)")
#     if script_tags:
#         for script in script_tags:
#             src = script.get('src', '')
#             if any(re.search(pattern, src, re.IGNORECASE) for pattern in webpack_patterns):
#                 #print(f"Webpack likely used (filename pattern): {src}")
#                 return True  #Filename pattern matches commonly used in Webpack
#             #download and search within JS files for webpack signatures
            
#             if src.startswith("http"):
#                 try:
#                     js_content = requests.get(src).text
#                     if webpack_signature.search(js_content):
#                         #print(f"Webpack signature found in file: {src}")
#                         return True  #Found webpack signature in file content
#                 except Exception as e:
#                     #print(f"Error downloading script: {src}, error: {e}")
#                     logging.error(f"Detecting Webpack Error {src}: {e}")

#     return False


def detect_webpack(soup):
    script_tags = soup.find_all('script', src=True)
    webpack_patterns = [r"bundle\.js", r"webpack", r"\.chunk\.js"]
    webpack_signature = re.compile(r"(webpackJsonp|webpackChunk)")
    if script_tags:
        for script in script_tags:
            src = script.get('src', '')
            if any(re.search(pattern, src, re.IGNORECASE) for pattern in webpack_patterns):
                return True  # Filename pattern matches commonly used in Webpack
            # Download and search within JS files for webpack signatures
            if src.startswith("http"):
                try:
                    js_content = requests.get(src).text
                    if webpack_signature.search(js_content):
                        return True  # Found webpack signature in file content
                except requests.exceptions.ConnectionError as e:
                    # Handle connection errors specifically
                    print(f"Could not download script {src}: Connection error")
                    logging.error(f"Connection error when accessing {src}: {e}")
                except Exception as e:
                    # Handle other errors
                    print(f"Error downloading script: {src}, error: {e}")
                    logging.error(f"Error downloading script: {src}: {e}")
    return False

def get_library_version(driver, lib_details):
    try:
        js_check = lib_details['check']
        version = driver.execute_script(f"return {js_check}")
        if version is not None:
            version_str = str(version)
            return {
                "library": lib_details['library'],
                "version": version_str,
                "how": "execute script",
                "where": "scripts"
            }
        else:
            return None
    except Exception as e:
        logging.error(f"Error getting library version for {lib_details['library']}: {e}")
        print(f"Error getting library version for {lib_details['library']}: {e}")
        return None
def read_file_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def calculate_diff_score(file1_content, file2_content):
    matcher = SequenceMatcher(None, file1_content, file2_content)
    return matcher.ratio()

'''def compare_file(script_content, script_size, file_path, size_tolerance=1024):
    #print("Compering File size")
    file_size = os.path.getsize(file_path)
    if abs(file_size - script_size) <= size_tolerance:
        library_file_content = read_file_content(file_path)
        score = calculate_diff_score(script_content, library_file_content)
        return file_path, score
    return file_path, 0
'''
def compare_file(script_content, script_size, file_path, percentage_tolerance=5):
    # Calculate 5% of the script_size for tolerance
    size_tolerance = script_size * (percentage_tolerance / 100.0)
    
    # Get the size of the file at file_path
    file_size = os.path.getsize(file_path)
    
    # Compare file sizes within the tolerance
    if abs(file_size - script_size) <= size_tolerance:
        library_file_content = read_file_content(file_path)
        score = calculate_diff_score(script_content, library_file_content)
        return file_path, score
    return file_path, 0

def find_closest_match_parallel(script_content, libraries_base_path="Libraries", percentage_tolerance=5):
    print("Finding Closest Match")
    script_size = len(script_content.encode('utf-8'))
    best_match_info = {'score': 0, 'library': None, 'version': None, 'file_path': None}

    #Parallel comparison
    with ThreadPoolExecutor(max_workers=os.cpu_count()) as executor:
        futures = {executor.submit(compare_file, script_content, script_size, file_data[2], percentage_tolerance): file_data for file_data in files_to_compare}
        for future in as_completed(futures):
            file_data = futures[future]
            _, score = future.result()
            if score > best_match_info['score']:
                best_match_info.update({'score': score, 'library': file_data[0], 'version': file_data[1], 'file_path': file_data[2]})
                if score > 0.95:  #Early exit if a match is good enough
                    break

    # Check if the highest score meets the threshold
    if best_match_info['score'] > 0.95:
        return True, best_match_info['score'], best_match_info['library'], best_match_info['version']
    else:
        return None, None, None, None  # Or any other way you prefer to indicate a non-sufficient match
def find_closest_match(script_content, libraries_base_path="Libraries", percentage_tolerance=5):
    print("Finding Closest Match")
    script_size = len(script_content.encode('utf-8'))
    best_match_info = {'score': 0, 'library': None, 'version': None, 'file_path': None}

    # Sequential comparison
    for file_data in files_to_compare:
        _, score = compare_file(script_content, script_size, file_data[2], percentage_tolerance)
        if score > best_match_info['score']:
            best_match_info.update({'score': score, 'library': file_data[0], 'version': file_data[1], 'file_path': file_data[2]})
            if score > 0.95:  # Early exit if a match is good enough
                break

    # Check if the highest score meets the threshold
    if best_match_info['score'] > 0.95:
        return True, best_match_info['score'], best_match_info['library'], best_match_info['version']
    else:
        return None, None, None, None  # Or any other way you prefer to indicate a non-sufficient match

def get_base_url(current_url):
    from urllib.parse import urlparse
    parsed_url = urlparse(current_url)
    base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"
    return base_url

# def normalize_url(url, current_url):
#     if url.startswith('//'):
#         protocol = current_url.split(':')[0]
#         return f'{protocol}:{url}'
#     elif url.startswith('/'):
#         base_url = get_base_url(current_url)
#         return f'{base_url}{url}'
#     return url

# def get_webpage_scripts(driver):
#     webpage_scripts = []
#     soup = BeautifulSoup(driver.page_source, 'html.parser')
#     current_url = driver.current_url
    
#     for script in soup.find_all('script'):
#         if script is not None:
#             if not script.get('src'):
#                 script_content = script.text
#                 if script_content:
#                     webpage_scripts.append((None, script_content))
#             else:
#                 script_src = normalize_url(script['src'], current_url)
#                 try:
#                     response = requests.get(script_src)
#                     if response.status_code == 200:
#                         script_content = response.text
#                         webpage_scripts.append((script_src, script_content))
#                     else:
#                         print(f"Failed to fetch script: {script_src}, Status Code: {response.status_code}")
#                 except Exception as e:
#                     print(f"Error fetching script {script_src}: {e}")
#         else:
#             print("No Script tags found")

#     return webpage_scripts
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
                    # Handle data URI
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
                            print(f"Failed to fetch script: {script_src}, Status Code: {response.status_code}")
                    except Exception as e:
                        print(f"Error fetching script {script_src}: {e}")
        else:
            print("No Script tags found")

    return webpage_scripts

def normalize_url(url, current_url):
    parsed_current_url = urlparse(current_url)
    base_url = f"{parsed_current_url.scheme}://{parsed_current_url.netloc}"
    if url.startswith("//"):
        return f"{parsed_current_url.scheme}:{url}"
    elif url.startswith("/"):
        return f"{base_url}{url}"
    else:
        return url

def detect_inline_js_libraries(soup):
    inline_libraries = []
    # Define patterns or conditions specific to libraries
    patterns = {
        'jQuery': r'\$\(',  #Looking for jQuery's $() pattern
        'Dojo': r'dojo\.require',  # Dojo's way of module importing
        'D3': r'd3\.',  #Accessing d3's methods
        'Pixi.js': r'new PIXI\.',  #Creating a new Pixi instance
        'Three.js': r'THREE\.',  #Accessing Three.js methods
        'Velocity': r'\.velocity\(',  #Calling Velocity's animation function
        'React': r'ReactDOM\.render\(',  #React's method to render components
        'Vue': r'new Vue\(',  #Instantiating Vue
        'Ember': r'Ember\.Application\.create\(',  #Starting an Ember application
        'Angular': r'angular\.module\(',  #Defining an Angular module
    }
    scripts = soup.find_all('script')
    if scripts:
        for script in scripts:
            
            if not script.get('src'):  # This means the script is inline
                script_content = script.string if script.string else ""
                for lib, pattern in patterns.items():
                    if re.search(pattern, script_content, re.IGNORECASE):
                        inline_libraries.append({"library": lib, "how": "inline script", "where": "inline","version": "Unknown"})
    return inline_libraries

def detect_js_libraries(driver,current_url,soup=None):
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
            
        #First, check if Webpack is used
        if detect_webpack(soup):
            libraries.append({"library": "Webpack", "version": "Unknown","how":"known filename","where":"scripts"})
            
        for lib in libraries_to_check:
            try:
                lib_version_info = get_library_version(driver, lib)
                if lib_version_info:
                    libraries.append(lib_version_info) 
            except Exception as e:
                logging.error(f"Error getting library version for {lib['library']} in {current_url}: {e}")
                print(f"Error getting library version for {lib['library']} in {current_url}: {e}")
        inline_detected_scripts = detect_inline_js_libraries(soup=soup)
        if(inline_detected_scripts):
            libraries.append(inline_detected_scripts)
            
        # Assuming soup is already defined
        scripts = soup.find_all('script', src=True)
        for script in scripts:
            src = script.get('src')
            # Pattern examples for popular libraries
            patterns = {
                'jquery': r"(?i)jquery(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'dojo': r"(?i)dojo(?:-\d+\.\d+\.\d+)?\.js",
                'd3': r"(?i)d3(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
                'pixi': r"(?i)pixi(?:-\d+\.\d+\.\d+)?(?:\.min)?\.js",
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
                    
                    # Ensure correct capitalization for the library name
                    lib_name = lib.capitalize()
                    # Adjust for libraries that have a specific capitalization convention
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
                    break  # Exit the loop after finding a match to prevent checking other patterns
        
        
        '''
        if len(libraries) == 0:
            
            webpage_scripts = get_webpage_scripts(driver)        
            if webpage_scripts:
                print("No Libraries found using patterns. Using diff tool:")
                for script_src, script_content in webpage_scripts:
                    match,score ,library_name,version = find_closest_match(script_content)

                    if match:
                        print(f"Match, Library: {library_name}, Version: {version}, Score: {score}")
                        libraries.append({
                            "library": library_name,
                            "version": version,
                            "how": "diff",
                            "where": "scripts"
                        })
                        break
                    if score: 
                        print("Highest score: ",score, " Website",website)
        '''
                    
        
        if libraries:
            flattened_libraries = []
            for item in libraries:
                if isinstance(item, list):
                    flattened_libraries.extend(item)  # Extend if item is a list
                elif isinstance(item, dict):
                    flattened_libraries.append(item)  # Append if item is a dict
        
            print('Found Libraries in url:'+ current_url +': ' + ', '.join([f"{lib['library']} {lib['version']}" for lib in flattened_libraries]))
        else:
            print('No libraries found.')
        return libraries
    except Exception as e:
        logging.error(f"Error in detect_js_libraries at {current_url}: {e}")
        print(f"Error detecting libraries in {current_url}: {e}")
    finally:
        return libraries
            
def visit_links(driver, website_id, website, links, db_name=DatabaseName):
    js_libraries_info = []
    js_type_where = ""
    js_type_how = ""
    for link in links:
        detected_libraries=[]
        page_id = insert_page_get_id(link,website_id, db_name=db_name)
        if get_page_status(link, db_name=db_name):
            print(f"Skipping already processed link: {link}")
            continue
        try:
            driver.get(link)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            #Check for CDN usage on each visited page
            #cdn_libraries_detected = check_website_for_cdn(link, driver, db_name=db_name)
            #if cdn_libraries_detected:
            #    detected_libraries.append( cdn_libraries_detected)  #Added call to check_website_for_cdn
            
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            js_libraries_detected = detect_js_libraries(driver,link ,soup=soup)
           
            if js_libraries_detected:
                detected_libraries.append(js_libraries_detected)
            libraries=[]
            libraries.extend(detected_libraries)
            #libraries = [{'how': lib['how'], 'where': lib['where'], 'library': lib['library'], 'version': lib['version']} for lib in detected_libraries]
            #was fixing the above line
            if libraries:
                js_libraries_info.append({link: libraries})
                insert_scripts(page_id, libraries, db_name=db_name)  #Adjusted call
                update_page_status(link,"Done",db_name=db_name)  
                print (link," Done")
            else:
                update_page_status(link,"No Libraries found",db_name=db_name) 
                print(link," No Libraries found") 
        except Exception as e:
            print(f"Error Visiting link: {link}: {e}")
            logging.error(f"Error Visiting link: {link}: {e}")
            update_page_status(link,"Error",db_name=db_name)
        
    if js_libraries_info:
        print(f"JavaScript libraries found in {website}: {js_libraries_info}")
        
    return js_libraries_info

def process_single_website(website, db_name=DatabaseName):
        # Check robots.txt before proceeding
        status = get_website_status(website, db_name=db_name)
        #if status == 'Done' or status == "No Libraries Found" or status =="Blocked":
        if status == 'Done' or status == "No Libraries Found" or status == "Error":

            print(f"Skipping {website} as it is already processed.")
            return
        else:
            website_id = insert_website_get_id(website, db_name=db_name)

            # if not can_fetch_url(website):
            #     print(f"Scraping blocked by robots.txt: {website}")
            #     update_website_status(website, 'Blocked', db_name=db_name)
            #     return
            #driver =create_firefox_webdriver()
            driver = create_webdriver()
            try:
                update_website_status(website, 'Started', db_name=db_name)
                
                links = get_links(driver, website)
                update_website_status(website, 'Working', db_name=db_name)
                
                print(f"Collecting links from: {website}")
                js_libraries_info = visit_links(driver, website_id, website, links, db_name=db_name)
                if(js_libraries_info):
                    update_website_status(website, 'Done', db_name=db_name)
                    print(f'Done {website}')
                
                else:
                    update_website_status(website, 'No Libraries Found', db_name=db_name)
                    print(f"No Libraries Found {website}")
                driver.quit()
                return js_libraries_info
            except Exception as e:
                print(f"Error processing {website}: {e}")
                logging.error(f"Error processing {website}: {e}")
                update_website_status(website, 'Error', db_name=db_name)
            finally:
                if driver:
                    driver.quit()
        
def process_websites(websites, db_name=DatabaseName, max_workers=10):
    #Fetch websites that are not marked as 'Done'
    #done_websites = [website for website in websites if website in fetch_websites_by_status('Done', db_name=db_name)]
    statuses_to_fetch = ["No Libraries Found", "Done","Error"]
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
    with open("WebListGov.txt", 'r') as file:
        websites = [line.strip() for line in file if line.strip()]  
    process_websites(websites=websites)
    
if __name__ == "__main__":
    scripts = get_scripts_list_from_folder("libraries")
    libraries_base_path="Libraries"
    files_to_compare = []
    # Gather list of files to compare
    for library_name in os.listdir(libraries_base_path):
        library_path = os.path.join(libraries_base_path, library_name)
        for version_dir in os.listdir(library_path):
            version_path = os.path.join(library_path, version_dir)
            for file in os.listdir(version_path):
                file_path = os.path.join(version_path, file)
                files_to_compare.append((library_name, version_dir, file_path))
                
    initialize_db()  #Make sure the database is initialized
    main()  #Start processing
    print("Finished Program")