const clipboardy = require('clipboardy');

const {
    BRANCH,
    MINUTE
} = require('./config')

const delayTime = MINUTE * 60 * 1000

const nowTimeStamp = new Date().getTime()
const buildTime = new Date(nowTimeStamp + delayTime)

const buildHour = buildTime.getHours()
const buildMinutes = buildTime.getMinutes()

clipboardy.writeSync(`'${BRANCH}' 分支預計 ${buildHour}:${buildMinutes} 推上 LAB 區`);
