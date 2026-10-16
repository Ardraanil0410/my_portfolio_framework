import { Page, Locator } from "@playwright/test"

export class LoginPage{
    readonly page:Page
    readonly emailField: Locator
    readonly passwordField:Locator
    readonly loginButton : Locator
    readonly errorMessage : Locator

constructor(page:Page){
    this.page=page
    // this.emailField=page.getByPlaceholder("Email Address").first()
    this.emailField=page.locator(`[data-qa="login-email"]`)
    this.passwordField=page.getByPlaceholder("Password")
    this.loginButton=page.getByRole("button",{name:"Login"})
    this.errorMessage=page.getByText("Your email or password is incorrect!")
}

async loginDetails(email:string,password:string){
    await this.emailField.fill(email)
    await this.passwordField.fill(password)
    await this.loginButton.click()
}
}