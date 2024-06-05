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
