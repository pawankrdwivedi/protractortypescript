import { browser} from "protractor";

export class commonPageHelper 
{
    static async verifyPageTitle(pageTitle: string) 
    {
        const title = await browser.getTitle();
        await console.log('Actual Page Title: '+title+ ' verified with Expected title: '+pageTitle);
        expect(title.toLowerCase==pageTitle.toLowerCase).toBe(true);
    }
}