//* CLASES en JS

// STATIC VARS Y STATIC METHODS

// Las variables y métodos estáticos son aquellos que pertenecen a la clase en sí misma, en lugar de a una instancia específica de la clase.
// Esto significa que se pueden acceder directamente a través de la clase, sin necesidad de crear una instancia de la clase.

// Las variables y métodos estáticos se definen utilizando la palabra clave static antes del nombre de la variable o método.

// Esto permite que sean compartidos por todas las instancias de la clase y se pueden acceder directamente a través de la clase, sin necesidad de crear una instancia de la clase.
// Esto es útil para definir constantes o funciones que no dependen de los datos de una instancia específica de la clase.

class Producto {
  static IVA = 0.21; // Variable estática (constante) que representa el IVA
  static contador = 0; // Variable estática que cuenta el número de instancias creadas

  constructor(nombre, precio) {
    this.nombre = nombre; // Propiedad de instancia
    this.precio = precio; // Propiedad de instancia
    Producto.contador++; // Incrementa el contador cada vez que se crea una nueva instancia
  }

  // Método estático que devuelve el IVA
  static getIVA() {
    return Producto.IVA; // Acceso a la variable estática IVA
  }

  // Método estático que devuelve el contador de instancias creadas
  static getContador() {
    return Producto.contador; // Acceso a la variable estática contador
  }

  // Método de instancia que devuelve el precio total con IVA incluido
  getPrecioConIVA() {
    return this.precio * (1 + Producto.IVA); // Cálculo del precio con IVA
  }
}

// Crear instancias de la clase Producto

const producto1 = new Producto("Producto 1", 100); // Crea una nueva instancia de Producto
const producto2 = new Producto("Producto 2", 200); // Crea otra instancia de Producto

// Mostrar el precio de los productos con IVA incluido

console.log(
  `El precio de ${
    producto1.nombre
  } con IVA incluido es: $${producto1.getPrecioConIVA()}`
); // Llama al método de instancia para obtener el precio con IVA

console.log(
  `El precio de ${
    producto2.nombre
  } con IVA incluido es: $${producto2.getPrecioConIVA()}`
); // Llama al método de instancia para obtener el precio con IVA

// Mostrar el IVA y el contador de instancias creadas

console.log(`El IVA es: ${Producto.getIVA() * 100}%`); // Llama al método estático para obtener el IVA
console.log(`Se han creado ${Producto.getContador()} instancias de Producto`); // Llama al método estático para obtener el contador de instancias
