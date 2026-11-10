import {test,expect} from "@playwright/test"
import {HomePage} from "../../pages/HomePage"
import { ProductPage } from "../../pages/ProductPage"

test("Test Case 9: Search Product",async({page})=>{
    await page.goto("/")
    const homePage= new HomePage(page)
    const productPage=new ProductPage(page)

    await expect(homePage.homePageText).toBeVisible()

    await homePage.product()
    await homePage.advertisementPrompt()
    await expect(page).toHaveURL("/products")
    await expect(page).toHaveTitle("Automation Exercise - All Products")

    await productPage.searchProduct("Winter Top")

    await expect(productPage.searchProductHeading).toBeVisible()
    await expect(productPage.searchResults).toContainText("Winter Top")

})