SELECT COUNT(DISTINCT pages.website_id)
FROM scripts
JOIN pages ON scripts.page_id = pages.id
WHERE scripts.Library LIKE '%webpack%';

SELECT COUNT(DISTINCT pages.website_id)
FROM scripts
JOIN pages ON scripts.page_id = pages.id
WHERE scripts.Library IN (SELECT DISTINCT Library from scripts where Library not like'webpack');


SELECT scripts.Library, COUNT(DISTINCT pages.website_id) AS count
FROM scripts
JOIN pages ON scripts.page_id = pages.id
GROUP BY scripts.Library
ORDER BY count DESC
LIMIT 1;

SELECT 
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.critical_vulnerabilities > 0) as critical,
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.high_vulnerabilities > 0) as high,
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.medium_vulnerabilities > 0) as medium,
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.low_vulnerabilities > 0) as low
FROM JSLibraryVersionVulnerabilities
JOIN scripts ON scripts.Library = JSLibraryVersionVulnerabilities.library_name AND scripts.version = JSLibraryVersionVulnerabilities.version
JOIN pages ON scripts.page_id = pages.id;

SELECT scripts.JSTypeHow, COUNT(DISTINCT pages.website_id) AS count
FROM scripts
JOIN pages ON scripts.page_id = pages.id
GROUP BY scripts.JSTypeHow
ORDER BY count DESC;

SELECT COUNT(DISTINCT pages.website_id)
FROM scripts
JOIN pages ON scripts.page_id = pages.id
JOIN websites ON pages.website_id = websites.id
WHERE scripts.Library LIKE '%webpack%' AND websites.id IN (SELECT id FROM websites LIMIT 100);

SELECT COUNT(DISTINCT pages.website_id)
FROM scripts
JOIN pages ON scripts.page_id = pages.id
JOIN websites ON pages.website_id = websites.id
WHERE scripts.Library IN ('jQuery', 'Dojo', 'D3', 'Pixi', 'Three', 'Velocity', 'React', 'Vue', 'Ember', 'Angular')
AND websites.id IN (SELECT id FROM websites LIMIT 100);

SELECT scripts.Library, COUNT(DISTINCT pages.website_id) AS count
FROM scripts
JOIN pages ON scripts.page_id = pages.id
JOIN websites ON pages.website_id = websites.id
WHERE websites.id IN (SELECT id FROM websites LIMIT 100)
GROUP BY scripts.Library
ORDER BY count DESC
LIMIT 1;

SELECT 
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.critical_vulnerabilities > 0) as critical,
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.high_vulnerabilities > 0) as high,
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.medium_vulnerabilities > 0) as medium,
  COUNT(DISTINCT pages.website_id) FILTER (WHERE JSLibraryVersionVulnerabilities.low_vulnerabilities > 0) as low
FROM JSLibraryVersionVulnerabilities
JOIN scripts ON scripts.Library = JSLibraryVersionVulnerabilities.library_name AND scripts.version = JSLibraryVersionVulnerabilities.version
JOIN pages ON scripts.page_id = pages.id
JOIN websites ON pages.website_id = websites.id
WHERE websites.id IN (SELECT id FROM websites ORDER BY id LIMIT 100);

SELECT scripts.JSTypeWhere, COUNT(DISTINCT pages.website_id) AS count
FROM scripts
JOIN pages ON scripts.page_id = pages.id
JOIN websites ON pages.website_id = websites.id
WHERE websites.id IN (SELECT id FROM websites ORDER BY id LIMIT 100)
GROUP BY scripts.JSTypeWhere
ORDER BY count DESC;

