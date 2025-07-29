function holis(){
    console.log("hiiiiiiii")
}

holis()

//* FUNCIONES

// Declaramos

function sumar(a,b){
    return a + b
}

// Expresiva

const multiplicar = function(a,b){
    return a * b 
}

// Arrow func - funciones flechas

const restar = (a,b)=> a-b // de manera implícita hace -> return a-b

const restarB = (a,b)=> {
    return a-b
}

console.log(restarB)
console.log(restarB(34,12)) 


restarB.otraCosa = "jujuuuu"
console.log(restarB) // [Function: restarB] { otraCosa: 'jujuuuu' }
// OBJETO -> { }  y esto [ ]   y esto function(){}
console.log(restarB.otraCosa)

const objetoObjeto = {
    nombre: "Pepe",
    edad: 32
}

console.log(objetoObjeto)

objetoObjeto.altura = 1 
console.log(objetoObjeto)


const objetoArray = ["001", "002"]
console.log(objetoArray)
objetoArray[0] = "casa"
console.log(objetoArray)

objetoArray[5] = "auto"
console.log(objetoArray)
/*
{
0: "casa",
1: "002",
2: undefined

etc...

}
*/