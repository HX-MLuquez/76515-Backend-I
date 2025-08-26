const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const { paths } = require("./config/config");

// console.log("File path:", paths.public);

//!-------------------------------------
//! ------ CODE - AQUI -----------------
//!-------------------------------------
//* SETEO handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");
app.set("views", paths.views);

//* Middelwares
app.use(express.json()); // Body {...}
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

//* Static
//* Todos nuestros archivos ESTATICOS (html, css, img, etc)
// que se encuentran en la carpeta 'public' sen van a servir en /static
app.use("/static", express.static(paths.public));

//!-------------------------------------
//! ------  FIN CODE -------------------
//!-------------------------------------

app.get("/", (req, res) => {
  // return res.json({ APP: "HANDLEBARS" });
  return res.render("pages/home", {});
});

app.get("/user", (req, res) => {
  const { nombre, id } = req.query;
  const context = {
    nombre,
    id,
  };
  let isValidate = id === "1234";
  if (isValidate) return res.render("pages/user", context);
  else return res.render("pages/not_found_user", context);
});

const users = [];
//* Form para crear un usuario
app.get("/create_user", (req, res) => {
  return res.render("pages/create_user", {});
});

app.post("/user", (req, res) => {
  try {
    const { nombre, email } = req.body;
    if (!nombre || !email) {
      return res.status(400).send("Faltan datos para crear el usuario");
    }
    // Generar un Id random
    const id = Math.floor(Math.random() * 10000);

    const user = {
      nombre,
      email,
      id,
    };
    users.push(user);

    return res.render("pages/user", user);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.get("/admin/:code", (req, res) => {
  const { code } = req.params;
  const context = {
    code,
  };
  return res.render("pages/admin", context);
});
const products = [
  { id: 1, title: "Producto 1", price: 100 },
  { id: 2, title: "Producto 2", price: 200 },
  { id: 3, title: "Producto 3", price: 300 },
];
app.get("/products", (req, res) => {
  const context = {
    products,
    auto:{
      marca: "BMW"
    }
  };
  return res.render("pages/products", context);
});

app.get("/astucia/:message", (req, res) => {
  const { message } = req.params;
  console.log(message);
  const context = {
    message,
  };
  return res.render("pages/astucia", context);
});

module.exports = app;
