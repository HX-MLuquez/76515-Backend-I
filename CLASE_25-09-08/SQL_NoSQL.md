### Bases de Datos Relacionales (SQL) Lenguaje estructurado en consultas

- **Modelo**: Relacional
- **Estructura**: Tablas con filas y columnas.
- **Esquema**: Rígido y predefinido.
- **Consistencia**: ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad).
- **Lenguaje**: SQL (Structured Query Language).
- **Uso Típico**: Aplicaciones empresariales, transacciones financieras.
- **Ejemplos**: MySQL, PostgreSQL, Oracle, SQL Server.

### Bases de Datos No Relacionales (NoSQL)

- **Modelos**: Documentos, clave-valor, grafos, columnares.
- **Estructura**: Flexible y adaptable.
- **Esquema**: Dinámico y no predefinido.
- **Consistencia**: BASE (Básicamente Disponible, Estado Suave, Eventualmente Consistente).
- **Lenguaje**: Varía según el tipo (no necesariamente SQL).
- **Uso Típico**: Big Data, análisis en tiempo real, aplicaciones web escalables.
- **Ejemplos**: MongoDB (documentos), Redis (clave-valor), Neo4j (grafos), Cassandra (columnares).

### Ejemplos de Consultas en SQL y NoSQL

#### SQL (PostgreSQL)

```sql
-- Crear tabla
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- Insertar datos
INSERT INTO users (name, email) VALUES ('Jane Doe', 'jane@example.com');

-- Consultar datos
SELECT * FROM users WHERE email = 'jane@example.com';
```

#### NoSQL (MongoDB)

```javascript
// Insertar documento
db.users.insertOne({
    name: "Jane Doe",
    email: "jane@example.com"
});

// Consultar documento
db.users.find({ email: "jane@example.com" });
```


---


Aunque las bases de datos NoSQL se etiquetan comúnmente como "no relacionales", esto no significa que no puedan manejar relaciones entre datos. La principal diferencia radica en cómo gestionan y representan esas relaciones en comparación con las bases de datos SQL tradicionales. Aquí hay un análisis más detallado sobre este tema:

### Bases de Datos Relacionales (SQL)

- **Modelo Relacional**: Utilizan un modelo basado en tablas donde las relaciones entre datos se manejan mediante claves primarias y foráneas.
- **Integridad Referencial**: Las relaciones son explícitas y mantenidas por el sistema de gestión de bases de datos (DBMS) mediante restricciones de integridad referencial.
- **Consultas**: Las consultas SQL permiten unir tablas (joins) para relacionar datos de múltiples tablas.

### Bases de Datos No Relacionales (NoSQL)

- **Flexibilidad de Modelado**: No siguen un modelo relacional estricto, pero pueden representar relaciones de diferentes maneras.
- **Modelos de Datos**:
  - **Documentos**: (ej., MongoDB) Pueden embeder documentos dentro de otros, permitiendo almacenar relaciones de manera anidada.
  - **Clave-Valor**: (ej., Redis) Almacenan pares clave-valor simples, pero las aplicaciones pueden gestionar relaciones externamente.
  - **Grafos**: (ej., Neo4j) Modelan explícitamente las relaciones entre nodos, siendo ideales para datos altamente interconectados.
  - **Columnares**: (ej., Cassandra) Organizan datos por columnas y pueden gestionar relaciones a través de esquemas más flexibles.
- **Gestión de Relaciones**:
  - **Anidación**: Datos relacionados se pueden embeder dentro de un solo documento.
  - **Referencias**: Utilizan identificadores para referenciar documentos relacionados, gestionando las relaciones a nivel de aplicación.
  - **Modelado de Grafos**: Las bases de datos de grafos representan y gestionan las relaciones de manera nativa.

### Ejemplos de Relaciones en Bases de Datos NoSQL

#### Documentos (MongoDB)

**Documento Anidado:**

```javascript
db.users.insertOne({
    name: "Alice",
    email: "alice@example.com",
    orders: [
        { order_id: 1, product: "Laptop", quantity: 1 },
        { order_id: 2, product: "Mouse", quantity: 2 }
    ]
});
```

**Referencias entre Documentos:**

```javascript
// Documento de usuario
db.users.insertOne({
    _id: ObjectId("60c72b2f9f1b2c001c8d4e20"),
    name: "Bob",
    email: "bob@example.com"
});

// Documento de pedido
db.orders.insertOne({
    user_id: ObjectId("60c72b2f9f1b2c001c8d4e20"),
    product: "Keyboard",
    quantity: 1
});
```

#### Grafos (Neo4j)

```cypher
CREATE (a:Person {name: "Charlie"})
CREATE (b:Person {name: "Dave"})
CREATE (a)-[:FRIEND]->(b);
```

### Conclusión

Aunque las bases de datos NoSQL no gestionan las relaciones de la misma manera que las bases de datos SQL, pueden representar y manejar relaciones de maneras que se adaptan a sus modelos de datos específicos. Por lo tanto, es más preciso decir que las bases de datos NoSQL gestionan las relaciones de forma diferente, no que carezcan de ellas.



```js
users
{
    _id: ObjectId("111"),
    name: "Bob",
    email: "bob@example.com"
}
{
    _id: ObjectId("224"),
    name: "Pep",
    email: "pep@example.com"
}
{
    _id: ObjectId("321"),
    name: "Vim",
    email: "vim@example.com"
}

groups
{
    _id: ObjectId("2021"),
    name: "Los leones",
    users: [{userId:111},{userId:224}]
}

const result = groups.findOne(2021) => {name: "Los leones",users: [{userId:111},{userId:224}]}

result.users.map((user)=>{
    const myUser = users.finOne(user.userId)
})

Buscamos que desde el navegador me llegue

Los leones

- Bob
- Pep


```