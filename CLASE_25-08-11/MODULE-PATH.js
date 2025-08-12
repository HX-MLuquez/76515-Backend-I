const path = require("path");

// console.log(path);
console.log("__dirname:", __dirname); // c:\Users\...\[ 76515 BACK-I LUNES 20-30 ]\76515-CLASE\CLASE_25-08-11


const rutaArchivo = path.join(__dirname, "data", "archi.txt");
// c:\Users\...\[ 76515 BACK-I LUNES 20-30 ]\76515-CLASE\CLASE_25-08-11\data\archi.txt
console.log("Ruta final:", rutaArchivo);
/*
NODE -> COMMAND JS

Importar y Exportar
require     module.exports
*/