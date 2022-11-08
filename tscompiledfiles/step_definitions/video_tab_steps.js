"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("../pages/common"));
const video_1 = __importDefault(require("../pages/video"));
let { I } = inject();
globalThis.myname = "Let's make this world a better place..!! Hiral..!!!";
Given('I am on Aljazeera Live Page', () => {
    common_1.default.navigateToLivePage();
    common_1.default.clickAllowCookieBtn();
});
Given('I am on Aljzeera website', () => {
    common_1.default.navigateToHomePage();
    common_1.default.clickAllowCookieBtn();
});
When('I click on Video Tab', () => {
    video_1.default.clickOnVideolink();
});
Then("I click on Show more button", () => {
    video_1.default.clickOnShowMoreButton();
});
//# sourceMappingURL=video_tab_steps.js.map