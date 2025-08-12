// LOCAL

// npm install nombre-del-modulo

// GLOBAL

// npm install -g nodemon

//* VERSIONES

// Ejemplo del uso del operador ^
// Supongamos que tienes una dependencia en tu package.json como esta:

{
  dependencies: {
    express: "^4.17.1";
  }
}
// El operador ^ antes de la versión (^4.17.1) significa lo siguiente:

// 4 es la versión mayor.
// 17 es la versión menor.
// 1 es la versión de parche.
// Con ^4.17.1, npm actualizará el paquete express a cualquier versión que sea compatible con 4.x.x, 
// es decir, cualquier versión mayor o igual a 4.17.1 pero menor que 5.0.0. Esto incluye versiones como 
// 4.17.2, 4.18.0, etc., pero no 5.0.0 o versiones mayores.

// Ejemplo práctico
// Inicialización del proyecto:

// mkdir mi-proyecto
// cd mi-proyecto
// npm init -y
// Instalación de express con la versión ^4.17.1:

// npm install express@^4.17.1
// Revisar package.json:
// El archivo package.json se verá algo así:

// {
//   "name": "mi-proyecto",
//   "version": "1.0.0",
//   "main": "index.js",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.17.1"
//   }
// }
// Cómo funciona la actualización
// Si ejecutas npm update, npm buscará la última versión menor más alta compatible con 4.17.1
// y actualizará express a esa versión si hay una disponible.
// Por ejemplo, si express tiene una nueva versión 4.18.0, npm la instalará al ejecutar npm update.

//! npm outdated
//! npm update

// Si npm outdated no me muestra nada, es que no hay actualizaciones disponibles.
// Para ver todos mis modulos globales instalados en mi sistema
//* npm list -g --depth=0

// Para ver todos mis modulos locales instalados en mi proyecto
//* npm list --depth=0


// EJEMPLO
//* npm install moment@2.1.0
// npm install express@4.16.0

// npm install express@~4.17.1


//* JS -> NODE -> NPM    NVM