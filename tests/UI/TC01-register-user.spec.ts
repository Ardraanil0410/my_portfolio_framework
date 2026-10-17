import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { SignupDetailsPage } from "../../pages/SignupDetailsPage";
import {test,expect} from "@playwright/test"
import users from "../../test-data/users.json"

test ("Test Case 1: Register User",async({page})=>{
    await page.goto("/")
    const homePage=new HomePage(page)
    const loginPage= new LoginPage(page)
    const signupPage=new SignupDetailsPage(page)
 //To navigate to Home Page
    await homePage.clickSignupLogin()

//Enter details for the signup Form
    await loginPage.signup(users.validUser.name,users.validUser.email)
   //await loginPage.signup("TestUser112","tester112@test.com")

//Enter details on the Sign up page
 await signupPage.signup(users.newUserForSignup)

//Verification of successful account creation
await expect(signupPage.accountCreatedMsg).toBeVisible()

//Clicking on Continue button
await signupPage.continueButton()

//Verifying the user is loggedin
await expect(await signupPage.getLoggedInUserLink(users.newUserForSignup.firstName)).toBeVisible()

// //Click on Delete Account 
// await signupPage.deleteAccount()

// //Verifying the delete successful message
// await expect(signupPage.deletionSuccessMsg).toBeVisible()

// //Clicking on Continue Button 
// await signupPage.deleteContinueBtn()
})
