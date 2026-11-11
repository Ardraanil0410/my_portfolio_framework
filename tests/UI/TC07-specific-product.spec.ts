import {test,expect} from "../../fixtures/baseTest"

test("This is to search for a specific product",async({page,homePage,productPage})=>{

    //Naviagte to the url
    await page.goto("https://www.automationexercise.com/")
    //To click the product link
    await homePage.product()

    //Search for Blue Top
    await productPage.searchProduct("Blue Top")

    // await expect(productPage.specificProduct).toHaveText("Blue Top")

    await productPage.searchProduct("Blue Top")

    
    



    

})