// console.log(global) // Object [global] 

var edad = 87;

let nombre = "Pepe";

const altura = 21;

edad = 12

nombre = "Juan"

// altura = 23 //! Assignment to constant variable.

function siEsViejo(value) {
  if (value > 85) {
    return "si es viejo saas" + nombre;
  } else {
    return "no es viejo bbbnbvd" + nombre;
  }
}

console.log(siEsViejo(edad))
