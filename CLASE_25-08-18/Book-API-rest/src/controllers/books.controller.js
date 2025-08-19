// Los controladores solo hacen la lógica de negocio y responden si todo va bien.
// Si algo falla, simplemente hacen next(error) y todo se maneja en un único lugar centralizado.

class BooksController {
  constructor(booksService) {
    this.booksService = booksService;
  }

  getBooks = async (req, res, next) => {
    try {
      const books = await this.booksService.getAllBooks();
      res.json(books);
    } catch (error) {
      next(error); // delega al middleware de errores
    }
  };

  getBookById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await this.booksService.getBookById(id);
      if (!book) {
        return res.status(404).json({ message: "Libro no encontrado" });
      }
      res.json(book);
    } catch (error) {
      next(error);
    }
  };

  createBook = async (req, res, next) => {
    try {
      const newBook = await this.booksService.createBook(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      next(error);
    }
  };

  updateBook = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedBook = await this.booksService.updateBook(id, req.body);
      res.json(updatedBook);
    } catch (error) {
      next(error);
    }
  };

  deleteBook = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedId = await this.booksService.deleteBook(id);
      res.json({ id: deletedId, message: "Libro eliminado" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = BooksController;
