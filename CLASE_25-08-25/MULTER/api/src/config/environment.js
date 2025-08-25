//*

const path = require("path");

module.exports = {
  PORT: 8080,
  paths: {
    views: path.join(__dirname, "../views"),
    public: path.join(__dirname, "../../public"),
    upload: path.join(__dirname, "../../uploads"),
  },
};
