"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const { I } = inject();
const envUtils_1 = __importDefault(require("../utils/envUtils"));
module.exports = {
    allowCookiesBtn: "//button[@id='onetrust-accept-btn-handler']",
    navigateToHomePage() {
        I.amOnPage(envUtils_1.default.getUrl());
        I.resizeWindow(1920, 1080);
    },
    navigateToLivePage() {
        I.amOnPage(envUtils_1.default.getUrl() + "/live");
        I.resizeWindow(1920, 1080);
    },
    navigateToHomePageMobileView() {
        I.amOnPage(envUtils_1.default.getUrl());
        I.resizeWindow(390, 844);
    },
    isTextVisible(element) {
        I.see(element);
    },
    clickAllowCookieBtn() {
        I.click(this.allowCookiesBtn);
    },
    presskey(key) {
        I.pressKey(key);
    }
};
//# sourceMappingURL=common.js.map