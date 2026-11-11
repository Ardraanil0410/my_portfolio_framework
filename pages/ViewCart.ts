import {Page,Locator} from "@playwright/test"

export class ViewCart{
    readonly page:Page
    readonly proceedToCheckoutLink:Locator
    readonly cartTable:Locator
    readonly cartRows:Locator
    
constructor (page:Page){
    this.proceedToCheckoutLink=page.getByRole("link",{name:"Proceed To Checkout"})
    this.cartTable=page.locator("#cart_info_table")
    this.cartRows=this.cartTable.locator("tbody tr")
}
async totalProductCount(){
  return this.cartRows.count()
    
}
productRow(productName:string){
    return this.cartRows.filter({hasText:productName})

}
productDescription(productName:string){
    return this.productRow(productName).locator(".cart_description")

}
productPrice(productName:string){
    return this.productRow(productName).locator(".cart_price")
}

productQuantity(productName:string){
    return this.productRow(productName).locator(".cart_quantity")
}

productTotal(productName:string){
    return this.productRow(productName).locator(".cart_total")

}





}