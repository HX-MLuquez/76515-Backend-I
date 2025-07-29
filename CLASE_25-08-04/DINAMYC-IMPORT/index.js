//* IMPLEMENTACION DE UN MODULO CON IMPORTACION DINAMICA (DYNAMIC IMPORTS)

async function ejemplo() {
  try {
    const modulo = await import("./calculadora.js");
    console.log(modulo.sumar(2,3));
  } catch (error) {
    console.log(`El error es ${error}`);
  }
}
