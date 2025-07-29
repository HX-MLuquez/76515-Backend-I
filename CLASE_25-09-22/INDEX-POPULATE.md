# MONGO DB - MONGOOSE (ODM) - INDEXS Y POPULATIONS

Vamos a desarrollar Indexs y Populations en MongoDB con Mongoose.

## INDEXS
## Teoría de Indexación en MongoDB

La indexación es un recurso utilizado en MongoDB para hacer consultas mucho más rápidas. Nos permite tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la colección documento por documento hasta encontrar dicho valor.

El índice se asocia a un atributo del documento y permite que las búsquedas se hagan desde puntos específicos, evitando el recorrido completo de la colección.

## ¿Qué es la indexación?

Hasta este momento, nuestras consultas no repercuten en performance debido a que los datos que consultamos son pequeños, pero ¿qué pasaría si comenzamos a incrementar el número de datos en nuestra base? ¿Qué tanto afectan estas búsquedas?

Prever un buen plan de indexación evitará problemas de lentitud en las consultas y se considera una práctica necesaria a nivel enterprise al momento de configurar los schemas de nuestros modelos.


### Tipos de Índices

- **Índices Compuestos (Compound):** Se utiliza para indexar más de un campo y definir el orden con `1` para ascendente y `-1` para descendente.

```javascript
userSchema.index({ first_name: 1, last_name: -1 });
```

- **Índice Multikey:** Se utiliza para indexar valores dentro de un array.

- **Índice de Texto (Text):** Se utiliza para búsquedas basadas en palabras clave.

```javascript
userSchema.index({ description: 'text' });
```

- **Índice Geoespacial (Geospatial):** Almacena datos geoespaciales en dos coordenadas, utilizando una esfera 2D.




---

## Populations en Mongo

### ¿Qué es una Population?

Una **population** implica obtener un documento referenciado dentro de otro documento, con el fin de obtener ambos en una sola búsqueda. Consiste en almacenar el id de un documento, como propiedad de otro documento. A esto se le conoce como **“referencia”**.

**Populate** hace referencia a “poblar” de un id a un documento completo (similar a la referencia de una población humana).

## ¿Cómo obtener data dentro de la data?
Imagina una estructura anidada de documentos en MongoDB:

1 doc → 2 docs → 4 docs → 5 docs → ...

## Funcionamiento

### 1. Insertar un documento de tipo usuario
Cuando insertamos un usuario que adopta mascotas, este se crea con un `ObjectId`:

```json
{
  "name": "Mauricio",
  "pets": [],
  "_id": ObjectId("aaaaaaaa")
}
```

### 2. Crear documentos de tipo mascota
Supongamos que ahora creamos dos mascotas, las cuales también tendrán su `ObjectId`:

```json
{
  "name": "Orejitas",
  "_id": ObjectId("bbbbbbbb")
}
```

```json
{
  "name": "Patitas",
  "_id": ObjectId("ccccccccc")
}
```

### 3. Agregar las mascotas al usuario
Ahora, si el usuario adopta las dos mascotas, no agregamos todo el documento, sino solo el `ObjectId` como referencia:

```json
{
  "name": "Mauricio",
  "pets": [
    { "pet": ObjectId("bbbbbbbb") },
    { "pet": ObjectId("ccccccccc") }
  ],
  "_id": ObjectId("aaaaaaaa")
}
```

### 4. Hacer una búsqueda con `populate`
Al buscar al usuario, podemos programarlo para que también obtenga las mascotas referenciadas. El resultado final será la combinación del documento usuario más los documentos de cada mascota.

## Populations en Mongoose

1. **populate** es un método de Mongoose. Hay que tener claro el nombre de la propiedad dentro del objeto y la referencia de la colección para hacer un `populate` efectivo.
2. No guardes directamente el valor a referenciar en el `_id`, usa otro nombre.


## ¡Importante!
Una population es un puente entre dos documentos, como una relación unidireccional. **Nunca hagas una population bidireccional** ya que causaría un ciclo infinito de referencias entre documentos.

## Configurar `populate` por defecto con Middlewares

Mongoose nos permite definir middlewares para automatizar operaciones recurrentes. Podemos agregar un middleware para realizar el `populate` de manera automática antes de devolver el resultado de una operación `find`.

### Ejemplo de uso de middleware `pre`

```javascript
studentSchema.pre('find', function() {
  this.populate('courses.course');
});

const Student = mongoose.model('Student', studentSchema);
```

Ahora, cada vez que se ejecute una búsqueda con `find`, automáticamente se poblarán los cursos del estudiante sin necesidad de llamar a `populate` explícitamente:

```javascript
const autoPopulatedStudent = await Student.findById(student._id);
console.log('Student with auto-populated courses:', autoPopulatedStudent);
```

Este middleware se ejecuta antes de devolver la data, haciendo que el `populate` ocurra sin esfuerzo adicional en cada búsqueda.
