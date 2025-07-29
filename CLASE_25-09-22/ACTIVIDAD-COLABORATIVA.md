# ACTIVIDAD COLABORATIVA

## Consigna
Se hará una revisión de un conjunto de schemas. Analizar e identificar las propiedades de un documento y definir en cuáles deberíamos utilizar una indexación. La decisión debe ser tomada según el contexto de cada Schema. Justificar en cada caso por qué se tomó dicho índice como una posible opción. Recuerda que las respuestas de esta actividad pueden llegar a ser subjetivas, según la justificación que brindemos para cada caso.

**Nota**: Puede haber más de un índice por documento.

---

### Contexto 1: Schema de estudiante de un curso en específico

```js
{
  first_name: String,
  last_name: String,
  email: String,
  telephone: String,
  age: Number,
  grade: Number,
  gender: String,
  address: String
}
```

#### **Propuesta de Indexación:**

1. ... ...

---

### Contexto 2: Schema de usuario de una aplicación de entregas y envíos

```js
{
  first_name: String,
  last_name: String,
  email: String,
  telephone: String,
  age: Number,
  gender: String,
  address: String,
  postal_code: String
}
```

#### **Propuesta de Indexación:**

1. ... ...

---

### Contexto 3: Schema de ticket de compra generado desde un ecommerce

```js
{
  buyer_id : ObjectId,
  total_amount: Number,
  products: Array,
  destination_address: String,
  destination_postal_code: String,
  comments: String
}
```

#### **Propuesta de Indexación:**

1. ... ...

---

### Contexto 4: Schema de un libro correspondiente a un negocio de librería

```js
{
  title: String,
  description: String,
  price: Number,
  reviews: Array,
  rating: Number,
  images: Array,
  author: ObjectId,
  num_of_pages: Number
}
```

#### **Propuesta de Indexación:**

1. ... ...



