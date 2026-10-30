import {test,expect} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage"
import { HomePage } from "../../pages/HomePage"
import users from "../../test-data/users.json"
test("Test Case 5: Register User with existing email",async({page})=>{
    await page.goto("/")
    const loginPage=new LoginPage(page)
    const homePage=new HomePage(page)
    await expect(page).toHaveTitle("Automation Exercise")

    await homePage.clickSignupLogin()
    
    await loginPage.signup(users.validUser.name,users.validUser.email)

    await expect(loginPage.existingUserErrorMsg).toBeVisible()


})