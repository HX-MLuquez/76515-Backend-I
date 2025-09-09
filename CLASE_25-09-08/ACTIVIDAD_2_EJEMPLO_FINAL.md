Sobre una base de datos llamada “colegio”, crear 
una colección “estudiantes” donde se agregarán 
documentos con los siguientes datos:
 ✓ nombre
 ✓ apellido
 ✓ curso
 ✓ edad
 ✓ correo
 ✓ sexo 
Crear 5 estudiantes (Insert Many) con los campos 
mencionados arriba. Además, crear un estudiante 
sólo con nombre, apellido y curso. ¿Es posible?

Realizar una búsqueda para 
obtener a todos los estudiantes.
 ✓ Realizar una búsqueda para 
obtener a todos los estudiantes de 
sexo H (hombre)
 ✓ Realizar un conteo para obtener el 
número de documentos totales.
 ✓ Realizar un conteo para obtener el 
número de documentos totales que 
cumplan con el criterio: “Es mujer”


```javascript
use colegio;

db.estudiantes.insertMany([
    { nombre: 'Juan', apellido: 'Pérez', curso: 'Matemáticas', edad: 15, correo: 'ma@gmail.com', sexo: 'H' },
    { nombre: 'Ana', apellido: 'García', curso: 'Física', edad: 16, correo: 'me@gmail.com', sexo: 'M' },
    { nombre: 'Luis', apellido: 'Martínez', curso: 'Química', edad: 17, correo: 'mi@gmail.com', sexo: 'H' },
    { nombre: 'María', apellido: 'Gómez', curso: 'Biología', edad: 18, correo: 'mo@gmail.com', sexo: 'M' },
    { nombre: 'Pedro', apellido: 'Jiménez', curso: 'Historia', edad: 19, correo: 'mu@gmail.com', sexo: 'H' },
    { nombre: 'Sofía', apellido: 'López', curso: 'Geografía' }
]);

db.estudiantes.find();

db.estudiantes.find({ sexo: 'H' });

db.estudiantes.countDocuments();

db.estudiantes.find({ sexo: 'M' }).count();

```



Basado en nuestra base de datos “colegio”
 ✓ Se agregarán 5 estudiantes más, con diferentes campos y 
con la misma estructura. además, crear 1 alumno sólo con 
nombre.
 ✓ Realizar una búsqueda aplicando ordenamientos, 
proyecciones, saltos y límites.
 ✓ Se analizarán los resultados de las proyecciones, saltos, 
ordenamientos y límites. ¿Cómo se comportan los 
documentos que tienen campos incompletos

```js
db.estudiantes.insertMany([
    { nombre: 'Carlos', apellido: 'Gómez', curso: 'Historia', edad: 20, correo: 'ta@gmail.com', sexo: 'H' },
    { nombre: 'Laura', apellido: 'Martínez', curso: 'Geografía', edad: 21, correo: 'te@gmail.com', sexo: 'M' },
    { nombre: 'Javier', apellido: 'Pérez', curso: 'Matemáticas', edad: 22, correo: 'ti@gmail.com', sexo: 'H' },
    { nombre: 'Marina', apellido: 'García', curso: 'Física', edad: 23, correo: 'to@gmail.com', sexo: 'M' },
    { nombre: 'Ricardo', apellido: 'Jiménez', curso: 'Química', edad: 24, correo: 'tu@gmail.com', sexo: 'H' },
    { nombre: 'Sara' }
]);


//* Ordenar por nombre de forma ascendente
db.estudiantes.find().sort({ nombre: 1 });
//* Ordenar por nombre de forma descendente
db.estudiantes.find().sort({ nombre: -1 });

db.estudiantes.find().sort({ nombre: 1, apellido: 1 });

//* --- PROYECCION --- (filtrar los campos que deseo del documento o docs solicitados)
//* Proyección. Es cuando se seleccionan los campos que se desean mostrar
db.estudiantes.find({}, { nombre: 1, apellido: 1 });

db.estudiantes.find({}, { nombre: 0});

//* Saltar los primeros 2 documentos
db.estudiantes.find().skip(2);

//* --- LIMIT ---
//* Limitar a 3 documentos
db.estudiantes.find().limit(3);

```



### OPERADORES

