import users from "../../test-data/users.json"
import {test,expect} from "../../fixtures/baseTest"

test("Test Case 4: Logout User",async({page,homePage,loginPage,signupPage})=>{
    await page.goto("/")

    await homePage.clickSignupLogin()
    await loginPage.loginDetails(users.freshUser.email,users.freshUser.password)
    await expect(await signupPage.getLoggedInUserLink(users.freshUser.name)).toBeVisible()

    await loginPage.logoutLink()
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login")


})