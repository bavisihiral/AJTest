"use strict";
const { I } = inject();
module.exports = {
    videoplayeriframe: "//iframe[contains(@class,'video-js')]",
    videoStream: "//video[contains(@class,'video-stream')]",
    switchToVideoPlayerIframe() {
        I.switchTo(this.videoplayeriframe);
    },
    isVideoPlayerVisible() {
        //  I.grabNumberOfVisibleElements(this.videoStream).then((valueOfElement)=>{
        //   console.log("NUMBER OF ELEMENTSSSSS" + valueOfElement.valueOf())
        //   assert.equal(valueOfElement.valueOf(),2,"Video player is not visible")
        //  }).catch(function(){
        //   console.log("Video player is not visible inside catch")
        // //  })
        // let s = locate("abc").first()
        // s.find(asdf)
        // // I.seeNumberOfElements
        // I.clickOnEveryElement()
        I.seeElement(this.videoStream);
    }
};
//# sourceMappingURL=livepage.js.map