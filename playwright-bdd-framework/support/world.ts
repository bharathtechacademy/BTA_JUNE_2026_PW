//World : World is a class provided by the cucumber.js file that represents the context in which your step definitions are executed. 
//IWorldOptions: The IWorldOptions interface Used to provide different types of options to the world file 
//setWorldConstructor: This is a function used to set a custom world constructor for the Cucumber. 

import {World , IWorldOptions, setWorldConstructor} from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import {LoginPageSteps} from '../page-objects/page-steps/login-page-steps.ts';
import {CookiesPageSteps} from '../page-objects/page-steps/cookies-page-steps.ts';
import {HomePageSteps} from '../page-objects/page-steps/home-page-steps.ts';


class CustomWorld extends World {

    page!: Page;
    loginPageSteps!: LoginPageSteps;
    cookiesPageSteps!: CookiesPageSteps;
    homePageSteps!: HomePageSteps;

    constructor(options: IWorldOptions) {
        super(options);
    }

    initializePageObjects() {
        this.loginPageSteps = new LoginPageSteps(this.page);
        this.cookiesPageSteps = new CookiesPageSteps(this.page);
        this.homePageSteps = new HomePageSteps(this.page);
    }

}


export default CustomWorld;
setWorldConstructor(CustomWorld);