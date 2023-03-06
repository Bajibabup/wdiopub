const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')
exports.config = merge(wdioConf.config, {

baseUrl : 'https://www.google.com',
waitforTimeout: 5000,
testURL:'https://webdriver.io/',

// mochaOpts: {
//     ui: 'bdd',
//     timeout: 60000,
//     grep:"sanity"
// },

})