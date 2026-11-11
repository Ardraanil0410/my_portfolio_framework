import {Page,Locator} from "@playwright/test"

export class AddToCartModal{
    readonly page:Page
    readonly cartModel:Locator
    readonly modelTitle:Locator
    readonly modelBody:Locator
    readonly viewCartLink:Locator
    readonly continueButton:Locator

constructor(page:Page){
    this.page=page
    this.cartModel=page.locator(".modal-content")
    this.modelTitle=page.getByText("Added!")
    this.modelBody=page.getByText("Your product has been added to cart.")
    this.viewCartLink=page.getByRole("link",{name:"View Cart"})
    this.continueButton=page.getByRole("button",{name:"Continue Shopping"})
}
async viewCart(){
    await this.viewCartLink.click()
}

async continueShopping(){
    await this.continueButton.click()
}
}