"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("../pages/common"));
const livepage_1 = __importDefault(require("../pages/livepage"));
let { I } = inject();
Given('I am on Aljazeera Live Page', () => {
    common_1.default.navigateToLivePage();
    common_1.default.clickAllowCookieBtn();
});
Then("I should see live video player", () => {
    livepage_1.default.switchToVideoPlayerIframe();
    pause();
    livepage_1.default.isVideoPlayerVisible();
    console.log("GLOBAL VARIALBE IS:" + globalThis.myname);
});
Then("I should see links", (dataTest) => {
    dataTest.rows.forEach(element => {
        common_1.default.isTextVisible(element.cells[0].value);
    });
});
//# sourceMappingURL=live_video_player_steps.js.map