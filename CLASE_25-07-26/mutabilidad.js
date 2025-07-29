//* MUTABILIDAD
// const edad = 5
// edad = 7

const objetoObjeto = {
    nombre: "Pepe",
    edad: 32
}

const copiaDe = objetoObjeto

const cloneDeZ = {...objetoObjeto}

console.log(objetoObjeto)

objetoObjeto.altura = 1 
copiaDe.edad = 349875938745
console.log(objetoObjeto)
console.log(copiaDe)
console.log(cloneDeZ)

objetoObjeto.agrego = "wwewe"


const objetoArray = ["001", "002"]
console.log(objetoArray)
objetoArray[0] = "casa"
console.log(objetoArray)

objetoArray[5] = "auto"
console.log(objetoArray)

const listClone = [...objetoArray]



