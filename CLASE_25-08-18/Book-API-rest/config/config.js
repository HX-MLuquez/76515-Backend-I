const path = require('path');
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    getFilePath: (filename) => path.join(__dirname, `../data/${filename}`)
};