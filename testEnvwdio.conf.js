const baseConfig = require('./wdio.conf.js')
//import { config as baseConfig } from "./wdio.conf.js"
export const config = Object.assign(baseConfig, {

baseUrl : 'https://www.google.com/',
waitforTimeout: 5000,
testURL:'https://webdriver.io/',

// mochaOpts: {
//     ui: 'bdd',
//     timeout: 60000,
//     grep:"sanity"
// },

})