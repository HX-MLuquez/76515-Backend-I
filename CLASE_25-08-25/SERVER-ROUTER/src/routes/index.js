//!-------------------------------------
//! ------ CODE - AQUI -----------------
//!-------------------------------------

const express = require("express");
const router = express.Router();

const productsRouter = require("./product.router");
const usersRouter = require("./user.router");

router.use("/products", productsRouter); // /products/    /products/1234
router.use("/users", usersRouter);

module.exports = router;