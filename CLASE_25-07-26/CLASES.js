//* CLASES

var nombre = "Marta";

const personaObjeto = {
  //* Esta es la data a moldear
  nombre: "Pepe",
  edad: 21,
  peso: 87,
  //* Acá tenemos los métodos que van a interactuar a la data
  getNombre: function () {
    console.log("Soy " + this.nombre); // Soy Pepe
  },
};

personaObjeto.getNombre();

//* Es una plantilla que tiene datos y funciones (métodos) a fines de esos datos

class Persona {
  //* Esta es la data a moldear
  constructor(nombre, edad = 18) {
    this.nombre = nombre;
    this.edad = edad;
  }
  //* Acá tenemos los métodos que van a interactuar a la data
  getNombre() {
    return "hi hi hi " + this.nombre;
  }
}

console.log(Persona); // [class Persona] <- func especial - clase
// console.log(Persona.getNombre());

const personaA = new Persona("Raul"); //* INSTANCIA - Aca ejecutamos la copia

console.log(personaA); // Persona { nombre: 'Raul' }

const personaB = new Persona("Ana"); //* INSTANCIA - Aca ejecutamos la copia

console.log(personaB); // Persona { nombre: 'Ana' }

const personaC = new Persona("Pedri", 22); //* INSTANCIA - Aca ejecutamos la copia

console.log(personaC); // Persona { nombre: 'Pedri' }
console.log(personaC.getNombre()); // hi hi hi Pedri