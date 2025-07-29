//* Utils es un módulo que contiene funciones que se pueden reutilizar en otros módulos
const sumar = (a, b) => {
  return a + b;
};


//* Exportamos utilizando module.exports nativo de Node.js 
module.exports = {
  sumar,
};

