# Instalar MONGO DB

## Instalación 

1. Descargar el instalador de MongoDB desde la página oficial: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

2. Ir a donde dice "MongoDB Community Server" y seleccionar la versión de MongoDB que corresponda a tu sistema operativo.

3. Descargar el archivo y ejecutarlo.
(el msi es un ejecutable de windows)

4. Seguir los pasos de instalación.

5. En la pantalla de "Completing the MongoDB Setup Wizard" seleccionar la opción "Install MongoDB Compass" para instalar la interfaz gráfica de MongoDB.

6. Finalizar la instalación.

7. Para verificar que la instalación fue exitosa, abrir una terminal y ejecutar el comando `mongosh`. Si se abre la consola de MongoDB, la instalación fue exitosa.

8. Para cerrar la consola de MongoDB, ejecutar el comando `exit`.

9. Para abrir MongoDB Compass, buscarlo en el menú de aplicaciones o ejecutar el comando `mongocompass`.

10. En MongoDB Compass, se puede conectar a un servidor de MongoDB local o remoto. Para conectarse a un servidor local, seleccionar la opción "Connect to localhost" y hacer clic en "Connect".

11. Una vez conectado, se puede explorar las bases de datos, colecciones y documentos de MongoDB.

12. ¡Listo! Ahora tienes MongoDB instalado en tu computadora y puedes empezar a trabajar con bases de datos NoSQL.


--- 


## Comandos básicos de MongoDB

1. Crear una base de datos:

```javascript
use nombre_de_la_base_de_datos;
```

2. Crear una colección e insertar un documento:

```javascript
db.nombre_de_la_coleccion.insertOne({ campo1: 'valor1', campo2: 'valor2' });
```

3. Consultar todos los documentos de una colección:

```javascript
db.nombre_de_la_coleccion.find();
```

4. Consultar un documento por su ID:

```javascript
db.nombre_de_la_coleccion.findOne({ _id: ObjectId('ID_DEL_DOCUMENTO') });
```

5. Actualizar un documento:

```javascript
db.nombre_de_la_coleccion.updateOne({ campo: 'valor' }, { $set: { campo_actualizado: 'nuevo_valor' } });
```

6. Eliminar un documento:

```javascript
db.nombre_de_la_coleccion.deleteOne({ campo: 'valor' });
```

7. Eliminar una colección:

```javascript
db.nombre_de_la_coleccion.drop();
```

8. Eliminar una base de datos:

```javascript
use nombre_de_la_base_de_datos;
db.dropDatabase();
```

9. Listar todas las bases de datos:

```javascript
show dbs;
```

10. Listar todas las colecciones de una base de datos:

```javascript
show collections;
```

11. Salir de la consola de MongoDB:

```javascript
exit;
```

12. ¡Listo! Ahora tienes los comandos básicos de MongoDB para empezar a trabajar con bases de datos NoSQL.

## Referencias

- [MongoDB Download Center](https://www.mongodb.com/try/download/community)
- [MongoDB Documentation](https://docs.mongodb.com/manual/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
- [MongoDB Query Operators](https://docs.mongodb.com/manual/reference/operator/query/)
- [MongoDB Update Operators](https://docs.mongodb.com/manual/reference/operator/update/)
- [MongoDB Delete Operators](https://docs.mongodb.com/manual/reference/operator/delete/)


## Modelo de Documentos (MongoDB, CouchDB)

Se utilizan diagramas de documentos JSON o esquemas visuales que muestran la estructura y las relaciones entre documentos dentro de colecciones.

Ejemplo de diagrama para una tienda en MongoDB:
Se puede representar gráficamente con recuadros anidados que reflejen la estructura del JSON.

```css

[Usuarios]
 ├── Usuario_ID
 ├── Nombre
 ├── Email
 ├── [Publicaciones]
      ├── Public
```

```css

[Usuarios]
 ├── Usuario_ID
 ├── Nombre
 ├── Email
 ├── [Publicaciones]
      ├── Public
```

Ejemplo del JSON de un usuario con publicaciones en MongoDB:

```json
{
  "Usuario_ID": 1,
  "Nombre": "Juan",
  "Email": "ma@gmail.com"
    "Publicaciones": [
        {
        "Publicacion_ID": 1,
        "Titulo": "Mi primer post",
        "Contenido": "Hola, este es mi primer post"
        },
        {
        "Publicacion_ID": 2,
        "Titulo": "Mi segundo post",
        "Contenido": "Hola, este es mi segundo post"
        }
    ]
}
```

## Ejercicios

1. Crear una base de datos `red_social` con las colecciones `usuarios` y `fotos`, e insertar los siguientes documentos:

- Colección `usuarios`:

```javascript
use red_social;

db.usuarios.insertMany([
    { _id: 1, nombre: 'Juan Pérez', email: 'na@gmail.com' },
    { _id: 2, nombre: 'Ana García', email: 'ne@gmail.com' },
    { _id: 3, nombre: 'Luis Martínez', email: 'ni@gmail.com' },
]);

```

- Colección `fotos`:

```javascript
use red_social;

db.fotos.insertMany([
    { usuario_id: 1, url: 'foto1.jpg', fecha_subida: new Date() },
    { usuario_id: 1, url: 'foto2.jpg', fecha_subida: new Date() },
    { usuario_id: 2, url: 'foto3.jpg', fecha_subida: new Date() },
    { usuario_id: 2, url: 'foto4.jpg', fecha_subida: new Date() },
    { usuario_id: 3, url: 'foto5.jpg', fecha_subida: new Date() },
]);

```

2. Intentar eliminar un usuario con fotos relacionadas:

```javascript
db.fotos.find().pretty();

db.usuarios.deleteOne({ _id: 3 });

// Buscar usuarios que aún existen
var usuariosExistentes = db.usuarios.find().map(usuario => usuario._id);

// Mostrar las fotos que ya no tienen relación con ningún usuario
db.fotos.find({ usuario_id: { $nin: usuariosExistentes } }).pretty();
```

```js

db.dropDatabase();
```

---