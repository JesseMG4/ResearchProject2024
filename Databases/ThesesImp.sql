select status ,count(*) from websites group by status
select status ,count(*) from pages group by status
select JSTypeHow ,count(*) from scripts group by JSTypeHow
select JSTypeWhere ,count(*) from scripts group by JSTypeWhere
select Library ,version ,count(*) from scripts group by Library ,version
select Library ,count(*) from scripts group by Library



select * from websites
SELECT * from pages
SELECT * from scripts
SELECT * from JSLibraryVersionVulnerabilities

SELECT DISTINCT Domain,p. FROM websites w join pages p on w.id = p.website_id JOIN scripts s on s.page_id = p.id WHERE Library not like 'Webpack' and p.id
select * from pages
SELECT * from scripts
select* from websites
select* from JSLibraryVersionVulnerabilities

select DISTINCT w.Domain, Library,version,JSTypeHow,JSTypeWhere from pages p join scripts s on p.id = s.page_id JOIN websites w on w.id = p.website_id WHERE version not like 'Unknown' order by website_id
select w.Domain, Library,version,JSTypeHow,JSTypeWhere, count(Library) from pages p join scripts s on p.id = s.page_id JOIN websites w on w.id = p.website_id WHERE version not like 'Unknown' group by website_id order by website_id
SELECT *  from pages p join scripts s on p.id = s.page_id JOIN websites w on w.id = p.website_id

SELECT 
  w.Domain,
  s.JSTypeHow,
  s.JSTypeWhere,
  count(jvl.critical_vulnerabilities) AS total_critical_vulnerabilities,
  count(jvl.high_vulnerabilities) AS total_high_vulnerabilities,
  count(jvl.medium_vulnerabilities) AS total_medium_vulnerabilities,
  count(jvl.low_vulnerabilities) AS total_low_vulnerabilities
FROM websites w
JOIN pages p ON w.id = p.website_id
JOIN scripts s ON p.id = s.page_id
JOIN JSLibraryVersionVulnerabilities jvl ON s.Library like jvl.library_name AND s.version = jvl.version
GROUP BY w.Domain

SELECT 
	w.Domain,
	count(jvl.critical_vulnerabilities) AS total_critical_vulnerabilities,
	count(jvl.high_vulnerabilities) AS total_high_vulnerabilities,
	count(jvl.medium_vulnerabilities) AS total_medium_vulnerabilities,
	count(jvl.low_vulnerabilities) AS total_low_vulnerabilities
FROM websites w
JOIN pages p ON w.id = p.website_id
JOIN scripts s ON p.id = s.page_id
JOIN JSLibraryVersionVulnerabilities jvl ON s.Library like jvl.library_name AND s.version = jvl.version 
GROUP BY w.Domain

SELECT 
    w.Domain,
    SUM(jv.low_vulnerabilities) AS Low,
    SUM(jv.medium_vulnerabilities) AS Medium,
    SUM(jv.high_vulnerabilities) AS High,
    SUM(jv.critical_vulnerabilities) AS Critical
FROM 
    websites w
JOIN 
    pages p ON w.id = p.website_id
JOIN 
    scripts s ON p.id = s.page_id
JOIN 
    JSLibraryVersionVulnerabilities jv ON s.Library LIKE jv.library_name AND s.version LIKE jv.version
GROUP BY 
    w.Domain;
	
	

SELECT 
    w.Domain,
    SUM(jv.low_vulnerabilities) AS Low,
    SUM(jv.medium_vulnerabilities) AS Medium,
    SUM(jv.high_vulnerabilities) AS High,
    SUM(jv.critical_vulnerabilities) AS Critical
FROM 
    websites w
JOIN 
    pages p ON w.id = p.website_id
JOIN 
    scripts s ON p.id = s.page_id
JOIN 
    JSLibraryVersionVulnerabilities jv ON s.Library LIKE jv.library_name AND s.version LIKE jv.version
GROUP BY 
    w.Domain
HAVING 
    SUM(jv.low_vulnerabilities) + SUM(jv.medium_vulnerabilities) + SUM(jv.high_vulnerabilities) + SUM(jv.critical_vulnerabilities) > 0;

SELECT 
COUNT(DISTINCT w.Domain) AS Websites_With_Low_Vulnerabilities
FROM 
    websites w
JOIN 
    pages p ON w.id = p.website_id
JOIN 
    scripts s ON p.id = s.page_id
JOIN 
    JSLibraryVersionVulnerabilities jv ON s.Library LIKE jv.library_name AND s.version LIKE jv.version
WHERE 
    jv.low_vulnerabilities > 0;
	
SELECT 
    COUNT(DISTINCT w.Domain) AS Websites_With_Medium_Vulnerabilities
FROM 
    websites w
JOIN 
    pages p ON w.id = p.website_id
JOIN 
    scripts s ON p.id = s.page_id
JOIN 
    JSLibraryVersionVulnerabilities jv ON s.Library LIKE jv.library_name AND s.version LIKE jv.version
WHERE 
    jv.medium_vulnerabilities > 0;

SELECT 
    COUNT(DISTINCT w.Domain) AS Websites_With_High_Vulnerabilities
FROM 
    websites w
JOIN 
    pages p ON w.id = p.website_id
JOIN 
    scripts s ON p.id = s.page_id
JOIN 
    JSLibraryVersionVulnerabilities jv ON s.Library LIKE jv.library_name AND s.version LIKE jv.version
WHERE 
    jv.high_vulnerabilities > 0;

SELECT 
    COUNT(DISTINCT w.Domain) AS Websites_With_Critical_Vulnerabilities
FROM 
    websites w
JOIN 
    pages p ON w.id = p.website_id
JOIN 
    scripts s ON p.id = s.page_id
JOIN 
    JSLibraryVersionVulnerabilities jv ON s.Library LIKE jv.library_name AND s.version LIKE jv.version
WHERE 
    jv.critical_vulnerabilities > 0;
	


