//* Function Callback

function sumar(a, b) {
  return a + b;
}

sumar.saludar = () => {
  return "hi";
};
sumar.contador = 101;
console.log(sumar);
console.log(sumar.saludar());

function mult(a, b) {
  return a * b;
}

function calculo(a, b, c, cbSumar, cbMult) {
  const resultA = cbMult(a, b);
  const resultFinal = cbSumar(resultA, c);
  return resultFinal;
}

console.log(calculo(2,4,7, sumar, mult))
