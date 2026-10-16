import {Page, Locator} from "@playwright/test"

export class HomePage{
    readonly page:Page
    readonly loginLink : Locator

constructor (page:Page){
    this.page=page
    this.loginLink=page.getByRole("link",{name:"Signup / Login"})
}

async clickSignupLogin(){
    await this.loginLink.click()
}

}