const { sumar } = require("./utils");

const axios = require("axios");

//* Realizamos una peticion a una API para obtener datos - Ejemplo de una promesa que se resuelve con fetch
async function fetchData() { // async <- indica que la function va a ser una promesa
  try {
    const { data } = await axios( // await es una pause
      `https://akabab.github.io/starwars-api/api/all.json`
    );
    console.log(data[0]);
  } catch (error) {
    console.log(error);
  }
}
fetchData()

//* Realizamos una peticion a una API para obtener datos - Ejemplo de una promesa que se resuelve con AXIOS
async function myFuncion() {
  return "saludo";
}
console.log(myFuncion); // ->  Promise { <pending> }

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

console.log("miPromesa: ", miPromesa); // Promise { <pending> }

//* .then(()=>{})   .catch(()=>{})
const respuetaPorFuera = miPromesa
  .then((value) => {
    console.log(value);
    return value + " " + "Mundo";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("respuetaPorFuera --> ", respuetaPorFuera);


const holis = async ()=>{
    const { data } = await axios( // await es una pause
        `https://akabab.github.io/starwars-api/api/all.json`
      ); 

}