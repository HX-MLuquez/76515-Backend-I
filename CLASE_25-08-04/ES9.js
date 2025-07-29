//* ... SPREAD  REST



//* REST - RESTO

const listita = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a,b, ...resto] = listita
console.log(a)
console.log(b)

console.log(resto)/* [3, 4, 5, 6, 7, 8, 9] */

const [...resttito] = listita
// ===
const resttitoB = [...listita]

const copiarAsiNoma = listita
listita.push("EEEEEE")
console.log(resttito)
console.log(resttitoB)
console.log(copiarAsiNoma)
// Destructuring


const persona = {
  nombre: "Dilma",
  edad: 87,
  id: 21,
};

const { id, ...restoPersona } = persona;
console.log(id);
console.log(restoPersona);

const clonarPersona = {...persona}



const lista = [ 32, "ww", 12, 11]

const copy1 = lista

const copy2 = [...lista]