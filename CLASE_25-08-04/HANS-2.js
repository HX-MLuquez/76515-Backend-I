
// Función suma

var miPromesaSuma = new Promise(function (resolve, reject) {});


// Función resta

// Función multiplicación

// Función división

// Función asíncrona para realizar cálculos

var miPromesaSuma = new Promise(function (resolve, reject) {});
function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación innecesaria");
    } else if (a + b < 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    } else {
      resolve(a + b);
    }
  });
}
console.log(miPromesaSuma);
const resSuma = suma(2, 4);
console.log(resSuma);


// Ejecución de la función asíncrona
async function calculos() {
  try {
    const resSuma = await suma(2, 4);
    console.log(resSuma);
  } catch (error) {
    console.log(error);
  }
}
calculos()

