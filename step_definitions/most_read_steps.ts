let { I} = inject();
import mostreadsection from "../pages/mostreadsection";
import common from "../pages/common";

Given('I am on Aljazeera website', () => {
  common.navigateToHomePage();
  common.clickAllowCookieBtn()
  
});

Given('I am on Aljazeera website from mobile', () => {
  common.navigateToHomePageMobileView();
  common.clickAllowCookieBtn();
});

When('I hover over navigation menu', () => {
  mostreadsection.hoverAndClickOnNavigationMenu();
});

When('I press {string} key', (key) => {
  common.presskey(key);
});

When('I click on Skip most Read',()=>{
  mostreadsection.clickOnSkipMostRead();
});

Then('Most Read Section should be displayed',()=>{
  mostreadsection.validateMostReadSectionIsVisible();
});

Then('Most Read Section should have {int} posts',(num)=>{
  mostreadsection.verifyPagination(num);
});

Then('Most Read Section should not be displayed',()=>{
  mostreadsection.validateMostReadSectionNotVisible();
});

Then('I am on the URL {string}',(url)=>{
  mostreadsection.verifyCurrnetURL(url);
});

export{}