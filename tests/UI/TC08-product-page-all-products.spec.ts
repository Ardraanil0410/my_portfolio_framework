import {test,expect} from "../../fixtures/baseTest"

test("Test Case 8: Verify All Products and product detail page",async({page,productPage,homePage})=>{


    await page.goto("/")
    await expect(page).toHaveTitle("Automation Exercise")
    await expect(homePage.homePageText).toBeVisible()
     await homePage.advertisementPrompt()
    await homePage.product()
    await homePage.advertisementPrompt()

    await expect(page).toHaveTitle("Automation Exercise - All Products")
    await expect(page).toHaveURL("/products")
  
    await productPage.viewProduct()

    await expect(page).toHaveTitle("Automation Exercise - Product Details")
    await expect(page).toHaveURL("/product_details/1")

    await productPage.productDetails()
    await expect(productPage.productInfo).toContainText("Blue Top")
    await expect(productPage.productInfo).toContainText("Women > Tops")
     await expect(productPage.productInfo).toContainText("Rs. 500")
     await expect(productPage.productInfo).toContainText("In Stock")
     await expect(productPage.productInfo).toContainText("New")
    
  


})