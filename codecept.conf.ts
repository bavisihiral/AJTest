exports.config = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: ' https://aljazeera.com/',
      browser: 'chrome'
    }
  },
 
  require: ["ts-node/register"],
  name: 'ajljeerademo',
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
    steps: [
      "./step_definitions/most_read_steps.ts",
      "./step_definitions/live_video_player_steps.ts"
    ]
  },
  include: {
    homepagePage: "./pages/homepage.ts"
  }

}