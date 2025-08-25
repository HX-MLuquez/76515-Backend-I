const express = require('express');
const router = express.Router();

function generatePetListHtml(pets, title = "Lista de Mascotas") {
   return `
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <meta charset="UTF-8">
         <title>${title}</title>
         <style>
             body { font-family: sans-serif; padding: 2rem; background: #f9f9f9; }
             ul { list-style: none; padding: 0; }
             li { margin: 0.5rem 0; }
             a { display: inline-block; margin-top: 2rem; }
         </style>
     </head>
     <body>
         <h1>${title}</h1>
         <ul>
             ${pets.map(pet => `<li>${pet.name} - ${pet.age} años</li>`).join("")}
         </ul>
         <a href="/">Volver al formulario</a>
     </body>
     </html>
   `;
 };

const pets = [];

router.post('/', (req, res) => {
   console.log(req.body); // { name: 'Pomi', age: '2' }
   try {
       const { name, age } = req.body;
       if (!name || !age) {
           return res.status(400).json({ error: 'Faltan datos' });
       }
       const newPet = { name, age };
       pets.push(newPet);
       return res.status(200).send(generatePetListHtml(pets, "Mascota registrada correctamente"));
   }
   catch (error) {
       console.error(error);
       return res.status(500).json({ error: 'Error interno del servidor' });
   }
});


router.get('/all', (req, res) => {
   try {
       if (pets.length === 0) {
           return res.status(404).json({ message: 'No hay mascotas registradas' });
       }
       return res.status(200).send(generatePetListHtml(pets, "Lista de Mascotas"));
   }
   catch (error) {
       console.error(error);
       return res.status(500).json({ error: 'Error interno del servidor' });
   }
    
});

module.exports = router;
