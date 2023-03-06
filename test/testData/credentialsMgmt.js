class credentials{
jiracred()
{
  var jiruid=process.env.JIRA_USER;
  var jirspass=process.env.JIRA_PAS;
  var zapiUrl=process.env.ZAPI_URL;
  var jirsUrl=process.env.JIRA_URL;
const login = {
  'jiraUser': jiruid,
  'jiraPassword': jirspass,
  'zapiUrl' : zapiUrl,
  'jiraUrl' : jirsUrl,
 }; 
}
}
module.exports =new credentials()