import {test,expect} from "@playwright/test"
import { HomePage } from "../../pages/HomePage"
import { LoginPage } from "../../pages/LoginPage"
import users from "../../test-data/users.json"
import { SignupDetailsPage } from "../../pages/SignupDetailsPage"


test("Test Case 4: Logout User",async({page})=>{
    await page.goto("/")
    const homePage= new HomePage(page)
    await homePage.clickSignupLogin()

    const loginPage=new LoginPage(page)
    await loginPage.loginDetails(users.freshUser.email,users.freshUser.password)

    const loggedinCheck=new SignupDetailsPage(page)
    await expect(await loggedinCheck.getLoggedInUserLink(users.freshUser.name)).toBeVisible()

    await loginPage.logoutLink()
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login")


})