const express = require("express");
const app = express();
const booksRoutes = require("./src/routes/books.routes");
const fs = require("fs/promises");
const config = require("./config/config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/books", booksRoutes);

/**
 * *Ejemplo de ruta SIN modularizar:
 * Todo está en el mismo archivo para fines didácticos.
 * Normalmente se separa en carpetas:
 * routes (path) / controllers (req, res) / services (lógica de negocio) / dao (manager con db)
 * *http://localhost:8080/api/unmodulated/bookbyid/664f3c8a8d1d1a0f9c7a5b1a
 */
//*------------------ 01. ROUTE ------------------
// Definimos su path y pasamos la function
app.get("/api/unmodulated/bookbyid/:id", async (req, res) => {
  try {
    //*------------------ 04. CONTROLLER ------------------
    // Define el endpoint y recibe el request
    const bookId = req.params.id;

    if (!bookId) {
      return res.status(400).json({ error: "Falta el ID del libro" });
    }

    //*------------------ 02. DAO ------------------
    // Data Access Object: encargado de acceder a la fuente de datos
    const getBookById = async (id) => {
      const data = await fs.readFile(config.getFilePath("books.json"), "utf-8");
      const books = JSON.parse(data);

      // ⚠️ Importante: asegurarnos de comparar mismo tipo de dato
      return books.find((book) => String(book.id) === String(id));
    };

    // Llamada a DAO
    const book = await getBookById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    //*------------------ 03. SERVICE ------------------
    /**
     * *Lógica de negocio: aplica reglas sobre los datos obtenidos
     * Suponemos que si un book tiene un stock igual a 0 debemos enviar un mensaje indicando que el libro
     * no está disponible, y si el stock es mayor a 0 y menor a 3 debemos enviar el libro y un mensaje
     * indicando que el libro está por agotarse, caso contrario devolvemos el libro.
     */
    const checkBookAvailability = (book) => {
      let response = {
        book,
        message: "",
        status: false,
      };

      if (book.stock === 0) {
        response.message = "Libro no disponible";
      } else if (book.stock > 0 && book.stock < 3) {
        response.message = "Libro pronto a agotarse";
        response.status = true;
      } else {
        response.status = true;
      }

      return response;
    };

    // Llamada al servicio
    const response = checkBookAvailability(book);

    //* ------------------ 04. CONTROLLER ------------------
    // Envía la respuesta al cliente
    return res.json(response);
  } catch (error) {
    console.error("Error en la ruta /api/unmodulated/bookbyid/:id:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//* Route root
app.get("/", (req, res) => {
  try {
    const styles = `
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
`;
    const html = `
  ${styles}
  <h1>API Books</h1>
  <button onclick="location.href='/api/books'">Ir a libros</button>
`;

    res.send(html);
  } catch (error) {
    console.error("Error en la ruta raíz:", error);
    res.status(500).send("Error en el servidor");
  }
});

//* Middleware para 404
app.use((req, res, next) => {
  const styles = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   }
`;
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>404 - Not Found</title>
      <style>
        ${styles}
      </style>
    </head>
    <body>
    <div class="container">
      <h1>404 - Not Found</h1>
      <p>La página que buscas no existe.</p>
      <a href="/" class="btn">Volver al inicio</a>
    </div>
    </body>
    </html>
  `;

  res.status(404).send(html);
});

//* Middleware de manejo de errores - para capturar errores no manejados
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);

  res.status(500).json({
    success: false,
    message: err.message || "Error interno en el servidor",
  });
});

module.exports = app;
