const {
    Builder,
    By,
    Key
} = require('selenium-webdriver');

const {
    URL,
    BRANCH,
    USER_NAME,
    PASS_WORD
} = require('./config')

const assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize()

describe('自動上版', () => {
    it('開啟 lab jenkins', function (done) {
        this.timeout(10000);
        (async () => {
            await driver.get(URL);
            const title = await driver.getTitle()
            await assert.equal(title, 'Lab_Publish_New [EHS » Web] [Jenkins]')
            await done()
        })()
    })
    it('點擊 [登入] 按鈕', function (done) {
        (async () => {
            await driver.findElement(By.css('.login a')).click();
            await done()
        })()
    })
    it('是否在 [登入] 頁面', function (done) {
        (async () => {
            try {
                const element = await driver.findElement(By.id('yui-gen1-button'));
                await assert.notEqual(element, null)
            }
            catch (error) {
                throw('沒有登入按鈕！')
            }
            await done()
        })()
    })
    it('輸入 [使用者帳號]、[密碼]', function (done) {
        (async () => {
            await setTimeout(async () => {
                // 使用者帳號
                await driver.findElement(By.name('j_username')).sendKeys(USER_NAME);
                // 密碼
                await driver.findElement(By.name('j_password')).sendKeys(PASS_WORD, Key.RETURN);
                await done()
            }, 500);
        })()
    })
    it('回到 lab jenkins 首頁', function (done) {
        (async () => {
            const title = await driver.getTitle()
            await assert.equal(title, 'Lab_Publish_New [EHS » Web] [Jenkins]')
            await done()
        })()
    })
    it('點擊 [Build with Parameters] 連結', function (done) {
        (async () => {
            await driver.findElement(By.linkText('Build with Parameters')).click();
            await done()
        })()
    })
    it('是否在 [Pipeline Lab_Publish_New] 頁面', function (done) {
        (async () => {
            try {
                const element = await driver.findElement(By.id('select'));
                await assert.notEqual(element, null)
            }
            catch (error) {
                throw('沒有選 branch 的 select！')
            }
            await done()
        })()
    })
    it(`選擇 [branch]: ${BRANCH}`, function (done) {
        (async () => {
            const selectElem = await driver.findElement(By.name('value'))
            await selectElem.click();
            async function waitUntilBranchSelectAppear () {
                try {
                    await selectElem.findElement(By.css(`option[value="${BRANCH}"]`)).click()
                } catch (error) {
                    // 沒出現，再等一下~
                    setTimeout(() => {
                        waitUntilBranchSelectAppear()
                    }, 100);
                }
            }
            await waitUntilBranchSelectAppear()
            await done()
        })()
    })
    it('點擊 [建置] 按鈕', function (done) {
        (async () => {
            const selectElem = await driver.findElement(By.name('Submit'))
            await selectElem.click();
            await done()
        })()
    })
})
