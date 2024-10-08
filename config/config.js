// config/config.js
require('dotenv').config();

module.exports = {
    botToken: process.env.BOT_TOKEN,
    port: process.env.PORT || 3000,
};
