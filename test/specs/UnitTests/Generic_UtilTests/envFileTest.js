const loginPage =require('../../../pageobjects/login.js')
const fs =require('fs')
let credentials =JSON.parse(fs.readFileSync('test/testData/loginTestData.json'))

/* This test is to test .env file, it  fecthes the credentials and other Env related paramaters from .env

*/
var jirauid=process.env.JIRA_USER;

describe('Delta Core FW env tests',async()=>
{
  
    
    it('Login Page TC',async()=>
{
     //browser is WDIO keyword, 
     console.log("Its a env file test")
     console.log("Env Paramater:", process.env.TEST_UID)
     console.log("Env UID Paramater:", jirauid)
       
     await   browser.url("")
     await loginPage.Login(process.env.TEST_UID,"test")   
})

})