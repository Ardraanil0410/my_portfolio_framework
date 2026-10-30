import {test,expect} from "@playwright/test"
import { HomePage } from "../../pages/HomePage"
import { ContactUsPage } from "../../pages/ContactUsPage"
import contactus from "../../test-data/contactus.json"

test("Test Case 6: Contact Us Form",async({page})=>{
    await page.goto("/")
    const homePage=new HomePage(page)
    await homePage.contactus()

    const contactForm=new ContactUsPage(page)
    await expect(page.getByText("GET IN TOUCH")).toBeVisible()
    await contactForm.fillDetails(contactus.info.name,contactus.info.email,contactus.info.subject,contactus.info.message)
    console.log("Email locator count:", await contactForm.email.count())
console.log("Email value:", await contactForm.email.inputValue())

    await contactForm.uploadFile("test-data/sampletext.txt")

page.on("dialog", async (dialog) => {
    console.log("Dialog appeared:", dialog.message())
    await dialog.accept()
})

    await contactForm.submit()



   //await expect(page.locator("#contact-page").getByText("Success! Your details have been submitted successfully.")).toBeVisible()

    await contactForm.home()

    await expect(page).toHaveURL("https://automationexercise.com/")


    
})