class BooksService {
  constructor(booksDao) {
    this.booksDao = booksDao;
  }

  async getAllBooks() {
    return await this.booksDao.getAll();
  }

  async getBookById(id) {
    if (!id) throw new Error("ID requerido");
    return await this.booksDao.getById(id);
  }

  async createBook(bookData) {
    const requiredFields = ["title", "author", "price", "stock"];
    const missingFields = requiredFields.filter((field) => !bookData[field]);

    if (missingFields.length > 0) {
      throw new Error(
        `Campos requeridos faltantes: ${missingFields.join(", ")}`
      );
    }

    return await this.booksDao.create(bookData);
  }

  async updateBook(id, updateData) {
    if (!id) throw new Error("ID requerido");
    const existing = await this.booksDao.getById(id);
    if (!existing) throw new AppError("Libro no encontrado", 404);
    return await this.booksDao.update(id, updateData);
  }

  async deleteBook(id) {
    if (!id) throw new Error("ID requerido");
    const existing = await this.booksDao.getById(id);
    if (!existing) throw new AppError("Libro no encontrado", 404);
    return await this.booksDao.delete(id);
  }
}

module.exports = BooksService;
