# API REST para la Gestión de Libros 

### Estructura de Archivos
```
├── index.js
├── app.js
├── config/
│   └── config.js
├── data/
│   └── books.json
├── src/
│   ├── controllers/
│   │   ├── books.controller.js
│   │   └── 
│   ├── services/
│   │   ├── books.service.js
│   │   └──
│   ├── dao/
│   │   ├── books.dao.js
│   │   └──
│   └── routes/
│       ├── books.routes.js
│       └──
└── .env
```
### Descripción del Proyecto

Este proyecto es una API REST para la gestión de libros. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de libros, utilizando una arquitectura modular que separa las diferentes responsabilidades en capas.

**8. Archivo de Datos (data/books.json)**
```json
[]
```

**9. Variables de Entorno (.env)**
```env
PORT=8080
```

### Características Clave
1. **Modularización**: Separación clara en capas (DAO, Services, Controllers, Routes)
2. **Validaciones**:
   - Campos obligatorios en libros
   - Validación de posición en frase
   - Manejo de errores centralizado
3. **Persistencia**:
   - Frase en memoria
   - Libros en archivo JSON
4. **Seguridad**:
   - Try/catch en todos los controladores
   - Manejo de errores global
5. **Configuración**:
   - Ruta dinámica para archivo de libros
   - Puerto configurable por entorno

### Ejecución
1. Instalar dependencias:
```bash
npm install express dotenv
```

2. Iniciar servidor:
```bash
node index.js
```

### Endpoints Disponibles

**Libros:**
- `GET /api/books`
- `POST /api/books`
- `PUT /api/books/:id`
- `DELETE /api/books/:id`



---

## Modo de Uso
### Lista de 5 Libros para Pruebas
```json
[
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1a",
    "title": "Cien años de soledad",
    "year": 1967,
    "author": "Gabriel García Márquez",
    "genre": "Realismo mágico",
    "description": "La saga de la familia Buendía en Macondo",
    "price": 24.99,
    "stock": 15,
    "img": "https://images.example.com/cien-anos-soledad.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1b",
    "title": "1984",
    "year": 1949,
    "author": "George Orwell",
    "genre": "Distopía",
    "description": "Una sociedad vigilada por el Gran Hermano",
    "price": 18.50,
    "stock": 20,
    "img": "https://images.example.com/1984.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1c",
    "title": "El Hobbit",
    "year": 1937,
    "author": "J.R.R. Tolkien",
    "genre": "Fantasía",
    "description": "El viaje de Bilbo Bolsón a la Montaña Solitaria",
    "price": 22.95,
    "stock": 12,
    "img": "https://images.example.com/hobbit.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1d",
    "title": "Orgullo y prejuicio",
    "year": 1813,
    "author": "Jane Austen",
    "genre": "Clásico",
    "description": "La historia de Elizabeth Bennet y Fitzwilliam Darcy",
    "price": 16.75,
    "stock": 18,
    "img": "https://images.example.com/orgullo-prejuicio.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1e",
    "title": "La sombra del viento",
    "year": 2001,
    "author": "Carlos Ruiz Zafón",
    "genre": "Misterio",
    "description": "Un libro misterioso en el Cementerio de los Libros Olvidados",
    "price": 26.50,
    "stock": 10,
    "img": "https://images.example.com/sombra-viento.jpg"
  }
]
```

### Pasos para Probar Todas las Rutas de Libros

#### 1. Preparar el entorno
1. Iniciar el servidor: `npm start`
2. Instalar Thunder Client (extensión de VSCode) o usar Postman
3. Configurar `Content-Type: application/json` en los headers

---

#### 2. Probar GET /api/books (Listar libros)
- **Método**: GET
- **URL**: `http://localhost:8080/api/books`
- **Respuesta Esperada**: Array vacío o con libros existentes
- **Código**: 200 OK

#### 2. b. Probar GET by ID /api/books/:id (Obtener libro por ID)
- **Método**: GET
- **URL**: `http://localhost:8080/api/books/664f3c8a8d1d1a0f9c7a5b1b` (usar id real)
- **Respuesta Esperada**: Objeto del libro correspondiente
- **Código**: 200 OK

---

#### 3. Probar POST /api/books (Crear libro)
- **Método**: POST
- **URL**: `http://localhost:8080/api/books`
- **Body** (usar un libro de la lista sin `id`):
```json
{
  "title": "La Biblioteca de Babel",
  "author": "Jorge Luis Borges",
  "year": 1941,
  "genre": "Fantasía",
  "description": "Un relato sobre un universo en forma de biblioteca",
  "price": 15.99,
  "stock": 12,
  "img": "https://images.example.com/biblioteca-babel.jpg"
}
```

- **Respuesta Esperada**:
```json
{
  "id": "...",
  "title": "La Biblioteca de Babel",
  "author": "Jorge Luis Borges",
  "year": 1941,
  "genre": "Fantasía",
  "description": "Un relato sobre un universo en forma de biblioteca",
  "price": 15.99,
  "stock": 12,
  "img": "https://images.example.com/biblioteca-babel.jpg"
}
```
- **Código**: 201 Created
- **Nota**: Guardar el `id` devuelto para pruebas posteriores

---

#### 4. Probar PUT /api/books/:id (Actualizar libro)
- **Método**: PUT
- **URL**: `http://localhost:8080/api/books/664f3c8a8d1d1a0f9c7a5b1b` (usar id real)
- **Body**:
```json
{
  "price": 101,
  "stock": 999999999,
  "description": "Na na na na na naaaa!!!    - NA NA!"
}
```

- **Respuesta Esperada**:
```json
{
  "id": "664f3c8a8d1d1a0f9c7a5b1b",
  "title": "1984",
  "price": 101,
  "stock": 999999999,
  "description": "Na na na na na naaaa!!!    - NA NA!"
}
```
- **Código**: 200 OK

---

#### 5. Probar DELETE /api/books/:id (Eliminar libro)
- **Método**: DELETE
- **URL**: `http://localhost:8080/api/books/664f3c8a8d1d1a0f9c7a5b1b` (usar id real)
- **Respuesta Esperada**:
```json
{
  "id": "664f3c8a8d1d1a0f9c7a5b1b",
  "message": "Libro eliminado"
}
```
- **Código**: 200 OK

---

#### 6. Probar Casos de Error

a) **POST con campos faltantes**:
```json
{
  "title": "Libro incompleto",
  "price": 15.99
}
```
- **Código Esperado**: 400 Bad Request
- **Mensaje**: "Campos requeridos faltantes: author, stock"

b) **PUT con ID inexistente**:
- URL: `http://localhost:8080/api/books/id_inexistente`
- **Código Esperado**: 404 Not Found

c) **DELETE con ID inexistente**:
- URL: `http://localhost:8080/api/books/id_inexistente`
- **Código Esperado**: 404 Not Found

---

### Secuencia Recomendada de Pruebas:
1. `GET /api/books` (verificar estado inicial)
2. `POST /api/books` (crear 2-3 libros)
3. `GET /api/books` (verificar libros creados)
4. `PUT /api/books/:id` (actualizar un libro)
5. `DELETE /api/books/:id` (eliminar un libro)
6. `GET /api/books` (verificar eliminación)
7. Probar casos de error

### Verificación Final:
- Revisar el archivo `data/books.json` para confirmar que los cambios persisten
- Verificar que las operaciones CRUD mantienen la integridad de los datos
- Confirmar que los errores se manejan adecuadamente con mensajes claros

