const fs = require("fs").promises;
const crypto = require("crypto");

class BooksDao {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async #readFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        await this.#saveFile([]); // crea archivo vacío si no existe
        return [];
      }
      throw error; // dejamos que lo maneje arriba
    }
  }

  async #saveFile(books) {
    await fs.writeFile(this.filePath, JSON.stringify(books, null, 2), "utf8");
  }

  #generateId() {
    return crypto.randomUUID();
  }

  async getAll() {
    const books = await this.#readFile();
    return JSON.parse(JSON.stringify(books)); // devuelve copia segura
  }

  async getById(id) {
    const books = await this.#readFile();
    return books.find((b) => b.id === id);
  }

  async create(book) {
    const books = await this.#readFile();
    const newBook = { ...book, id: this.#generateId() };
    books.push(newBook);
    await this.#saveFile(books);
    return newBook;
  }

  async update(id, updatedFields) {
    const books = await this.#readFile();
    const index = books.findIndex((b) => b.id === id);

    if (index === -1) throw new Error("Libro no encontrado");

    const updatedBook = {
      ...books[index],
      ...updatedFields,
      id, // aseguramos que no se sobrescriba el id
    };

    books[index] = updatedBook;
    await this.#saveFile(books);
    return updatedBook;
  }

  async delete(id) {
    const books = await this.#readFile();
    const filteredBooks = books.filter((b) => b.id !== id);

    if (books.length === filteredBooks.length) {
      throw new Error("Libro no encontrado");
    }

    await this.#saveFile(filteredBooks);
    return id;
  }
}

module.exports = BooksDao;
