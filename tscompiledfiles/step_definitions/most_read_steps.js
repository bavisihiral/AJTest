"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let { I } = inject();
const mostreadsection_1 = __importDefault(require("../pages/mostreadsection"));
const common_1 = __importDefault(require("../pages/common"));
Given('I am on Aljazeera website', () => {
    common_1.default.navigateToHomePage();
    common_1.default.clickAllowCookieBtn();
});
Given('I am on Aljazeera website from mobile', () => {
    common_1.default.navigateToHomePageMobileView();
    common_1.default.clickAllowCookieBtn();
});
When('I hover over navigation menu', () => {
    mostreadsection_1.default.hoverAndClickOnNavigationMenu();
});
When('I press {string} key', (key) => {
    common_1.default.presskey(key);
});
When('I click on Skip most Read', () => {
    mostreadsection_1.default.clickOnSkipMostRead();
});
Then('Most Read Section should be displayed', () => {
    mostreadsection_1.default.validateMostReadSectionIsVisible();
});
Then('Most Read Section should have {int} posts', (num) => {
    mostreadsection_1.default.verifyPagination(num);
});
Then('Most Read Section should not be displayed', () => {
    mostreadsection_1.default.validateMostReadSectionNotVisible();
});
Then('I am on the URL {string}', (url) => {
    mostreadsection_1.default.verifyCurrnetURL(url);
});
//# sourceMappingURL=most_read_steps.js.map