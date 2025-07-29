//* CLASES en JS

//* Variables Privadas
// Para crear variables privadas en JavaScript, se utiliza el # (símbolo de número) antes del nombre de la variable.
// Esto hace que la variable sea privada y no se pueda acceder desde fuera de la clase.
// Las variables privadas son útiles para encapsular datos y proteger la información sensible dentro de una clase.
// Esto significa que no se pueden acceder directamente desde fuera de la clase, lo que ayuda a mantener la integridad de los datos y evita el acceso no autorizado.

class Persona {
  #dni; // Variable privada
  #email; // Variable privada
  constructor(dni, email, nombre, apellido, edad) {
    this.#dni = dni; // Asignación de valor a la variable privada
    this.#email = email; // Asignación de valor a la variable privada
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  // Método para obtener el DNI
  getDni() {
    return this.#dni; // Acceso a la variable privada
  }
  // Método para obtener el email
  getEmail() {
    return this.#email; // Acceso a la variable privada
  }
  // Método para obtener el nombre completo
  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`; // Concatenación de nombre y apellido
  }
  // Método para obtener la información completa de la persona
  getInfo() {
    return `Nombre: ${this.getNombreCompleto()}, DNI: ${this.getDni()}, Email: ${this.getEmail()}`; // Concatenación de información
  }
  // Método para cambiar el DNI
  setDni(dni) {
    this.#dni = dni; // Asignación de nuevo valor a la variable privada
  }
  // Método para cambiar el nombre
  setNombre(nombre) {
    this.nombre = nombre; // Asignación de nuevo valor a la variable pública
  }
  // Método para mostrar la información de la persona
  mostrarInfo() {
    console.log(this.getInfo()); // Llamada al método para obtener la información completa
  }
}

// Crear una instancia de la clase Persona

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
user_1.setDni("87654321"); // Llamada al método para cambiar el DNI
// Cambiar el nombre con el método creado
user_1.setNombre("Solo Juan"); // Llamada al método para cambiar el nombre
// Mostrar la información de la persona nuevamente
user_1.mostrarInfo(); // Llamada al método para mostrar la información nuevamente

// Acceder a las variables NO privadas directamente
console.log(user_1.nombre); // Acceso a la variable pública nombre
console.log(user_1.apellido); // Acceso a la variable pública apellido

// Acceder a las variables privadas directamente (esto generará un error)
//! console.log(user_1.#dni); // Error: Cannot access private field #dni from outside the class <- dejar comentado para evitar errores

// Modificar el valor de las variables NO privadas directamente
user_1.nombre = "Juanitoooo"; // Modificación de la variable pública nombre
user_1.mostrarInfo(); // Llamada al método para mostrar la información nuevamente

// Intentar modificar el valor de las variables privadas directamente (esto generará un error)
//! user_1.#dni = "98765432"; // Error: Cannot access private field #dni from outside the class <- dejar comentado para evitar errores
user_1.mostrarInfo();
