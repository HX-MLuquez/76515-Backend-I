const path = require('path');


module.exports = {
    PORT: 8080,
    getFilePath: (filename) => path.join(__dirname, `../data/${filename}`)
};