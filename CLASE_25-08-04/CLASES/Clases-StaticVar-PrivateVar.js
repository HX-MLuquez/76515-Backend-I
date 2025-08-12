//* CLASES en JS

// STATIC VARS Y STATIC METHODS

// Las variables y métodos estáticos son aquellos que pertenecen a la clase en sí misma, en lugar de a una instancia específica de la clase.
// Esto significa que se pueden acceder directamente a través de la clase, sin necesidad de crear una instancia de la clase.

// Las variables y métodos estáticos se definen utilizando la palabra clave static antes del nombre de la variable o método.

// Esto permite que sean compartidos por todas las instancias de la clase y se pueden acceder directamente a través de la clase, sin necesidad de crear una instancia de la clase.
// Esto es útil para definir constantes o funciones que no dependen de los datos de una instancia específica de la clase.

// function ProductoM(nombre) {
//   this.nombre = nombre;
// }

class Producto {
  static IVA = 0.21; // Variable estática (constante) que representa el IVA
  static contador = 0; // Variable estática que cuenta el número de instancias creadas

  constructor(nombre, precio = 101) {
    this.nombre = nombre; // Propiedad de instancia
    this.precio = precio; // Propiedad de instancia
    Producto.contador++; // Incrementa el contador cada vez que se crea una nueva instancia
  }

  // Método estático que devuelve el IVA
  static getIVA() {
    return Producto.IVA; // Acceso a la variable estática IVA
  }

  // Método  No estático que devuelve el contador de instancias creadas
  getContador() {
    return Producto.contador; // Acceso a la variable estática contador
  }
  incrementContador() {
    Producto.contador++;
    return "OK";
  }
}

// Crear instancias de la clase Producto
const producto1 = new Producto("Producto 1", 100); // Crea una nueva instancia de Producto
const producto2 = new Producto("Producto 2", 200); // Crea otra instancia de Producto
const producto3 = new Producto("Producto 3");
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(Producto.contador);
console.log(producto1.getContador());
console.log(producto1.incrementContador());
console.log(producto3);

console.log(Producto.IVA);
console.log(Producto.contador);
console.log(producto3.getContador());
console.log(Producto.getIVA());

//---------------------------------------------------
//---------------------------------------------------

//* Variables Privadas
// Para crear variables privadas en JavaScript, se utiliza el # (símbolo de número) antes del nombre de la variable.
// Esto hace que la variable sea privada y no se pueda acceder desde fuera de la clase.
// Las variables privadas son útiles para encapsular datos y proteger la información sensible dentro de una clase.
// Esto significa que no se pueden acceder directamente desde fuera de la clase, lo que ayuda a mantener la integridad de los datos y evita el acceso no autorizado.

class Persona {
  //* Es necesario declarar los campos privados con # fuera del constructor.
  #dni; // Variable privada
  #email; // Variable privada
  // var comun a todas las instancias IVA = 9
  static IVA = 0.21;
  constructor(dni, email, nombre, apellido, edad, iva = 0.21) {
    this.#dni = dni; //* y Asignación de valor a la variable privada
    this.#email = email; // Asignación de valor a la variable privada
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    Persona.IVA = iva;
  }
  getIVA(){
    return Persona.IVA
  }
  // Método para obtener el DNI
  getDni() {
    return this.#dni.slice(3, 5); // Acceso a la variable privada
  }
  // Método para obtener el email
  getEmail() {
    return this.#email; // Acceso a la variable privada
  }
  // Método para obtener el nombre completo
  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`; // Concatenación de nombre y apellido
  }
  getInfo() {
    return `Nombre: ${this.getNombreCompleto()}, DNI: ${this.getDni()}, Email: ${this.getEmail()}`; // Concatenación de información
  }
  mostrarInfo() {
    console.log(this.getInfo()); // Llamada al método para obtener la información completa
  }
}

const user_1 = new Persona(
  "12345678",
  "pepe@gmail.com",
  "Pepe",
  "Gonzalez",
  25
);

// Mostrar la información de la persona
user_1.mostrarInfo(); // Llamada al método para mostrar la información
// Cambiar el DNI
user_1.mostrarInfo(); // Llamada al método para mostrar la información nuevamente

// Acceder a las variables NO privadas directamente
console.log(user_1.nombre); // Acceso a la variable pública nombre
console.log(user_1.apellido); // Acceso a la variable pública apellido
console.log("--a->", user_1.getIVA())
console.log("--b->", Persona.IVA)
// Acceder a las variables privadas directamente (esto generará un error)
// console.log(user_1.#dni);

// Crear una instancia de la clase Persona

const user_2 = new Persona(
  "22114455",
  "jose@gmail.com",
  "Jose",
  "Gonzalez",
  25,
  0.17
);
console.log("--c->", user_1.getIVA())
console.log("--d->", Persona.IVA = 32)
console.log("--e->", user_2.getIVA())

/*

class all STATIC    
Producto   ---->    


class Producto {
  static IVA = 0.21; // Variable estática (constante) que representa el IVA
  static contador = 0; // Variable estática que cuenta el número de instancias creadas
  static nombre = ""
  constructor(nombre) {
    Producto.nombre = nombre; 
  }
  static getIVA() {
    return Producto.IVA; // Acceso a la variable estática IVA
  }
  static getContador() {
    return Producto.contador; // Acceso a la variable estática contador
  }
  static incrementContador() {
    Producto.contador++;
    return "OK"
  }
}

module.exports = Producto 


import Producto

Producto.getContador
*/
