import {expect, test} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage"
import { HomePage } from "../../pages/HomePage"

test ("TC03 - Login User with incorrect email and password",async({page})=>{
    await page.goto("/")
    const loginPage=new LoginPage(page)
    const homePage=new HomePage(page)
    await homePage.clickSignupLogin()
    await loginPage.loginDetails("tester@test.com","Tester@123")
    await expect (loginPage.errorMessage).toBeVisible()



})