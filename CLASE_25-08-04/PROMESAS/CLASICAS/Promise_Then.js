//* Promise and Then

//* La función Promise es un constructor que crea una nueva promesa.
//* new Promise es una función que recibe dos parámetros: resolve y reject.
//* .then() es un método que se utiliza para manejar el resultado de una promesa una vez que se ha resuelto o rechazado.
// (el .then() es una promesa en sí misma, por lo que se puede encadenar con otros .then() o .catch())

// new Promise((res, rej)=>{})
var miPromesa1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Bien bien bien");
    } else {
      reject(Error("Algo salió mal"));
    }
  }, 1000);
});
console.log(miPromesa1); // Promise { <pending> }

const vvvvv = miPromesa1
  .then((res) => {
    let result = res;
    console.log(res);
    if ("Bien bien bien" === res) {
      result = result + " jujuju";
    }
    return result;
  })
  .then((nono) => console.log(nono))
  .catch((error) => console.error(error));

  console.log(vvvvv) //  Promise { <pending> }
