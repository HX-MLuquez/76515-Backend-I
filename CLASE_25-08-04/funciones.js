//* Ejemplos de funciones Promesas
var miPromesaSuma = new Promise(function (resolve, reject) {});

const suma = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación innecesaria");
    } else if (a + b < 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    } else {
      resolve(a + b);
    }
  });
};
const resta = (a,b)=> a-b

console.log(miPromesaSuma);
const resSuma = suma(2, 4);
console.log(resSuma);

const listita = [1, 2, 3, 4, 5];

const newList = listita.map((e) => {
  if (e > 3) {
    return e;
  } else {
    return e * 2;
  }
});

console.log(newList);

//* Vamos a editar listita usando el foreach

listita.forEach((e, i) => {
  if (e === 2) {
    listita[i] = "jujuuju";
  }
});

console.log(listita);

const productos = [
  { id: 1, nombre: "tv", precio: 12 },
  { id: 2, nombre: "celu", precio: 132 },
  { id: 4, nombre: "ventilador", precio: 142 },
];

const newListProducts = productos.map((e)=>{
  return {
    nombre: e.nombre
  }
})
console.log(newListProducts);

module.exports = {
  suma,
  resta
}