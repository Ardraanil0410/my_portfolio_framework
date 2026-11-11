import {test,expect} from "../../fixtures/baseTest"
import users from "../../test-data/users.json"
test("Test Case 5: Register User with existing email",async({page,loginPage,homePage})=>{
    await page.goto("/")
    await expect(page).toHaveTitle("Automation Exercise")

    await homePage.clickSignupLogin()
    
    await loginPage.signup(users.validUser.name,users.validUser.email)

    await expect(loginPage.existingUserErrorMsg).toBeVisible()


})