```javascript
//* Operador $eq
db.estudiantes.find({ edad: { $eq: 20 } }); // ===

//* Operador $gt
db.estudiantes.find({ edad: { $gt: 20 } }); //  <

//* Operador $gte
db.estudiantes.find({ edad: { $gte: 20 } }); // <=

//* Operador $lt
db.estudiantes.find({ edad: { $lt: 20 } });

//* Operador $lte
db.estudiantes.find({ edad: { $lte: 20 } });

//* Operador $ne
db.estudiantes.find({ edad: { $ne: 20 } }); // !=

//* Operador $in
db.estudiantes.find({ edad: { $in: [20, 21] } }); // -> dame todos los estudiantes if(edad === 20 || edad ===21)

//* Operador $nin
db.estudiantes.find({ edad: { $nin: [20, 21] } });

//* Operador $or
db.estudiantes.find({ $or: [{ edad: 20 }, { edad: 21 }] });

//* Operador $and
db.estudiantes.find({ $and: [{ edad: 20 }, { sexo: 'H' }] });

//* Operador $not
db.estudiantes.find({ edad: { $not: { $eq: 20 } } });

//* Operador $nor
db.estudiantes.find({ $nor: [{ edad: 20 }, { edad: 21 }] });
// este operador devuelve los documentos que no cumplen con ninguna de las condiciones

//* Operador $exists
db.estudiantes.find({ correo: { $exists: true } });
// devuelve los documentos que tienen el campo correo

//* Operador $type
db.estudiantes.find({ edad: { $type: 'number' } });
// devuelve los documentos que tienen el campo edad de tipo number

//* Operador $regex
db.estudiantes.find({ nombre: { $regex: '^J' } });
// devuelve los documentos cuyo nombre empieza con J

//* Operador $text
db.estudiantes.find({ $text: { $search: 'Matemáticas' } });
// devuelve los documentos que contienen la palabra Matemáticas

//* Operador $where
db.estudiantes.find({ $where: 'this.edad > 20' });
// devuelve los documentos cuya edad es mayor a 20

//* Operador $elemMatch
db.estudiantes.find({ cursos: { $elemMatch: { $eq: 'Matemáticas' } } });
// devuelve los documentos que tienen el curso Matemáticas en el array cursos

//* Operador $size
db.estudiantes.find({ cursos: { $size: 2 } });
// devuelve los documentos que tienen 2 elementos en el array cursos

//* Operador $all
db.estudiantes.find({ cursos: { $all: ['Matemáticas', 'Física'] } });
// devuelve los documentos que tienen los cursos Matemáticas y Física en el array cursos
// este all es similar al operador and

//* Operador $mod
db.estudiantes.find({ edad: { $mod: [2, 0] } });
// devuelve los documentos cuya edad es divisible por 2


//* --- CONTIENE (sub-string) ---
//* Operador tipo ILIKE (case insensitive) en MongoDB, es $regex
db.estudiantes.find({ nombre: { $regex: 'ana', $options: 'i' } });
// devuelve los documentos cuyo nombre contiene ana, sin importar si es mayúscula o minúscula
// y $options: 'i' es para que sea case insensitive, ya que por defecto es case sensitive
```


## PROYECCIONES - Filtrar los campos que deseamos ver de la colección

```javascript
//* Proyección. Es cuando se seleccionan los campos que se desean mostrar
db.estudiantes.find({}, { nombre: 1, apellido: 1 });

//* Proyección excluyendo el campo _id
db.estudiantes.find({}, { nombre: 1, apellido: 1, _id: 0 });

//* Proyección excluyendo el campo name
db.estudiantes.find({}, { name: 0 });

```




# CRUD
## UPDATE
Las operaciones Update se pueden realizar de dos maneras: Actualizar un documento, o actualizar múltiples documentos. 
db.collection.updateOne(query,update,option)
query: sirve para filtrar qué elementos actualizar (usa los filtros iguales al find)
update: Apartado para indicar qué actualizar de los documentos que cumplen con el filtro. Update tiene sus propios operadores como $set, $unset, $inc, $rename, $mul, $min, $max
option: Opciones a tomar en cuenta para la actualización (como upsert, que inserta el valor en caso de que el documento a actualizar ni siquiera exista).

* UPDATE tiene 2 patas -> 1° a quien edito? ID  - 2° que editamos de ello?
```js
db.estudiantes.updateOne({ nombre: 'Sara' }, { $set: { apellido: 'Gómez', curso: 'Biología', edad: 25, correo: 'ne@gmail.com', sexo: 'M' } });

db.estudiantes.updateMany({ edad: 20 }, { $set: { edad: 101 } });

//* Actualizar un documento con $inc
db.estudiantes.updateOne({ nombre: 'Sara' }, { $inc: { edad: 1 } });
// Incrementa la edad de Sara en 1


//* ¿???? Modificamos el nombre de las KEY
//* Actualizar un documento con $rename
db.estudiantes.updateOne({ nombre: 'Sara' }, { $rename: { correo: 'email' } });
// Renombra el campo correo a email

db.estudiantes.updateOne({_id: ObjectId("68bf7baf5189e384a0228fb6")}, {$set: { curso: "Ingeniería" },});

//* Actualizar un documento con $unset
db.estudiantes.updateOne({ nombre: 'Sara' }, { $unset: { email: '' } });
// Elimina el campo email

//* Actualizar un documento con $min
db.estudiantes.updateOne({ nombre: 'Sara' }, { $min: { edad: 18 } });
// Si la edad de Sara es menor a 18, la actualiza a 18

```


## DELETE

Nuestra última operación es para eliminar datos, si bien hay muchas variantes de una eliminación, sólo veremos las dos principales.

db.collection.deleteOne({key:val}) : Elimina sólo el primer elemento que cumpla con el criterio, se usa principalmente para encontrar identificadores específicos. Se recomienda no utilizar si somos conscientes de que el valor a buscar no es repetido.
db.collection.deleteMany({key:val}) :  Elimina todos los documentos que cumplan con el criterio, se usa cuando sabemos que más de un valor va a contar con ese valor y necesitamos hacer una limpieza general.

```javascript

db.estudiantes.deleteOne({ _id: ObjectId('432423523534') });  // <---
//* Eliminar un documento DELETE ONE con una buena condición ID - EMAIL - DNI
db.estudiantes.deleteOne({ nombre: 'Sara' }); // elimina uno al primero que encuentre

//* Eliminar múltiples documentos  - NUNCA - si o si con condición
db.estudiantes.deleteMany({ sexo: 'M' });

//* Eliminar todos los documentos
db.estudiantes.deleteMany({});

//* Eliminar una colección
db.estudiantes.drop();
```

## DELETE SOFT - logico

db.estudiantes.updateOne({ nombre: 'Sara' }, { $min: { edad: 18 } });

_id
68bf7b035189e384a0228fb5
nombre
"Sara"
edad
25
curso
"Biología"
correo
"ne@gmail.com"
apellido
"Gómez"
sexo
"M"
deleted false