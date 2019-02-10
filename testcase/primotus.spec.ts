import { protractor, browser } from "protractor";
import { commonPageHelper } from "../helpers/common/commonHelper";
import { loginPage } from "../pageobjects/loginPage/loginPage";
import { url } from "inspector";

var Config=require("../helpers/config/config");

describe('Primotus Automation Script Exercise: ', () => 
{

    it('As a user I can navigate to Primotus Application', async function () 
    {
        await browser.get(Config.url);
        await console.log('User is navigated to Primotus Website');
        await commonPageHelper.verifyPageTitle(Config.loginPageTitleText);
    });

    it('Login to application with valid credentials', async function () 
    {
        await loginPage.loginToPrimotusApplication()
        await console.log('Login to Application');
        await commonPageHelper.verifyPageTitle(Config.homePageTitleText);
    });
});
