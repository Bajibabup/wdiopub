//const credentials =  JSON.parse(JSON.stringify(require("test/testData/loginTestData.json")))

const loginPage =require('../../../../pageobjects/login.js')

const fs =require('fs')
let testdata =JSON.parse(fs.readFileSync('test/testData/loginTestData.json'))

/* This test fecthes the test data from  from loginTestData.json file and test it for all data sets
Also uses the Page Objects from login.js file*/

describe('Delta Core FW UI tests',async()=>
{
    
    testdata.forEach(  ({username,password})  =>{
    it('Login Page TC',async()=>
{
     //browser is WDIO keyword, 
     console.log("Its a parametrization test")
     await   browser.url("")
     await loginPage.Login(username,password)   
})
 })
})
