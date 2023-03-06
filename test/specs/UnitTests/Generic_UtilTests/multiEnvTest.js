const loginPage =require('../../../pageobjects/login.js')
const fs =require('fs')
let credentials =JSON.parse(fs.readFileSync('test/testData/loginTestData.json'))

/* this test overriddes the base URL from basic config during run time and get it from uatEnvwdio.conf.js, 
execute npm run multienvtest to test it.Customized properties can be set for each Env on need basis.


*/
describe('Delta Core FW env tests',async()=>
{
  
    
    it('Login Page TC',async()=>
{
     //await   browser.url("")
     //await browser.url(browser.options.testURL)
     await browser.url(browser.options.testURL)
   
})

})