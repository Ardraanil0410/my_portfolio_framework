import {test,expect} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage"
import users from "../../test-data/users.json"
import { SignupDetailsPage } from "../../pages/SignupDetailsPage"
import { HomePage } from "../../pages/HomePage"

test("Test Case 2: Login User with correct email and password",async({page})=>{
    await page.goto("/")
    const homePage=new HomePage(page)
    const loginPage=new LoginPage(page)
    const loggedinPage=new SignupDetailsPage(page)
    await homePage.clickSignupLogin()
    await loginPage.loginDetails(users.validUser.email,users.validUser.password)

    //Verify succesful login
    await expect(await loggedinPage.getLoggedInUserLink(users.validUser.name)).toBeVisible()

    //Delete the account
    await loggedinPage.deleteAccount()
    await expect(loggedinPage.deletionSuccessMsg).toBeVisible()
   

})