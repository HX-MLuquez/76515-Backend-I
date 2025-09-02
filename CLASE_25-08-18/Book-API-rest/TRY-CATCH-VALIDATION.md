# TRY CATCH Y VALIDACIONES

## **TRY-CATCH: Dónde y Por Qué**

### ✅ **SÍ necesitas try-catch:**

**1. DAO (Capa de Datos)** - Ya lo tienes bien:
```javascript
async #readFile() {
  try {
    const data = await fs.readFile(this.filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await this.#saveFile([]);
      return [];
    }
    throw error; // Re-lanza otros errores
  }
}
```
**¿Por qué?** Porque aquí interactúas directamente con recursos externos (archivo, base de datos) que pueden fallar.

**2. Controller** - Ya lo tienes bien:
```javascript
getBooks = async (req, res, next) => {
  try {
    const books = await this.booksService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error); // Delega al middleware de errores
  }
};
```
**¿Por qué?** Es el punto de entrada HTTP, debe capturar errores y enviarlos al middleware de manejo de errores.

### ❌ **NO necesitas try-catch:**

**Service Layer** - Está bien sin try-catch:
```javascript
async createBook(bookData) {
  // Validaciones
  const requiredFields = ["title", "author", "price", "stock"];
  // ...
  return await this.booksDao.create(bookData);
}
```
**¿Por qué?** Los errores del DAO se propagan automáticamente hacia arriba. Si agregas try-catch aquí solo para re-lanzar, es redundante.

---

## **VALIDACIONES: Dónde y Por Qué**

### ✅ **SÍ necesitas validaciones:**

**1. Controller (Validaciones HTTP básicas):**
```javascript
getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Validación básica de parámetro
    if (!id || id.trim() === "") {
      return res.status(400).json({ message: "ID es requerido" });
    }
    
    const book = await this.booksService.getBookById(id);
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};
```

**2. Service (Validaciones de negocio)** - Ya lo tienes:
```javascript
async createBook(bookData) {
  // Validación de campos requeridos
  const requiredFields = ["title", "author", "price", "stock"];
  const missingFields = requiredFields.filter((field) => !bookData[field]);

  if (missingFields.length > 0) {
    throw new Error(`Campos requeridos faltantes: ${missingFields.join(", ")}`);
  }

  // Podrías agregar más validaciones de negocio:
  if (bookData.price < 0) {
    throw new Error("El precio debe ser positivo");
  }
  
  if (bookData.stock < 0) {
    throw new Error("El stock debe ser positivo");
  }

  return await this.booksDao.create(bookData);
}
```

### ❌ **NO necesitas validaciones en:**

**DAO** - Solo maneja persistencia:
```javascript
async create(book) {
  const books = await this.#readFile();
  const newBook = { ...book, id: this.#generateId() };
  books.push(newBook);
  await this.#saveFile(books);
  return newBook;
}
```
**¿Por qué?** El DAO asume que recibe datos ya validados desde el Service.

---

## **Inconsistencias que encontré:**

**1. En Service usas dos tipos de errores:**
```javascript
// Unas veces Error genérico
throw new Error("ID requerido");

// Otras veces AppError (que no está definido)
throw new AppError("Libro no encontrado", 404);
```

**2. Validación duplicada:**
```javascript
// En Service
async updateBook(id, updateData) {
  if (!id) throw new Error("ID requerido");
  const existing = await this.booksDao.getById(id);
  if (!existing) throw new AppError("Libro no encontrado", 404); // ❌
  return await this.booksDao.update(id, updateData);
}

// En DAO
async update(id, updatedFields) {
  // ...
  if (index === -1) throw new Error("Libro no encontrado"); // ❌ Duplicado
}
```

**Recomendación:** Mantén la validación solo en el Service y que el DAO lance errores técnicos específicos.

