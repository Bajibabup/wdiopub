
describe('Core FW UI tests',async()=>
{
   
   
    it('Login Page TC',async()=>
{
     //browser is WDIO keyword, This Code instatiate the Webbrowser based on capabalities defined in the wdio.conf
    
    await   browser.url("https://mot-mydentegra.deltads.ent/forms_dentebdwebapps.html")
    console.log(await browser.getTitle())
  })

})