import {test,expect} from "../../fixtures/baseTest"

test ("TC03 - Login User with incorrect email and password",async({page,loginPage,homePage})=>{
    await page.goto("/")
    await homePage.clickSignupLogin()
    await loginPage.loginDetails("tester@test.com","Tester@123")
    await expect (loginPage.errorMessage).toBeVisible()

    

})