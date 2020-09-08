const {
    MINUTE
} = require('./config')

const { exec } = require("child_process")

// {MINUTE} 分鐘
let time = MINUTE * 60 * 1000

const timeCount = () => {
    time -= 1000
    setTimeout(() => {
        console.log(`還有: ${time/1000} 秒`);
        if (time > 0) {
            timeCount()
        }
        else {
            console.log('執行上版 !!');
            exec('sh build.sh')
        }
    }, 1000);
}

timeCount()