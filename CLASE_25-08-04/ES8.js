// Object.entries Object.values  Object.keys

const animal = {
  // KEY    VALUE
  nombre: "oso",
  estado: "cariñoso",
  edad: 3,
};

console.log(animal);
console.log(Object.entries(animal));
console.log(Object.keys(animal));

console.log(Object.values(animal).length);

// AL TENER ESTRUCTURAS ANIDADAS  [[][][]]   [[[[[]]]]]   {{{{{}}}}}  [{}{}{}] [{[]}{[]}]

// NULLISH

var nana = 0;

let nombre = nana && nana;
console.log(nombre);
let nombre2 = nana || "Nina"; // undefined null vacío o CERO (0) ""
console.log(nombre2);

const listOld = undefined
const newList = listOld || []
const resultS = newList.map(()=>{})


let nombre3 = nana ?? "nulishshshshhh";
console.log(nombre3);

var resultB
if(nana){
  resultB = "holis"
}else {
  resultB ="chau"
}
let result = nana ? "holis" : "chau"
console.log(result)

// if(nana){resultZ=nana}else{resultZ=[]}
let resultZ = nana ? nana : []
//*------------------------------------------------------------------
//*------------------------------------------------------------------
//*------------------------------------------------------------------

class Persona {
  #nombre; //* PRIVADA # <- proteger - integridad
  apellido = "lopez";
  static gender = "female"
  constructor(nombre) {
    this.#nombre = nombre;
  }
  getName() {
    return this.#nombre;
  }
}

const personita = new Persona("Hulk");
console.log(personita.getName());

console.log(personita.apellido);
// console.log(personita.#nombre);


//* 
console.log(Persona.gender);

class Product {
  static stock = 101 // GLOBALES -> se puede acceder sin instanciar
  static IVA = 0.21
  constructor(){
    Product.stock--
  }

  //* METODOS 
  static getProductById(id){
    return "enjoy!!!"
  }
  static getAllProducts(){

    // return -> [ todosLosProductos ]
  }
  static createProduct(product){
    // product -> {id name stock color price}

  }
  static deleteProduct(id){


  }
}

// const producto1 = new Product() // Instanciamos con la palabra reservada new
console.log(Product.getProductById(2));


module.exports = {
  Product
}