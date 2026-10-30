import {Page,Locator} from "@playwright/test"

export class ContactUsPage{
    readonly page:Page
    readonly contactUsLink : Locator
    readonly name: Locator
    readonly email:Locator
    readonly subject: Locator
    readonly message:Locator
    readonly upload :Locator
    readonly submitButton:Locator
    readonly homeButton:Locator
    

constructor(page:Page){
    this.page=page
    this.contactUsLink=page.getByRole("link",{name:"Contact us"})
    this.name=page.getByPlaceholder("Name")
    this.email=page.locator(`[data-qa="email"]`)
    this.subject=page.locator(`[data-qa="subject"]`)
    this.message=page.locator(`[data-qa="message"]`)
    this.upload = page.locator('input[type="file"]')
    this.submitButton=page.getByRole("button",{name:"Submit"})
    this.homeButton=page.getByRole("link",{name:"Home"}).first()

}

async fillDetails(name:string, email:string,subject:string,message:string){
   await this.name.fill(name)
    await this.email.fill(email)
    await this.subject.fill(subject)
    await this.message.fill(message)
}
async uploadFile(filepath:string){
    await this.upload.setInputFiles(filepath)
}
async submit(){
    await this.submitButton.click()
}

async home(){
    await this.homeButton.click()
}
}