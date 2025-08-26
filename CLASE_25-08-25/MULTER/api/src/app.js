const express = require("express");
const app = express();
const routes = require("./routes");
const { paths } = require("./config/environment");
const logger = require("morgan");
const fs = require("fs").promises;

const multer = require("multer");
//!-------------------------------------
//! ------ CODE - AQUI -----------------
//!-------------------------------------
//* Config Multer
// const upload = multer({ dest: "uploads/" }); // config simple por defecto
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  // * ACA usamos este filename para renombrar el path 82376786981243 -> img-44-simple.jpg
  filename: (req, file, cb) => {
    const originalName = `img-${req.params.id}-${file.originalname}`;
    //* Lo guardamos en el objeto req.query para usarlo en el controlador
    req.query.filename = originalName;
    cb(null, originalName);
  },
});
const upload = multer({ storage: storage });


//* MIDDELWARE - EL ORDEN ES ESCENCIAL - VAN UP de todo .use -> a todo lo que está debajo por ende a todas las rutas
app.use(logger("dev"));
app.use(express.json()); // DATA x BODY  {} -> {...}
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

//* Middleware para servir archivos estáticos desde la carpeta "uploads"
// Otras carpetas que se pueden servir son: public, assets, static, etc
app.use("/uploads", express.static(paths.upload));
app.use("/static", express.static(paths.public));

//!-------------------------------------
//! ------  FIN CODE -------------------
//!-------------------------------------

function miMiddelware(req, res, next) {
  console.log("Time:", Date());
  // console.log("Soy el middelware casero");
  next();
}

// app.use(miMiddelware);

app.get("/", (req, res) => {
  res.json({ HULK: "APLASTA" });
});

//* -> http://localhost:8080/upload/single/123 - form-data key='image'


// ----->                            'key'
// app.post("/queloco", upload.single("image"), async (req, res) => {
//   console.log("---> ", req.file); 
// })

app.post("/upload/single/:id", upload.single("image"), async (req, res) => {
  try {
    console.log("---> ", req.file); //* en File está la data de la img  {image: undefined}
    // res.send(`imagen del Usuario guardada ${req.file.originalname}`)
    //* Mostramos la imagen en el navegador que su filename la dejamos en el query
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Imagen Servida</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            color: #333;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #444;
          }
          .image-container {
            margin-top: 30px;
            border: 1px solid #ddd;
            padding: 20px;
            background-color: #fff;
            display: inline-block;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <h1>Imagen Servida desde Express</h1>
        <div class="image-container">
          <img src="/uploads/${req.query.filename}" alt="Imagen subida" />
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    res.send(`imagen ERROR ${error}`);
  }
});

//* Route para agregar hasta 4 imagenes | Desde el Client se deben de seleccionar las 4 imgs juntas
//* -> http://localhost:8080/upload/multiple/123 - form-data key='images'
app.post(
  "/upload/multiple/:id",
  upload.array("images", 4),
  async (req, res) => {
    try {
      console.log("---> ", req.files); //* en File está la data de la img
      res.send(`imagenes del Usuario guardadas ${req.files.length}`);
    } catch (error) {
      res.send(`imagenes ERROR ${error}`);
    }
  }
);

module.exports = app;

/*
!IMPORTANTE

*MULTER PARA DB
const multer = require("multer");
const storage = multer.memoryStorage();
 
const upload = multer({
  // storage: storage,
  limits: {
    fieldSize: 4000000, //* son 4 mb
  },
  fileFilter: (_req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" 
      // || file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          "Formato de archivo inválido. Sólo se permiten: .png, .jpg, .jpeg "
        )
      );
    }
  },
});

module.exports = { upload };

app.post("/upload/single/:id", upload.single("image"), async (req, res) => {
  console.log(req.file.buffer);


*/
