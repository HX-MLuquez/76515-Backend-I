const fs = require("fs").promises;

const path = require("path");
const productsFilePath = path.join(__dirname, "../db/products.json");

class ProductManager {
  static async allProducts() {
    try {
      console.log("---->");
      const data = await fs.readFile(productsFilePath, "utf-8");

      //SQLite una db interna
      //Postgres SQL -> QUERIES  - ORM Sequelize    findAll findOne findById
      // No SQL -> Mongo DB - ODM Mongoose
      console.log("---->", data);
      if (!data) return [];
      return JSON.parse(data);
    } catch (error) {
      
    }
  }

  static async getProductById(id) {}
}

module.exports = ProductManager;
