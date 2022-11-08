const Helper4 = require('@codeceptjs/helper');

class MyHelper3 extends Helper4 {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async clickOnEveryElement(locator) {
    const { WebDriver } = this.helpers;
    const els = await WebDriver._locate(locator);
    console.log("INSIDE CUSTOM HELPER")
    els.visible()

  }
}

module.exports = MyHelper3;
