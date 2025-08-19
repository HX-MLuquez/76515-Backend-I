const express = require("express");
const app = express(); //* Nuestro server app -> {}.get {}.post {}.put {}.delete {}.use
const PORT = 3000;
const fs = require("fs/promises");
const config = require("./config/config"); //
// config.getFilePath("books.json")

app.use(express.json()); //* -> body {vacía} {se puede ver}
app.use(express.urlencoded({ extended: true })); //* FORM-DATA -> {} -> {vemos el object}

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const code_db = "aws123";

//* Método  PATH  function req res
app.get("/", (req, res) => {
  res.status(200).send("Hello World!"); // status 200 por defecto OK
});

app.get("/api/texto", (req, res) => {
  res.send("Hola soy un texto");
});

//* /api/json/...
app.get("/api/json/:code", (req, res) => {
  //* Desde el CLIENTE
  console.log("-body--> ", req.body); //* -> body {}
  console.log("--params-> ", req.params); //* /api/json/abc12  -> params {code:abc12}
  console.log("-query--> ", req.query); //* /api/json/aws123?user=Pepe -> query {user: "Pepe"}
  // -> { user: 'Jimy', gato: 'Nico' }
  const { code } = req.params;
  if (code === code_db) {
    res.status(200).json(products);
  } else {
    res.status(400).json({ message: "Código incorrecto" });
  }
});

app.get("/api/html", (req, res) => {
  res.send(`
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BIKE 200</title>
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
  </head>
  <body>
    <h1>API Bike</h1>
    <button onclick="location.href='/api/json'">Ir a bicicletas</button>
  </body>
</html>`);
});

// MIDDELWARE - funciones intermedias
function enMedio(req, res, next) {
  const { id } = req.query;

  // atatatataaa
  if (id === "pepito") {
    req.miData = { info: "fuufufufufuffuufuf" };
  } else {
    req.miData = { info: "no hay nada" };
  }

  console.log("soy algo intermedio que se ejecuta");
  console.log("Date ", new Date());
  next();
}

app.get("/path/juju", enMedio, (req, res) => {
  console.log("->", req.miData);
  res.send("jujujujujujujujujujujujujuju");
});

/**
 * *Ejemplo de ruta SIN modularizar:
 * Todo está en el mismo archivo para fines didácticos.
 * Normalmente se separa en carpetas:
 * routes (path) / controllers (req, res) / services (lógica de negocio) / dao (manager con db)
 * *http://localhost:3000/api/unmodulated/bookbyid/664f3c8a8d1d1a0f9c7a5b1a
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

    //*------------------ 02. DAO data object access o manager ------------------
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

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
