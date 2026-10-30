import {Page,Locator} from "@playwright/test"

export class ProductPage{
    readonly page:Page
    readonly searchBox:Locator
    readonly searchMagnifier: Locator
    readonly productList:Locator
    readonly allProductTitle:Locator
    readonly viewProductButton:Locator
    readonly productInfo:Locator
    readonly specificProduct:Locator
    readonly productAddCart:Locator
    readonly oneProduct:Locator

constructor(page:Page){
    this.page=page
    this.searchBox=page.locator("#search_product")
    this.searchMagnifier=page.locator("#submit_search")
    this.productList=page.locator(".features_items")
    this.oneProduct = page.locator(".product-image-wrapper");
    this.specificProduct= this.oneProduct.filter({hasText:"Blue Top"})
    this.viewProductButton=page.getByRole("link",{name:"View Product"}).first()
    this.productInfo=page.locator(".product-information")
    this.allProductTitle=page.getByText("All Products")
    this.productAddCart=this.specificProduct.locator(".add-to-cart").first()
}
async searchProduct(productName:string){
    await this.searchBox.fill(productName)
    // await this.searchBox.press("Enter")
    await this.searchMagnifier.click()
}

async viewProduct(){
   await this.viewProductButton.click()
}

async specific(){
    await this.specificProduct.hover();
await this.productAddCart.click();

}


}

