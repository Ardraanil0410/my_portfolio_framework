import {test,expect} from "@playwright/test"
import { ProductPage } from "../../pages/ProductPage"
import {HomePage} from "../../pages/HomePage"

test("Test Case 8: Verify All Products and product detail page",async({page})=>{
    const homePage=new HomePage(page)
    const productPage=new ProductPage(page)

    await page.goto("/")
    await expect(page).toHaveTitle("Automation Exercise")
    await homePage.product()
    console.log("URL after clicking Products:", page.url());

    await expect(page).toHaveURL(/\/products/);

    // await expect(productPage.allProductTitle).toBeVisible()
    // await expect(productPage.productList).toBeVisible()

    // await productPage.viewProduct()
    // await expect(page).toHaveURL("https://www.automationexercise.com/product_details/1")

    // await expect(productPage.productInfo).toBeVisible()
    // console.log(productPage.productInfo);
    
  


})