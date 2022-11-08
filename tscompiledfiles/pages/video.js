"use strict";
const { I } = inject();
module.exports = {
    videolink: "//a[@href='/videos/']",
    showmorebutton: "//button[contains(@class,'show-more-button')]",
    clickOnVideolink() {
        I.click(this.videolink),
            I.refreshPage();
    },
    clickOnShowMoreButton() {
        I.scrollTo(this.showmorebutton),
            I.wait(5),
            I.forceClick(this.showmorebutton);
    }
};
//# sourceMappingURL=video.js.map