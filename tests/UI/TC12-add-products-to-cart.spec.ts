import {test,expect} from "../../fixtures/baseTest"


test("Test Case 12: Add Products in Cart",async({page,homePage,productPage,cartModal,viewCartPage})=>{
    await page.goto("/")
    await expect(homePage.homePageText).toBeVisible()
    await homePage.advertisementPrompt()
    await homePage.product()
     await homePage.advertisementPrompt()

    await productPage.addProductToCart("Blue Top")

    await cartModal.continueShopping()

    await productPage.searchProduct("Men Tshirt")

    await productPage.addProductToCart("Men Tshirt")

    await cartModal.viewCart()

    await expect(viewCartPage.cartRows).toHaveCount(2)

    await expect(viewCartPage.productRow("Blue Top")).toBeVisible()

    await expect(viewCartPage.productRow("Men Tshirt")).toBeVisible()

    await expect(viewCartPage.productPrice("Blue Top")).toHaveText("Rs. 500")

    await expect(viewCartPage.productPrice("Men Tshirt")).toHaveText("Rs. 400")

     await expect(viewCartPage.productQuantity("Blue Top")).toHaveText("1")

    await expect(viewCartPage.productQuantity("Men Tshirt")).toHaveText("1")

       await expect(viewCartPage.productTotal("Blue Top")).toHaveText("Rs. 500")

    await expect(viewCartPage.productTotal("Men Tshirt")).toHaveText("Rs. 400")








    



})