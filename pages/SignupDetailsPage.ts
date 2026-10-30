import {Page,Locator} from "@playwright/test"

export class SignupDetailsPage{
    readonly page:Page
    readonly title: Locator
    // readonly name: Locator
    // readonly email:Locator
    readonly password: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly address: Locator
    readonly country : Locator
    readonly state: Locator
    readonly city : Locator
    readonly zipcode: Locator
    readonly mobile:Locator
    readonly createAccountButton: Locator
    readonly accountCreatedMsg: Locator
    readonly accountCreatedContinueBtn:Locator
    readonly day:Locator
    readonly month :Locator
    readonly year : Locator
    readonly deleteAccountBtn:Locator
    readonly deletionSuccessMsg:Locator
    readonly AccountDelectedContinueBtn: Locator

constructor(page:Page){
    this.page=page
    this.title=page.locator("#id_gender1")
    this.password=page.locator("#password")
    this.firstName=page.locator("#first_name")
    this.lastName=page.locator("#last_name")
    this.address=page.locator("#address1")
    this.country=page.locator("#country")
    this.state=page.locator("#state")
    this.city=page.locator("#city")
    this.zipcode=page.locator("#zipcode")
    this.mobile=page.locator("#mobile_number")
    this.createAccountButton=page.getByRole("button",{name:"Create Account"})
    this.accountCreatedMsg=page.getByText("Account Created!")
    this.accountCreatedContinueBtn = page.getByRole("link",{name:"Continue"})
    this.day=page.locator("#days")
    this.month=page.locator("#months")
    this.year=page.locator("#years")
    this.loginuserlink=page.getByText(`Logged in as ${this.firstName}`)
    this.deleteAccountBtn=page.getByRole("link",{name:" Delete Account"})
    this.deletionSuccessMsg=page.getByText("Account Deleted!")
    this.AccountDelectedContinueBtn=page.getByRole("link",{name:"Continue"})

}

async signup(user:{
    password:string,firstName:string,lastName:string,address:string,
    country:string,state:string,city:string,zipcode:string,mobile:string,day:string,month:string,year:string
}){
    await this.title.click()
    await this.password.fill(user.password)
    await this.firstName.fill(user.firstName)
    await this.lastName.fill(user.lastName)
    await this.address.fill(user.address)
    await this.country.selectOption(user.country)
    await this.state.fill(user.state)
    await this.city.fill(user.city)
    await this.zipcode.fill(user.zipcode)
    await this.mobile.fill(user.mobile)
    await this.fillDob({
    day: user.day,
    month: user.month,
    year: user.year
 })
    await this.createAccountButton.click()
    // await this.accountCreatedContinueBtn.click()
 

}

async fillDob(info:{
    day:string,month:string,year:string
}){
   await this.day.selectOption(info.day)
   await this.month.selectOption(info.month)
   await this.year.selectOption(info.year)
}

async continueButton(){
    await this.accountCreatedContinueBtn.click()
}

async getLoggedInUserLink(firstName: string) {
    return this.page.getByText(`Logged in as ${firstName}`)
}

async deleteAccount(){
 await this.deleteAccountBtn.click()
}

async deleteContinueBtn(){
    await this.AccountDelectedContinueBtn.click()
}


}