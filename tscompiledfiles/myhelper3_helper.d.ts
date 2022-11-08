declare const Helper4: any;
declare class MyHelper3 extends Helper4 {
    /**
     * @protected
     */
    _before(): void;
    /**
     * @protected
     */
    _after(): void;
    clickOnEveryElement(locator: any): Promise<void>;
}
