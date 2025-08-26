const path = require("path");
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8080,
  paths: {
    views: path.join(__dirname, "../views"), // -> "C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\...\HANDLEBARS\src\views"
    public: path.join(__dirname, "../../public"), // -> "C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\...\HANDLEBARS\public"
  },
};


// -> C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\...\HANDLEBARS\src\views
// -> C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\...\HANDLEBARS\public