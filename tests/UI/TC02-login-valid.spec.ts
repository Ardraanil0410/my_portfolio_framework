import users from "../../test-data/users.json"
import {test,expect} from "../../fixtures/baseTest"

test("Test Case 2: Login User with correct email and password",async({page,loginPage,signupPage,homePage})=>{
    await page.goto("/")
    await homePage.clickSignupLogin()
    await loginPage.loginDetails(users.validUser.email,users.validUser.password)

    //Verify succesful login
    await expect(await signupPage.getLoggedInUserLink(users.validUser.name)).toBeVisible()

    //Delete the account
    await signupPage.deleteAccount()
    await expect(signupPage.deletionSuccessMsg).toBeVisible()
   

})