# 自動上版 End2End 測試

## Features
<a href="https://nodejs.org/en/"><img width="180" alt="nodejs" src="https://uploads-ssl.webflow.com/5d3a7aed4e11720246d46f49/5da911dbd21c06c44f5791b6_Nodejs-blog-feature-img.jpg" /></a>
<a href="https://www.npmjs.com/package/selenium-webdriver"><img src="https://selenium.dev/images/selenium_logo_square_green.png" width="180" alt="Selenium"/></a>
<a href="https://mochajs.org/"><img src="https://avatars2.githubusercontent.com/u/8770005?s=400&v=4" /></a>

## Usage
- [Clone this repository](https://github.com/TerryLee7788/AutomationVersion)
- `npm i` 安裝套件
- 設置 [.env](https://github.com/TerryLee7788/AutomationVersion/blob/master/.env) 檔案

## [.env](https://github.com/TerryLee7788/AutomationVersion/blob/master/.env) Overview
|Name|Description|
|--|--|
|URL|Lab Jenkins B2C 連結|
|BRANCH|Lab 想上的 branch (完整的名稱，不能只有 0909 這種，可以這樣寫: "feature/20201028")|
|USER_NAME|Lab Jenkins 帳號|
|PASS_WORD|Lab Jenkins 密碼|
|MINUTE|延遲時間(分鐘)|
- 點擊 [delayBuild.sh](https://github.com/TerryLee7788/AutomationVersion/blob/master/sh/delayBuild.sh)
