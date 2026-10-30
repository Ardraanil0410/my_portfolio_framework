import {test,expect} from "@playwright/test"
import { HomePage } from "../../pages/HomePage"
import { ProductPage } from "../../pages/ProductPage"

test("This is to search for a specific product",async({page})=>{
    const productPage=new ProductPage(page)
    const homePage=new HomePage(page)
    //Naviagte to the url
    await page.goto("https://www.automationexercise.com/")
    //To click the product link
    await homePage.product()

    //Search for Blue Top
    await productPage.searchProduct("Blue Top")

    // await expect(productPage.specificProduct).toHaveText("Blue Top")

    await productPage.specific()

    console.log("Product added successfully");
    



    

})