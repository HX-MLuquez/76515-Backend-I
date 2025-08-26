const express = require("express");
const app = express();
const routes = require("./routes/index"); // index.js
// const routesProducts = require("./routes/product.router"); // index.js

app.use(express.json()); // {} por body es de lectura

//!-------------------------------------
//! ------ CODE - AQUI -----------------
//!-------------------------------------
// app.get("/", (req, res) => {
//   res.json({ API: "BACKEND - ROUTER", break: "a las 21:15 volvemos" });
// });

// app.get("/api/info", (req, res) => {
//   res.json({ API: "BACKEND - ROUTER", break: "a las 21:15 volvemos" });
// });
// app.get("/api/products", (req, res) => {
//   res.json({ API: "BACKEND - ROUTER", products: [] });
// });

app.use("/api", routes)
/*

'/api  /products  /
                  /4635
       /users/
             /juju
             /created
*/

//!-------------------------------------
//! ------  FIN CODE -------------------
//!-------------------------------------

module.exports = app;
