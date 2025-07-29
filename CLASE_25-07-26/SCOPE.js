// Ejemplo de Hoisting y Scope

// Hoisting con var
console.log("--- Hoisting con var ---");
console.log(algo); // undefined (hoisted, pero no inicializado)
var algo = 10;
console.log(algo); // 10



// Hoisting con let y const
console.log("--- Hoisting con let y const ---");


// Scope de var, let y const

// var tiene scope global o de función
console.log("--- Scope de var ---");



// let y const tienen scope de bloque
console.log("--- Scope de let y const ---");


// Uso de var en el scope global
var globalVar = "Global var";
console.log(globalVar); // 'Global var'

// Uso de let y const en el scope global
let globalLet = "Global let";
const globalConst = "Global const";
console.log(globalLet); // 'Global let'
console.log(globalConst); // 'Global const'
