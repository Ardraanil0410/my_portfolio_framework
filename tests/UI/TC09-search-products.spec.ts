import {test,expect} from "../../fixtures/baseTest"


test("Test Case 9: Search Product",async({page,homePage,productPage})=>{
    await page.goto("/")

    await expect(homePage.homePageText).toBeVisible()

    await homePage.product()
    await homePage.advertisementPrompt()
    await expect(page).toHaveURL("/products")
    await expect(page).toHaveTitle("Automation Exercise - All Products")

    await productPage.searchProduct("Winter Top")

    await expect(productPage.searchProductHeading).toBeVisible()
    await expect(productPage.searchResults).toContainText("Winter Top")

})