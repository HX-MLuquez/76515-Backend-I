# CLASE 05

- SERVER-ROUTER (Modular ROUTER)
- STATIC
- MIDDELWARES
- MULTER
- HANDLEBARS

1. **SERVER-ROUTER (Modular ROUTER)**

   - Separa la logica de las rutas en diferentes archivos, para que no se vuelva un archivo gigante y desordenado.
   - Se crea una carpeta llamada `routes` y dentro de ella se crean los archivos de las rutas.
   - Se importa el router de express y se exporta el router al final del archivo.
   - En el archivo principal se importa el router y se usa como middleware.

2. **STATIC**

   - Se usa para servir archivos estaticos, como imagenes, css, js, etc.

3. **MIDDELWARES**

   - Son funciones que se ejecutan antes de la ruta, se pueden usar para validar datos, autenticar usuarios, etc.
   - Se pueden usar varios middlewares en una misma ruta.
   - Se pueden usar middlewares globales, que se ejecutan en todas las rutas.

4. **MULTER**

   - Es un middleware para manejar archivos subidos por el usuario.
   - Se usa para subir archivos a un servidor, como imagenes, pdfs, etc.
   - Se puede usar para validar el tipo de archivo, el tamaño, etc.
   - Se puede usar para guardar el archivo en una carpeta o en una base de datos.
   - Se usa para subir archivos a un servidor, como imagenes, pdfs, etc.

5. **HANDLEBARS**
   - Es un motor de plantillas para renderizar vistas en el servidor.
   - Se usa para crear vistas dinamicas, como formularios, listas, etc.
   - Se puede usar para crear layouts, parciales, helpers, etc.
   - Se puede usar para crear vistas en el servidor y enviarlas al cliente.


---

### Consultas sobre el Proyecto

- Revisar la estructura de carpetas en cuanto a seguir buenas prácticas
- Route en cuanto al manejo del carrito para lo que es el manejo de cantidad
   - const products = [{id:2, },{id:3, },{id:4,}] <- .json <- db 
   - carrito =  [{id: 1, [ productoA: 2, productoB: 3]}] 
```
Yo si hice la validación, pero no es complicada. Ya en productmanager te piden un método para buscar un producto por id. El endpoint de agregar un producto al carrito necesita el id del producto y del carro. Puedes llamar a ese método de productmanager que busca el producto por id, si no lo consigues, devuelves un error 404 si lo consigues un 200
```


---

---

---


# 📦 Proyecto Final - Primera Entrega

## 📝 Descripción General

Se ha desarrollado un servidor basado en **Node.js** y **Express** que escucha en el puerto **8080**, estructurado en dos grupos de rutas principales:

- `/api/products` para la gestión de productos
- `/api/carts` para la gestión de carritos

La persistencia de datos se maneja mediante el **file system**, utilizando archivos `products.json` y `carts.json` como respaldo. La interacción se realiza mediante herramientas como **Postman**, sin necesidad de una interfaz visual.

---

## 📁 Estructura del Proyecto

```

root/
├── src/
│   ├── routers/
│   │   ├── products.router.js
│   │   └── carts.router.js
│   ├── managers/
│   │   ├── ProductManager.js
│   │   └── CartManager.js
│   └── app.js
├── data/
│   ├── products.json
│   └── carts.json
└── package.json

````

---

## 🚀 Endpoints y Funcionalidades

### 📦 Productos (`/api/products`)

#### 📄 GET `/`
- Listar todos los productos almacenados en `products.json`.

#### 📄 GET `/:pid`
- Obtener un solo producto según el ID proporcionado.

#### ➕ POST `/`
- Agregar un nuevo producto.
- Campos obligatorios en el `body`:
  - `title`: `String`
  - `description`: `String`
  - `code`: `String`
  - `price`: `Number`
  - `status`: `Boolean`
  - `stock`: `Number`
  - `category`: `String`
  - `thumbnails`: `Array` de `String` (URLs o rutas de imágenes)
- ⚠️ El `id` se autogenera, asegurando que **nunca se repita**.

#### ✏️ PUT `/:pid`
- Actualiza un producto existente según su ID.
- ⚠️ **No se puede actualizar ni eliminar el `id`** del producto.

#### ❌ DELETE `/:pid`
- Elimina un producto por su ID.

---

### 🛒 Carritos (`/api/carts`)

#### ➕ POST `/`
- Crea un nuevo carrito con la siguiente estructura:
```json
{
  "id": "auto-generado",
  "products": []
}
````

#### 📄 GET `/:cid`

* Lista los productos que pertenecen al carrito con el ID proporcionado.

#### ➕ POST `/:cid/product/:pid`

localhost:3000/api/products/32/product/2

req.params.cid -> 32
req.params.pid -> 2

const {cid, pid} = req.params 
if(!cid || !pdi){
   
}

* Agrega un producto al carrito.
* Si el producto ya existe en el carrito, se **incrementa** la propiedad `quantity`.
* Estructura del objeto dentro del array `products` del carrito:

```json
{
  "product": "id-del-producto",
  "quantity": 1
}
```

---

## 💾 Persistencia

* Los datos se almacenan en:

  * `data/products.json` (para productos)
  * `data/carts.json` (para carritos)
* Los ID se autogeneran en cada clase manager (`ProductManager`, `CartManager`) y son **únicos y no repetibles**.

---

## 📌 Consideraciones

* Todas las rutas deben probarse con herramientas como Postman.
* No se incluye interfaz visual en esta entrega.
* No subir la carpeta `node_modules` al repositorio.

---

## 📎 Entrega

🔗 **Link al repositorio de GitHub**: [https://github.com/usuario/proyecto-final](https://github.com/usuario/proyecto-final)
*(Reemplaza este enlace por el real)*

---

## ✅ Checklist

* [x] Servidor Express en puerto 8080
* [x] Rutas `/api/products/` implementadas
* [x] Rutas `/api/carts/` implementadas
* [x] Persistencia en archivos JSON con File System
* [x] Uso correcto de Express Router
* [x] Ids autogenerados y no repetibles
* [x] Entrega vía GitHub sin `node_modules`

---

🛠️ **Desarrollado con Node.js, Express y amor por el backend.**

```




products = [{id:1, title:"Gaseosa"}{id:2, title:"arroz"}{id:3, title:"fideo"}]

carts = [{id:32, products:[{
  "product": "3",
  "quantity": 10
},{
  "product": "2",
  "quantity": 11
}]},{}]

carts 32  product 2 

carts[0].products.map -> product === 2 

Descripción General

Desarrollar un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra para tu API.

Requisitos de la Primera Entrega

Desarrollo del Servidor

El servidor debe estar basado en Node.js y Express, y debe escuchar en el puerto 8080. Se deben disponer dos grupos de rutas: /products y /carts. Estos endpoints estarán implementados con el router de Express, con las siguientes especificaciones:

Rutas para Manejo de Productos (/api/products/)

GET /:

Debe listar todos los productos de la base de datos.

GET /:pid:

Debe traer solo el producto con el id proporcionado.

POST /:

Debe agregar un nuevo producto con los siguientes campos:

id: Number/String (No se manda desde el body, se autogene…