const clipboardy = require('clipboardy');

const {
    BRANCH,
    MINUTE
} = require('./config')

const BUFFER = 20 * 1000
const delayTime = (MINUTE * 60 * 1000) + BUFFER

const nowTimeStamp = new Date().getTime()
const buildTime = new Date(nowTimeStamp + delayTime)

const buildHour = buildTime.getHours()
const buildMinutes = buildTime.getMinutes() < 10 ? '0' + buildTime.getMinutes() : buildTime.getMinutes()

console.log(`預計上版分支: ${BRANCH}`)
clipboardy.writeSync(`@B2C_RD '${BRANCH}' 分支預計 ${buildHour}:${buildMinutes} 推上 LAB 區`);
