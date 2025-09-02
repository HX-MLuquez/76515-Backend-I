# SERVER

* IMPORTANTE

- Estructura 'MEHEN'
- Incluir .gitignore
- Incluir .env como el env para profes .env.profe
- Incluir Documentación de las ROUTES -> /docs/API.md

Ejemplo:

1. Probar GET /api/books (Listar libros)
- **Método**: GET
- **URL**: `http://localhost:8080/api/books`
- **Respuesta Esperada**: Array vacío o con libros existentes
- **Código**: 200 OK

1. b. Probar GET by ID /api/books/:id (Obtener libro por ID)
- **Método**: GET
- **URL**: `http://localhost:8080/api/books/664f3c8a8d1d1a0f9c7a5b1b` (usar id real)
- **Respuesta Esperada**: Objeto del libro correspondiente
- **Código**: 200 OK

---

2. Probar POST /api/books (Crear libro)
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
 etc...


### Manejo o uso de try/catch y Validaciones
- No usar 'try/catch' en 'service', no es necesario si ya lo aplicamos al 'controller' como al 'dao'
- No usar 'Validaciones' en 'dao' (manager), no es necesario si ya lo aplicamos al 'controller' como al 'service'