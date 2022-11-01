const { I } = inject();
import envUtils from "../utils/envUtils";

export = {
  allowCookiesBtn : "//button[@id='onetrust-accept-btn-handler']",

  navigateToHomePage(){
    I.amOnPage(envUtils.getUrl())
    I.resizeWindow(1920,1080)
  },

  navigateToLivePage(){
    I.amOnPage(envUtils.getUrl() +"/live")
    I.resizeWindow(1920,1080)
  },

  navigateToHomePageMobileView(){
    I.amOnPage(envUtils.getUrl())
    I.resizeWindow(390,844)
  },

  isTextVisible(element){
    I.see(element)
  },

  clickAllowCookieBtn(){
    I.click(this.allowCookiesBtn);
  },

  presskey(key){
    I.pressKey(key);
  }
 
}

