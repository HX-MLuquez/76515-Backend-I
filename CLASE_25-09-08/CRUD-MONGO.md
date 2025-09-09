# 🧩 CRUD en MongoDB

---

## ➕ CREATE

### 📘 Descripción general:

Las operaciones de **inserción** permiten **agregar documentos nuevos** a una colección.
MongoDB ofrece métodos para insertar **un solo documento** o **varios documentos** al mismo tiempo.

### 📌 Sintaxis:

```javascript
db.collection.insertOne(documento, opciones);
db.collection.insertMany([documentos], opciones);
```

- `documento`: el objeto JSON que deseas guardar.
- `opciones`: parámetros opcionales como `ordered` (si `false`, continúa insertando aunque alguno falle).

---

### ✅ Ejemplos prácticos

```javascript
//* Insertar un documento
db.estudiantes.insertOne({nombre: "Sara",edad: 24,curso: "Matemáticas",correo: "sara@mail.com",});
```

```javascript
//* Insertar múltiples documentos
db.estudiantes.insertMany([
  { nombre: "Juan", edad: 20, curso: "Historia" },
  { nombre: "Ana", edad: 22, curso: "Inglés" },
  { nombre: "Pedro", edad: 21, curso: "Arte" },
]);
```

```javascript
//* Insertar documento con _id personalizado
db.estudiantes.insertOne({
  _id: "A100",
  nombre: "Luis",
  edad: 23,
  curso: "Biología",
});
```

---

### 🧠 Buenas prácticas en CREATE

- ✅ Deja que MongoDB genere automáticamente el `_id` salvo que tengas un motivo claro para definirlo.
- 🚫 Evita usar `insert()`, está obsoleto.
- ⚡ Usa `insertMany()` para grandes volúmenes de datos, es más eficiente.

---

## 🔍 READ (GET)

### 📘 Descripción general:

Las operaciones de **lectura** permiten **consultar documentos** en una colección.
MongoDB provee diferentes métodos para recuperar documentos completos o filtrados.

### 📌 Sintaxis:

```javascript
db.collection.find(filtro, proyección);
db.collection.findOne(filtro, proyección);
```

- `filtro`: condiciones para buscar (igual que en `update` o `delete`).
- `proyección`: especifica qué campos mostrar (1 = mostrar, 0 = ocultar).

---

### ✅ Ejemplos prácticos

```javascript
//* Encontrar todos los documentos
db.estudiantes.find();
```

```javascript
//* Encontrar un solo documento
db.estudiantes.findOne({ nombre: "Sara" });
```

```javascript
//* Filtrar por condiciones
db.estudiantes.find({ edad: { $gt: 20 } });
// Retorna los estudiantes con edad mayor a 20
```

```javascript
//* Mostrar solo ciertos campos (proyección)
db.estudiantes.find({ curso: "Biología" }, { nombre: 1, edad: 1, _id: 0 });
// Muestra solo nombre y edad, oculta _id
```

```javascript
//* Ordenar resultados
db.estudiantes.find().sort({ edad: -1 });
// Ordena por edad descendente
```

```javascript
//* Limitar y saltar resultados
db.estudiantes.find().limit(2).skip(1);
// Devuelve 2 resultados, omitiendo el primero
```

```javascript
//* Contar documentos
db.estudiantes.countDocuments({ curso: "Arte" });
```

---

### 🧠 Buenas prácticas en READ

- ✅ Usa **filtros específicos** para mejorar el rendimiento.
- 🔍 Crea **índices** en campos de búsqueda frecuente (`createIndex`).
- ⚡ Evita traer demasiados datos, combina `limit()` y `projection`.

---

## 🔄 UPDATE

### 📘 Descripción general:

Las operaciones de actualización permiten **modificar documentos existentes** en una colección. Se puede actualizar **un solo documento** o **varios documentos**.

### 📌 Sintaxis:

```javascript
db.collection.updateOne(filtro, actualización, opciones);
db.collection.updateMany(filtro, actualización, opciones);
```

- `filtro`: determina qué documentos serán actualizados (igual que en `find()`).
- `actualización`: define los cambios a aplicar usando **operadores de actualización**.
- `opciones`: como `upsert`, que inserta un documento si no existe.

---

### 🎯 Principales operadores de actualización:

