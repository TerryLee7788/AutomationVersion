const dotenv = require('dotenv');
dotenv.config();

const URL = process.env.URL,
    BRANCH = process.env.BRANCH,
    USER_NAME = process.env.USER_NAME,
    PASS_WORD = process.env.PASS_WORD,
    MINUTE = process.env.MINUTE;

module.exports = {
    MINUTE,
    URL,
    BRANCH,
    USER_NAME,
    PASS_WORD
}
