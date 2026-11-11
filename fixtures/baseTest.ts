import {test as base,expect} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import {ContactUsPage} from "./../pages/ContactUsPage"
import {LoginPage} from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import {SignupDetailsPage} from "../pages/SignupDetailsPage"
import { ViewCart } from "../pages/ViewCart"
import {AddToCartModal} from "../components/CartModal"
export {expect}

type MyFixtures={homePage:HomePage,contactPage:ContactUsPage,loginPage:LoginPage,productPage:ProductPage,
    signupPage:SignupDetailsPage,viewCartPage:ViewCart,cartModal:AddToCartModal
}

export const test=base.extend<MyFixtures>({
    homePage:async({page},use)=>{
        const homePage=new HomePage(page)
        await use(homePage)
    },
    contactPage:async({page},use)=>{
        const contactPage=new ContactUsPage(page)
        await use(contactPage)
    },
    loginPage:async({page},use)=>{
        const loginPage=new LoginPage(page)
        await use(loginPage)
    },
    productPage:async({page},use)=>{
        const productPage=new ProductPage(page)
        await use(productPage)
    },
    signupPage:async({page},use)=>{
        const signupPage=new SignupDetailsPage(page)
        await use(signupPage)
    },
    viewCartPage:async({page},use)=>{
        const viewCartPage=new ViewCart(page)
        await use(viewCartPage)
    },
    cartModal:async({page},use)=>{
        const cartModal=new AddToCartModal(page)
        await use(cartModal)
    }


})




