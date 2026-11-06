import {Page, Locator} from "@playwright/test"

export class HomePage{
    readonly page:Page
    readonly loginLink : Locator
    readonly contactusLink:Locator
    readonly productLink:Locator
    readonly homePageText:Locator
    readonly adButton:Locator

constructor (page:Page){
    this.page=page
    this.loginLink=page.getByRole("link",{name:"Signup / Login"})
    this.contactusLink=page.getByRole("link",{name:"Contact us"})
    this.productLink=page.getByRole("link",{name:"Products"})
    this.homePageText=page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')
    this.adButton=page.getByText("Close",{exact:true})
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

async advertisementPrompt() {
    for (const frame of this.page.frames()) {
        if (frame.url().includes("googleads.g.doubleclick.net")) {
            const closeButton = frame.getByText("Close", { exact: true });

            if (await closeButton.count() > 0 && await closeButton.isVisible()) {
                console.log("Closing advertisement...");
                await closeButton.click();
                break;
            }
        }
    }
}

}