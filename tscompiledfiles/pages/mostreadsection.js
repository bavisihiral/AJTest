"use strict";
const { I } = inject();
module.exports = {
    mostReadSection: "//h2[@aria-label='most read']",
    navigationMenu: ".site-header__logo",
    skipmostread: "//a[contains(@class,'bypass-block-link') and text()='Skip to Most Read']",
    mostreadarticles: "//a[contains(@class,'article-trending__title-link')]",
    validateMostReadSectionIsVisible() {
        I.seeElement(this.mostReadSection);
    },
    validateMostReadSectionNotVisible() {
        I.dontSeeElement(this.mostReadSection);
    },
    hoverAndClickOnNavigationMenu() {
        I.click(this.navigationMenu);
        I.moveCursorTo(this.navigationMenu, -10, 0);
    },
    clickOnSkipMostRead() {
        I.click(this.skipmostread);
    },
    verifyPagination(num) {
        I.seeNumberOfElements(this.mostreadarticles, num);
    },
    verifyCurrnetURL(url) {
        I.seeInCurrentUrl(url);
    }
};
//# sourceMappingURL=mostreadsection.js.map