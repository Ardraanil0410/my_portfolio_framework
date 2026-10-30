import {Page, Locator} from "@playwright/test"

export class HomePage{
    readonly page:Page
    readonly loginLink : Locator
    readonly contactusLink:Locator
    readonly productLink:Locator

constructor (page:Page){
    this.page=page
    this.loginLink=page.getByRole("link",{name:"Signup / Login"})
    this.contactusLink=page.getByRole("link",{name:"Contact us"})
    this.productLink=page.getByRole("link",{name:"Products"})
}

async clickSignupLogin(){
    await this.loginLink.click()
}

async contactus(){
    await this.contactusLink.click()
}

async product(){
    await this.productLink.click()
}

}