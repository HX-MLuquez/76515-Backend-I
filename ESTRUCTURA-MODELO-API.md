# Estructura de carpetas para un API REST

## Modelo a seguir

```bash
project/
│
├── src/
│   ├── config/
|   |   ├── config.js
│   │   └── env.js      # Llama a los servicios y responde a la API
│   ├── controllers/
│   │   └── userController.js      # Llama a los servicios y responde a la API
│   ├── services/
│   │   └── userService.js         # Contiene la lógica como User.getAll()
│   ├── models/
│   │   └── user.js                # Define el modelo Sequelize
│   ├── routes/
│   │   └── userRoutes.js          # Define las rutas /users, etc.
│   ├── db/
│   │   └── index.js               # Configura Sequelize y conecta con la DB
│   └── app.js                     # Configura Express y middlewares
│
└── index.js                      # Inicia el servidor (app.listen)
```

En una API REST ya sea con tech MERN o PERN

---

### Estructura común del proyecto

```bash
project/
│
├── public/
├── src/
|   ├── managers/  - data-access/ -  data-access-object/ o dao/ - repositories/ - o en los mismos services/
│   |   └── userManager.js
│   ├── config/
│   │   ├── environment.js          # Variables de entorno
│   │   ├── socket.js               # Configuración de sockets
│   │   └── config.js               # Configuración de la app
│   ├── controllers/
│   │   └── userController.js      # Llama a los servicios y responde a la API
│   ├── services/
│   │   └── userService.js         # Contiene la lógica como User.getAll()
│   ├── models/
│   │   └── user.js                # Define el modelo Sequelize
│   ├── routes/
|   |   ├── index.js               # Define las rutas principales
│   │   └── userRoutes.js          # Define las rutas /users, etc.
│   ├── db/
│   │   └── index.js               # Configura Sequelize y conecta con la DB
│   └── app.js                     # Configura Express y middlewares
│
└── server.js                      # Inicia el servidor (app.listen)
```

---

### `services/`

Es parte de la **lógica de negocio** (capa intermedia) entre los controladores y la base de datos. Esto permite:

- Separar responsabilidades
- Hacer el código más mantenible y testeable
- Reutilizar lógica en varios controladores

---

---

## Managers

- Para separar **la lógica de acceso a datos** (consultas, inserciones, etc.) de la **lógica de negocio** (validaciones, reglas de aplicación).
- Para evitar que los servicios o controladores interactúen directamente con Sequelize.

---

### ✅ Carpetas de un proyecto modelo

| Carpeta         | Propósito típico                                                 |
| --------------- | ---------------------------------------------------------------- |
| `services/`     | Lógica de negocio (usa modelos/managers, puede contener reglas)  |
| `managers/`     | Lógica de acceso directo a datos (consultas puras con modelos)   |
| `repositories/` | Similar a `managers`, más común en apps con patrón DDD           |
| `data-access/`  | Más explícito, útil si hay múltiples fuentes de datos            |
| `dao/`          | Data Access Object, patrón para separar lógica de acceso a datos |
| `controllers/`  | Manejo de peticiones HTTP, llama a servicios/managers            |
| `models/`       | Definición de modelos de datos (Sequelize, Mongoose, etc.)       |
| `routes/`       | Definición de rutas y endpoints                                  |
| `config/`       | Configuración de la aplicación (variables de entorno, etc.)      |
| `db/`           | Configuración de la base de datos (conexión, inicialización)     |
| `app.js`        | Configuración de Express y middlewares                           |
| `server.js`     | Punto de entrada del servidor (app.listen)                       |

En base a esto, la estructura de carpetas puede variar según las necesidades del proyecto y las preferencias del equipo de desarrollo.

Una estructura comúnmente usada en proyectos Node.js con Express y Sequelize podría ser:

```bash
src/
├── config/
│   ├── config.js
│   └── env.js
├── controllers/
│   └── userController.js
├── services/
│   └── userService.js
├── models/
│   └── user.js
├── routes/
│   └── userRoutes.js
├── db/
│   └── index.js
└── app.js
```
Y una estructura comúnmente usada en proyectos Node.js con Express y Mongoose, y usando `data-access-object/`

```bash
src/
├── data-access-object/ # Donde data-access-object es un patrón de diseño que separa la lógica de acceso a datos de la lógica de negocio. Y data-access-object reemplaza a managers/ o repositories/
│   └── userDao.js
├── config/
│   ├── config.js
│   └── env.js
├── controllers/
│   └── userController.js
├── services/
│   └── userService.js
├── models/
│   └── user.js
├── routes/
│   └── userRoutes.js
├── db/
│   └── index.js
└── app.js
```

### Ejemplo usando `managers/`

**Estructura:**

```bash
src/
├── managers/
│   └── userManager.js
├── services/
│   └── userService.js
├── controllers/
│   └── userController.js
```

---


# Try/Catch

En una API REST con la stack MERN (MongoDB, Express, React, Node.js), el uso de `try...catch` en el backend (Node.js + Express) es fundamental para **manejar errores de forma controlada**. 

### Recomendaciones 

* ✅ Usa `try...catch` en rutas o controladores que interactúan con recursos externos o críticos.
* ✅ Usa middlewares de error para evitar duplicar lógica de manejo de errores.
* ✅ Lanza errores con `throw` y captura con `catch` cuando quieres abortar el flujo.
* ❌ No pongas `try...catch` por poner; no mejora el rendimiento ni la seguridad si lo haces sin propósito.
* ❌ Si una función sólo ejecuta lógica síncrona simple (como formatear una fecha, validar un tipo de dato), no es necesario.


---

