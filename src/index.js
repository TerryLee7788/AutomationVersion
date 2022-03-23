require('chromedriver')
const {
    Builder
} = require('selenium-webdriver');

const { Jenkins } = require('./Jenkins')

const driver = new Builder().forBrowser('chrome').build();

describe('自動上版', () => {
    Jenkins.init(driver)
    Jenkins.login()
    Jenkins.build()
    after(() => {
        setTimeout(() => {
            driver.quit()
        }, 5000);
    })
})
