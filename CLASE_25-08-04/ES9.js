//* ... SPREAD  REST

const objA = {
  nombre: "www",
  edad: 3,
  objetoAnidado: { a: 2 },
};

const objeNew = { ...objA };

//* REST - RESTO

const listita = [3, 4, 5, 8, 9];
const [var1, var2, var3, var4, var5] = listita;

const [a, b, ...resto] = listita;
console.log(a);
console.log(b);

console.log(resto); /* [5, 8, 9] */

const [...resttito] = listita;
// ===
const resttitoB = [...listita];

const copiarAsiNoma = listita;
listita.push("EEEEEE");
console.log(resttito);
console.log(resttitoB);
console.log(copiarAsiNoma);
// Destructuring

const persona = {
  nombre: "Dilma",
  edad: 87,
  id: 21,
};
const {nombre} = persona // destructuring
const miNombre = persona.nombre

const { id, ...restoPersona } = persona;
console.log(id);
console.log(restoPersona);

const clonarPersona = { ...persona };

const lista = [32, "ww", 12, 11];

const copy1 = lista;

const copy2 = [...lista];

/*


*/
