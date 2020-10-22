const clipboardy = require('clipboardy');

const {
    BRANCH,
    MINUTE
} = require('./config')

const BUFFER_MIN = 1
const delayTime = (+MINUTE + BUFFER_MIN) * 60 * 1000

const nowTimeStamp = new Date().getTime()
const buildTime = new Date(nowTimeStamp + delayTime)

const buildHour = buildTime.getHours()
const buildMinutes = buildTime.getMinutes() < 10 ? '0' + buildTime.getMinutes() : buildTime.getMinutes()

clipboardy.writeSync(`@B2C_RD '${BRANCH}' 分支預計 ${buildHour}:${buildMinutes} 推上 LAB 區`);
