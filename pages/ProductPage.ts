import {Page,Locator} from "@playwright/test"

export class ProductPage{
    readonly page:Page
    readonly searchBox:Locator
    readonly searchMagnifier: Locator
    readonly productList:Locator
    readonly allProductTitle:Locator
    readonly viewProductButton:Locator
    readonly productInfo:Locator

constructor(page:Page){
    this.page=page
    this.searchBox=page.locator("#search_product")
    this.searchMagnifier=page.locator(".fa-fa-search")
    this.productList=page.locator(".features_items")
    this.viewProductButton=page.getByRole("link",{name:"View Product"}).first()
    this.productInfo=page.locator(".product-information")
    this.allProductTitle=page.getByText("All Products")
}
async searchProduct(productName:string){
    await this.searchBox.fill(productName)
    await this.searchMagnifier.click()
}

async viewProduct(){
   await this.viewProductButton.click()
}

}