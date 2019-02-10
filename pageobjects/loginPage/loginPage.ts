import {browser, element, by} from 'protractor';
import{commonPageHelper} from "../../helpers/common/commonHelper";
import {loginPageElements} from "./loginPageElements";

var Config=require("../../helpers/config/config");



export class loginPage 
{
  static async loginToPrimotusApplication()
  {
      await loginPageElements.userNameInputBox.sendKeys(Config.userName);
      await loginPageElements.passwordInputBox.sendKeys(Config.password);
      await loginPageElements.signInButton.click();
      await commonPageHelper.verifyPageTitle(Config.homePageTitleText);
  }

  
}
