const { sumar } = require("./utils");

const axios = require("axios");

//* Realizamos una peticion a una API para obtener datos - Ejemplo de una promesa que se resuelve con fetch
async function fetchData() {
  // async <- indica que la function va a ser una promesa
  try {
    const { data } = await axios(
      // await es una pause
      `https://akabab.github.io/starwars-api/api/all.json`
    );
    console.log("01", data[0]);
    return data[0];
  } catch (error) {
    console.log("01 error", error);
  }
}
const resulDATA = fetchData();
console.log("0111", resulDATA); // Promise { <pending> }

//* Realizamos una peticion a una API para obtener datos - Ejemplo de una promesa que se resuelve con AXIOS
async function myFuncion() {
  return "saludo";
}
console.log("02", myFuncion); // ->  Promise { <pending> }

//* Promise

var miPromesa = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Hola");
    } else {
      reject("chau");
    }
  }, 1000);
});

console.log("03 miPromesa: ", miPromesa); // Promise { <pending> }

//* .then(()=>{})   .catch(()=>{})
const respuetaPorFuera = miPromesa
  .then((value) => {
    console.log("04", value);
    return value + " " + "Mundo";
  })
  .then((value) => {
    console.log("05", value);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("06 respuetaPorFuera --> ", respuetaPorFuera);

const holis = async () => {
  try {
    const { data } = await axios(
      // await es una pause
      `https://akabab.github.io/starwars-api/api/all.json`
    );
  } catch (error) {
    console.log(error)
  }
};
