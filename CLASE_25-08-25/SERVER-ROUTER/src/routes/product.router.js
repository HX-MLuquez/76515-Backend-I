//!-------------------------------------
//! ------ CODE - AQUI -----------------
//!-------------------------------------
const express = require("express");
const router = express.Router();
// import { Router } from "express";
const { getAllProducts, deleteProductById } = require("../controllers/product.controller");

router.get("/", getAllProducts);
router.delete("/:id", deleteProductById);

module.exports = router;

/*
const products = [];
// router.get("/", async (req, res) => {
//   try {
//     // console.log("IN getAllProducts")
//     const list_products = products;
//     // console.log("IN getAllProducts", products)
//     res.json(list_products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

async function getAllProductController(req, res) {
  try {
    // console.log("IN getAllProducts")
    const list_products = products;
    // console.log("IN getAllProducts", products)
    res.json(list_products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

router.get("/", getAllProductController);
*/
