// ** exp.

let base = 2;
let exponente = 4;
console.log(base ** exponente);

// Math.pow(base, exponente)
console.log(Math.pow(base, exponente));

// Includes -> BOOL
let lista = [2, 6, 2, 87, "pepe"];

const result = lista.includes("pepe"); //
console.log(result);

function myIncludes(list, element) {
  const result_bool = false;
  for (let index = 0; index < list.length; index++) {
    if (list[index] === element) {
      result_bool = true;
      return result_bool;
    }
  }
  return result_bool;
}

//----- startsWith()
const saludo = "Hola, ¿cómo estás?";
console.log(saludo.startsWith("Hola, "));
//----- endsWith()
const despedida = "¡Nos vemos pronto!";
console.log(despedida.endsWith("nto!"));
