import common from "../pages/common";
import livepage from "../pages/livepage";
let { I  } = inject();

Given('I am on Aljazeera Live Page', () => {
    common.navigateToLivePage();
    common.clickAllowCookieBtn()
});

Then("I should see live video player",()=>{
    livepage.switchToVideoPlayerIframe();
    pause()
    livepage.isVideoPlayerVisible()
    console.log("GLOBAL VARIALBE IS:"+globalThis.myname)
})

Then("I should see links",(dataTest)=>{
    dataTest.rows.forEach(element => {
    common.isTextVisible(element.cells[0].value)
    });
})
export{}