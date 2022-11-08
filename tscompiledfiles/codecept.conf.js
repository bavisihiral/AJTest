exports.config = {
    tests: './*_test.ts',
    output: './output',
    helpers: {
        WebDriver: {
            url: ' https://aljazeera.com/',
            browser: 'chrome'
        },
        MyHelper3: {
            require: "./myhelper3_helper.ts"
        }
    },
    require: ["ts-node/register"],
    name: 'aljazeerademo',
    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        },
        allure: {
            enabled: true
        }
    },
    gherkin: {
        features: "./features/*.feature",
        steps: "./step_definitions/*.ts",
    },
    include: {
        homepagePage: "./pages/homepage.ts"
    },
};
//# sourceMappingURL=codecept.conf.js.map