# Mongoose

- Validaciones
- Manejo de errores
- Proyecciones
- `sort`
- `skip`
- `limit`
- Index - índices
- Búsqueda `ilike`

---

### **Instalación de dependencias**

```sh
npm init -y
npm install express mongoose dotenv
```

---

### **Configuración del proyecto**

#### **1. Configurar variables de entorno en `.env`**

Crea un archivo `.env` con la URL de conexión a **MongoDB Atlas**:

```ini
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/mi_base
PORT=3000
```

---

### **2. Configurar Mongoose y Express**

#### **Archivo `server.js`**

```javascript
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar a MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas conectado"))
  .catch((err) => console.error("Error de conexión:", err));

// Rutas
app.use("/api/users", userRoutes);

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
```

---

### **3. Crear el Schema de Usuario con Validaciones**

#### **Archivo `models/user.model.js`**

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      // trim: true elimina espacios en blanco al principio y al final
    },
    apellido: {
      type: String,
      required: [true, "El apellido es obligatorio"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Email inválido"],
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
    },
    edad: {
      type: Number,
      min: [18, "Debe ser mayor de edad"],
      required: true,
    },
    dni: {
      type: String,
      unique: true,
      required: [true, "El DNI es obligatorio"],
      match: [/^\d{7,8}$/, "El DNI debe tener entre 7 y 8 dígitos"],
      // match con expresión regular para validar DNI aplica un criterio básico
    },
    curso: {
      type: String,
      enum: ["Backend", "Frontend", "Fullstack"],
      required: true,
    },
    nota: {
      type: Number,
      min: [0, "La nota mínima es 0"],
      max: [10, "La nota máxima es 10"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar rendimiento en búsquedas
userSchema.index({ nombre: 1 });
userSchema.index({ apellido: 1 });
userSchema.index({ email: 1 });
// email: 1 indica orden ascendente, -1 para descendente
// Al haber un índice en email, las búsquedas por email serán más rápidas y eficientes

const User = mongoose.model("User", userSchema);
module.exports = User;
```

---

### **4. Crear el CRUD en el Controlador**

#### **Archivo `controllers/user.controller.js`**

```javascript
const User = require("../models/user.model");

// Obtener todos los usuarios con paginación y filtros
const getUsers = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      page = 1,
      limit = 10,
      sort = "nombre",
    } = req.query;
    const query = {};

    // Agregar filtros solo si se pasan en la query
    if (nombre) query.nombre = { $regex: nombre, $options: "i" };
    if (apellido) query.apellido = { $regex: apellido, $options: "i" };

    const users = await User.find(query)
      .sort({ [sort]: 1 }) // Orden ascendente
      .skip((page - 1) * limit) // Saltar
      .limit(parseInt(limit)) // Limitar
      .select("-password"); // Excluir password

    // Obtener el total de usuarios que cumplen la consulta
    const totalUsers = await User.countDocuments(query);

    res.json({
      totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: parseInt(page),
      users,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    // "-password" excluye el campo password de la respuesta
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

// Crear usuario
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar usuario
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-password");
    // { new: true } devuelve el usuario actualizado
    // { runValidators: true } ejecuta las validaciones del Schema

    if (!updatedUser)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar usuario
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    // findByIdAndDelete elimina el usuario por ID
    // y deletedUser almacena el usuario eliminado

    if (!deletedUser)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
```

---

### **5. Configurar Rutas**

#### **Archivo `routes/user.routes.js`**

```javascript
const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
```

---

### **6. Ejecutar el Servidor**

Ejecuta el servidor con:

```sh
node server.js
```

O usa **nodemon**:

```sh
npm install -g nodemon
nodemon server.js
```

---

### **7. Probar Endpoints con Postman o CURL**

1. **Crear usuario**:

   ```json
   POST http://localhost:3000/api/users
   {
      "nombre": "Juan",
      "apellido": "Pérez",
      "email": "juan@gmail.com",
      "password": "123456",
      "edad": 25,
      "dni": "12345678",
      "curso": "Backend",
      "nota": 9
   }
   ```

2. **Obtener usuarios con búsqueda y paginación**:
   ```http
   GET http://localhost:3000/api/users?search=juan&page=1&limit=5&sort=apellido
   ```

---
