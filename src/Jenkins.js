
const {
    By,
    Key,
    until
} = require('selenium-webdriver');
const assert = require('assert');
const {
    URL,
    BRANCH,
    USER_NAME,
    PASS_WORD
} = require('./config')

const page = {
    title: 'Lab_Publish_New [EHS » Web] [Jenkins]',
    loginTitle: 'Sign in [Jenkins]',
    selectors: {
        loginLink: '.login a',
        loginBtn: '.submit-button',
        username: 'j_username',
        password: 'j_password',
        buildLinkText: 'Build with Parameters',
        buildSelect: '.gitParameterSelect',
        branchOption: `option[value="origin/${BRANCH}"]`,
    }
}
const selectors = page.selectors

class Jenkins {
    static init (driver) {
        global.driver = driver
        driver.manage().window().maximize()
        it('開啟 lab jenkins', (done) => {
            (async () => {
                try {
                    await driver.get(URL);
                    const title = await driver.getTitle()
                    await assert.equal(title, page.title)
                    await done()
                } catch (error) {
                    await done(error)
                }
            })()
        })
    }
    static login () {
        it('點擊 [登入] 按鈕', (done) => {
            (async () => {
                await driver.findElement(By.css(selectors.loginLink)).click();
                await done()
            })()
        })
        it('是否在 [登入] 頁面', (done) => {
            (async () => {
                try {
                    const title = await driver.getTitle()
                    await assert.equal(title, page.loginTitle)
                    await done()
                } catch (error) {
                    await done(error)
                }
            })()
        })
        it('輸入 [使用者帳號]、[密碼]', (done) => {
            (async () => {
                await setTimeout(async () => {
                    // 使用者帳號
                    await driver.findElement(By.name(selectors.username)).sendKeys(USER_NAME);
                    // 密碼
                    await driver.findElement(By.name(selectors.password)).sendKeys(PASS_WORD, Key.RETURN);
                    await done()
                }, 500);
            })()
        })
        it('回到 lab jenkins 首頁', (done) => {
            (async () => {
                const title = await driver.getTitle()
                await assert.equal(title, page.title)
                await done()
            })()
        })
    }
    static build () {
        it('點擊文字 [Build with Parameters] 連結', (done) => {
            (async () => {
                await driver.findElement(By.linkText(selectors.buildLinkText)).click();
                await done()
            })()
        })
        it('是否在 [Pipeline Lab_Publish_New] 頁面', (done) => {
            (async () => {
                try {
                    const element = await driver.findElement(By.css(selectors.buildSelect));
                    await assert.notEqual(element, null)
                }
                catch (error) {
                    throw('沒有選 branch 的 select！')
                }
                await done()
            })()
        })
        it(`選擇 [branch]: ${BRANCH}`, (done) => {
            (async () => {
                const selectElem = await driver.findElement(By.css(selectors.buildSelect));
                await selectElem.click();
                await driver.wait(until.elementLocated(By.css(selectors.branchOption)), 30 * 1000)
                await selectElem.findElement(By.css(selectors.branchOption)).click()
                await done()
            })()
        })
        it('點擊 [建置] 按鈕', (done) => {
            (async () => {
                await driver.sleep(2000)
                const selectElem = await driver.findElement(By.name('Submit'))
                await selectElem.click()
                await done()
            })()
        })
    }
}

module.exports = {
    Jenkins
}
