import { browser, by, element, ElementFinder } from "protractor";

export class loginPageElements 
{

    static get userNameInputBox() 
    {
        return element(by.css('[placeholder="Username"]'));
    }

    static get passwordInputBox() 
    {
        return element(by.css('[placeholder="Password"]'));
    }

    static get signInButton()
    {
        return element(by.partialButtonText('Sign In'));
    }
}
