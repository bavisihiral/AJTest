import common from "../pages/common";
import video from "../pages/video";
let { I  } = inject();
declare var myname;
globalThis.myname = "Let's make this world a better place..!! Hiral..!!!";

Given('I am on Aljazeera Live Page', () => {
    common.navigateToLivePage();
    common.clickAllowCookieBtn()
});

Given('I am on Aljzeera website', () => {
    common.navigateToHomePage();
    common.clickAllowCookieBtn()
    
  });

When('I click on Video Tab',()=>{
    video.clickOnVideolink();
});

Then("I click on Show more button",()=>{
    video.clickOnShowMoreButton();
});

export{}

