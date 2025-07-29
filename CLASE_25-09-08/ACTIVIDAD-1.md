show dbs

use escuela   crea y/o conecta a la db escuela

db.createCollection("alumnos")

db.alumnos.insertMany([
  { nombre: "Juan", apellido: "Pérez", curso: "Matemáticas", correo: "juan.perez@example.com" },
  { nombre: "María", apellido: "Gómez", curso: "Historia", correo: "maria.gomez@example.com" },
  { nombre: "Luis", apellido: "Martínez", curso: "Ciencias", correo: "luis.martinez@example.com" },
  { nombre: "Ana", apellido: "López", curso: "Literatura", correo: "ana.lopez@example.com" },
  { nombre: "Carlos", direccion: "soy un loco de los datos" }
])


db.alumnos.find()
db.alumnos.find().pretty()


db.alumnos.find().count()

db.alumnos.countDocuments()
db.alumnos.estimatedDocumentCount() 



Descanso de 10 min -> 21:59