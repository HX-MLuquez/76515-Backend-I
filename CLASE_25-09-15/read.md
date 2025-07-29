# RESUMEN

- No SQL vs SQL
- Instalamos en nuestra machine MONGO + MONGO COMPASS (cli grafica)
- En No SQL iniciamos a practicar unos comandos - CRUD

## DELETE a como se hace en el desarrollo actual

### SOFT DELETE - BANEO

```javascript
db.estudiantes.updateOne(
  { _id: ObjectId("432423523534") },
  { $set: { active: false } }
);
```

---

## PROYECCIONES

                   query       PROYECCION

db.estudiantes.find({}, { nombre: 1, apellido: 1 });

db.estudiantes.find({}, { email: 0});

---

# REPASO - ESTRUCTURA de CARPETAS para una API REST con tech Node + Express + Mongo + Mongoose

```bash
api/
│
├── src/
│   │
│   ├── data-access-object/    # or managers/    or dao/
│   │   └── UserManager.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── services/
│   │   └── UserService.js
│   │
│   ├── controllers/
│   │   └── UserController.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   └── database/
│       └── connect.js
│
├── app.js
├── index.js
├── .env
└── package.json
```

```bash
FLOW

GET http://localhost:3000/api/users

- app.js
app.use("/api", routes);

- routes/index.js
router.use("/users", userRouter)

- routes/userRoutes.js
router.get("/", userController.getAllUsers);

- controllers/userController.js
class UserController {
  async getAllUsers(req, res) {

- services/userService.js
class UserService {
  async getAllUsers() {

- data-access-object/userDao.js

- models/user.model.js

- MongoDB - cloud

```

---

# MONGO + MONGOOSE

## MONGO DB - CLOUD - MONGO ATLAS

## MONGOOSE
