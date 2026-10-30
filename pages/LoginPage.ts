import { Page, Locator } from "@playwright/test"

export class LoginPage{
    readonly page:Page
    readonly emailField: Locator
    readonly passwordField:Locator
    readonly loginButton : Locator
    readonly errorMessage : Locator
    readonly signupName: Locator
    readonly signupEmail: Locator
    readonly signupButton:Locator
    readonly logout: Locator
    readonly existingUserErrorMsg: Locator
    

constructor(page:Page){
    this.page=page
    // this.emailField=page.getByPlaceholder("Email Address").first()
    this.emailField=page.locator(`[data-qa="login-email"]`)
    this.passwordField=page.getByPlaceholder("Password")
    this.loginButton=page.getByRole("button",{name:"Login"})
    this.errorMessage=page.getByText("Your email or password is incorrect!")
    this.signupName=page.getByPlaceholder("Name")
    this.signupEmail=page.locator(`[data-qa="signup-email"]`)
    this.signupButton=page.getByRole("button",{name:"Signup"})
    this.logout=page.getByRole("link",{name:"Logout"})
    this.existingUserErrorMsg=page.getByText("Email Address already exist!")
}

async loginDetails(email:string,password:string){
    await this.emailField.fill(email)
    await this.passwordField.fill(password)
    await this.loginButton.click()
}

async signup(name:string,email:string){
    await this.signupName.fill(name)
    await this.signupEmail.fill(email)
    await this.signupButton.click()
}

async logoutLink(){
 await this.logout.click()
}
}