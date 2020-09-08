const {
    MINUTE
} = require('./config')

const { exec } = require("child_process")

// {MINUTE} 分鐘
let time = MINUTE * 60 * 1000

const timeCount = () => {
    console.log(`還有: ${time/1000} 秒`);
    time -= 1000
    setTimeout(() => {
        if (time > 0) {
            timeCount()
        }
        else {
            console.log('執行上版 !!');
            exec('sh ./sh/build.sh')
        }
    }, 1000);
}

timeCount()