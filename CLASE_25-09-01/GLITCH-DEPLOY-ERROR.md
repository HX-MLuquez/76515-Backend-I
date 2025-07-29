# GLITCH - DEPLOY NODE JS ERROR

## Errores al deployar en Glitch
Para evitar errores al deployar en Glitch, se debe tener en cuenta la versión de Node.js y NPM que se está utilizando en el proyecto.

Especificar la versión de Node.js y NPM en el archivo `package.json` del proyecto.

```json
"engines": {
    "node": ">=16.0.0",
    "npm": ">=10.2.4"
  },
```
Queda de la siguiente manera:
```json
{
  "name": "websocket",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=10.2.4"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "express-handlebars": "^8.0.1",
    "socket.io": "^4.7.5"
  }
}
```

Este error tiene que ver con las diferencias entre versiones de las
librerías que implementamos en despliegue en conjunto con las versiones
de node y de npm

Y si aparece el ERROR - Error: listen EADDRINUSE: address already in use :::8080

```bash
Error: listen EADDRINUSE: address already in use :::8080
```


Se debe modificar el puerto en el archivo `index.js` del proyecto.

```javascript
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

// etc...
```



Y LISTO!!!