| Operador  | Descripción                                              |
| --------- | -------------------------------------------------------- |
| `$set`    | Establece el valor de un campo.                          |
| `$unset`  | Elimina un campo del documento.                          |
| `$inc`    | Incrementa (o decrementa) el valor numérico de un campo. |
| `$rename` | Cambia el nombre de un campo.                            |
| `$min`    | Establece un valor mínimo si el actual es mayor.         |
| `$max`    | Establece un valor máximo si el actual es menor.         |
| `$mul`    | Multiplica el valor numérico de un campo.                |

---

### ✅ Ejemplos prácticos

```javascript
//* Establecer múltiples campos
db.estudiantes.updateOne(
  { nombre: "Sara" },
  {
    $set: {
      apellido: "Gómez",
      curso: "Biología",
      edad: 25,
      correo: "ne@gmail.com",
      sexo: "M",
    },
  }
);
```

```javascript
//* Incrementar un campo
db.estudiantes.updateOne({ nombre: "Sara" }, { $inc: { edad: 1 } });
// Aumenta la edad de Sara en 1 año
```

```javascript
//* Eliminar un campo del documento
db.estudiantes.updateOne({ nombre: "Sara" }, { $unset: { correo: "" } });
// Elimina el campo "correo"
```

```javascript
//* Renombrar un campo
db.estudiantes.updateOne({ nombre: "Sara" }, { $rename: { curso: "materia" } });
// Renombra el campo "curso" a "materia"
```

```javascript
//* Usar $min: actualiza solo si el nuevo valor es menor
db.estudiantes.updateOne({ nombre: "Sara" }, { $min: { edad: 18 } });
// Si la edad actual es mayor que 18, no la cambia
```

```javascript
//* Usar $max: actualiza solo si el nuevo valor es mayor
db.estudiantes.updateOne({ nombre: "Sara" }, { $max: { edad: 30 } });
```

```javascript
//* Usar $mul: multiplicar el valor de un campo
db.estudiantes.updateOne({ nombre: "Sara" }, { $mul: { edad: 2 } });
// Duplicará la edad actual
```

```javascript
//* Actualizar varios documentos
db.estudiantes.updateMany({ edad: 20 }, { $set: { edad: 101 } });
```

```javascript
//* Insertar si no existe (upsert)
db.estudiantes.updateOne(
  { nombre: "Pedro" },
  {
    $set: { edad: 21, curso: "Arte" },
  },
  { upsert: true }
);
// Si Pedro no existe, lo crea con esos datos
```

---

### 🧠 Buenas prácticas en UPDATE

- ⚠️ **No uses `update()`**, está obsoleto. Usa `updateOne()` o `updateMany()`.
- ✅ Usa `$set` para evitar sobrescribir campos no mencionados.
- 🛠 Usa `upsert` para insertar si no existe, pero asegúrate de no duplicar por error.
- 🔍 Antes de actualizar, puedes verificar con `find()` qué documentos serán afectados.

---

## 🗑️ DELETE

### 📌 Métodos principales:

| Método               | Descripción                                                 |
| -------------------- | ----------------------------------------------------------- |
| `deleteOne(filtro)`  | Elimina el **primer documento** que coincida con el filtro. |
| `deleteMany(filtro)` | Elimina **todos los documentos** que coincidan.             |
| `drop()`             | Elimina toda la colección. ⚠️ Irreversible                  |

---

### ✅ Ejemplos prácticos

```javascript
//* Eliminar un documento por ID
db.estudiantes.deleteOne({ _id: ObjectId("60f8a3d9fc13ae2d3c000001") });
```

```javascript
//* Eliminar el primer documento con nombre "Sara"
db.estudiantes.deleteOne({ nombre: "Sara" });
```

```javascript
//* Eliminar múltiples documentos por campo
db.estudiantes.deleteMany({ sexo: "M" });
```

```javascript
//* Eliminar todos los documentos
db.estudiantes.deleteMany({});
```

```javascript
//* Eliminar una colección completa
db.estudiantes.drop();
```

---

## 📚 Resumen final

| Operación         | Método exacto                    | Método estimado               | Obsoleto      |
| ----------------- | -------------------------------- | ----------------------------- | ------------- |
| Contar documentos | `countDocuments()` ✅            | `estimatedDocumentCount()` ✅ | `count()` ❌  |
| Actualizar        | `updateOne()`, `updateMany()` ✅ | -                             | `update()` ❌ |
| Eliminar          | `deleteOne()`, `deleteMany()` ✅ | -                             | -             |

---
