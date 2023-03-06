class LoginPage
{
/* getters can have multiple lines of code to bind and it treated as a property, 
so it best practice to use Getters/Setters to define the Locators and set the values during run time */

get userName()

{
    return $("#username")
}
get password()
{
    return $("#password")
}

get signIn()
{
    return $("#loginButton")
}



async Login(userName,password)
{
    await this.userName.setValue(userName)
    await this.password.setValue(password)
    await this.signIn.click()

}

}
//this-it represents current class object
module.exports =new LoginPage()
