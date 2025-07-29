# API REST con Express y JSON

## A Considerar Buenas prácticas - Debemos trabajar con:

- Clases (static)
- Validar (usar condicionales)
- Procesos Asincrónicos - ASYNC/AWAIT
- Manejo de Errores - TRY/CATCH
- Datos -> DB <- van a ser archivos <- fs.promises - **db No SQL <- Mongo**
- Modular nuestro SERVER
- Variables de Entorno
- .gitignore
- CRUD (crear, leer, actualizar, eliminar) - Métodos GET POST PUT DELETE 
- STATUS 
- MIDDELWARE
- CORS

## Separar la lógica de tu API en módulos

Tenemos una ruta `GET /books` que lee libros desde `db/books.json`. Y vamos a separar en:
- **routes**
- **controllers**
- **services**
- **managers**

---

### 1. **Route (routes/book.router.js)**

Aquí definimos **la ruta** y le asignamos **qué controller** manejará la lógica.

```javascript
import { getBooksController } from '../controllers/book.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/books', getBooksController);

export default router;
```

---

### 2. **Controller (controllers/book.controller.js)**

El controller recibe el request, llama al **service**, y responde.

```javascript
import { getBooksService } from '../services/book.service.js';

export const getBooksController = async (req, res) => {
  try {
    const books = await getBooksService();
    res.json({ status: 'success', payload: books });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
```

---

### 3. **Service (services/book.service.js)**

El service es el que **pide la información al manager**. Y aquí aplicar **Reglas de negocio** de ser necesario.

```javascript
import { getBooksManager } from '../managers/book.manager.js';

export const getBooksService = async () => {
  const books = await getBooksManager();
  return books;
};
```

---

### 4. **Manager (managers/book.manager.js)**

El manager **accede directamente** a la "base de datos" (en tu caso `db/books.json`).  
Es quien sabe "dónde" y "cómo" obtener los datos.

```javascript
import fs from 'fs/promises';
import path from 'path';

const booksFilePath = path.resolve('db', 'books.json');

export const getBooksManager = async () => {
  const data = await fs.readFile(booksFilePath, 'utf-8');
  const books = JSON.parse(data);
  return books;
};
```

---

# 🎯 Resumen rápido:

| Módulo        | Responsabilidad                           |
|---------------|--------------------------------------------|
| **Route**     | Definir la ruta y qué controller atiende.  |
| **Controller**| Manejar la request y response.             |
| **Service**   | Aplicar reglas de negocio.                 |
| **Manager**   | Leer datos de la base de datos (JSON).      |

---


POSTMAN de Escritorio para probar nuestros Servidores
(https://www.postman.com/downloads/)