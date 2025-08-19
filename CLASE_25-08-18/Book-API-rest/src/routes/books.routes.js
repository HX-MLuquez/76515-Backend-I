const express = require("express");
const router = express.Router();
const config = require("../../config/config");
const BooksDao = require("../dao/books.dao");
const BooksService = require("../services/books.service");
const BooksController = require("../controllers/books.controller");

const booksDao = new BooksDao(config.getFilePath("books.json"));
const booksService = new BooksService(booksDao);
const booksController = new BooksController(booksService);

router.get("/", booksController.getBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.createBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
