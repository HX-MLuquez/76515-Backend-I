/*
Gestión de Eventos con JavaScript
En JavaScript, la gestión de eventos es un concepto fundamental que permite a los desarrolladores 
interactuar con el usuario y responder a sus acciones dentro de una página web. 
Los eventos son acciones o sucesos que ocurren en el navegador, como hacer clic en un botón, 
mover el ratón, o pulsar una tecla. Mediante la gestión de eventos, es posible ejecutar funciones 
específicas en respuesta a estos eventos, mejorando la interactividad de las aplicaciones web.

Paso 1: Comprender los Tipos de Eventos
Primero, es importante entender que los eventos pueden ser de varios tipos. Algunos de los eventos más comunes incluyen:

Eventos de ratón: Como click, dblclick, mouseover, mouseout, etc.

Eventos de teclado: Como keydown, keyup, keypress.

Eventos de formulario: Como submit, change, input.

Eventos de ventana: Como load, resize, scroll.

Cada uno de estos eventos se activa en circunstancias específicas y puede ser capturado para ejecutar una función.

Paso 2: Añadir un Manejador de Eventos
Para gestionar un evento, se debe añadir un manejador de eventos. Un manejador de eventos es una función 
que se ejecuta cuando ocurre un evento específico. Este manejador se puede asociar a un elemento HTML específico 
(como un botón o un formulario) utilizando varios métodos, como addEventListener.

Por ejemplo, cuando un usuario hace clic en un botón, el manejador de eventos asociado a ese botón se ejecuta, 
permitiendo que el código responda de manera apropiada.

Paso 3: El Contexto de this en los Eventos
Cuando se maneja un evento en JavaScript, el contexto de this dentro del manejador de eventos normalmente 
se refiere al elemento que disparó el evento. Por ejemplo, si un usuario hace clic en un botón, 
dentro del manejador de eventos thisse refiere a ese botón. Esto permite acceder fácilmente a las propiedades 
y métodos del elemento que activó el evento.

Paso 4: Remover Manejadores de Eventos
En algunas situaciones, es necesario eliminar un manejador de eventos previamente agregado, para evitar 
que se ejecute innecesariamente o para liberar recursos. Esto se puede hacer utilizando el método removeEventListener, 
que requiere conocer el evento y la función manejadora que se desea eliminar.

Paso 5: Prevención del Comportamiento Predeterminado y Propagación de Eventos
A veces, es deseable evitar el comportamiento predeterminado de un evento (como la recarga de una página al enviar un formulario). 
Esto se puede lograr utilizando preventDefault dentro del manejador de eventos. 
Además, los eventos en JavaScript tienen una propiedad llamada propagación, que permite que un evento 
en un elemento se "propague" a través de sus elementos padres. La propagación puede ser detenida 
usando stopPropagation si se desea evitar que un evento afecte a otros elementos.
*/

//* Ejemplos prácticos 

// 1. Añadir un evento de clic a un botón
const button = document.getElementById('miBoton');
button.addEventListener('click', function() {
    alert('¡Botón clicado!');
});


// 2. Cambiar el color de fondo al pasar el ratón sobre un elemento
const caja = document.getElementById('miCaja');
caja.addEventListener('mouseover', function() {
    caja.style.backgroundColor = 'yellow'; // Cambiar el color de fondo al pasar el ratón
});
caja.addEventListener('mouseout', function() {
    caja.style.backgroundColor = 'white';
});

// 3. Manejar el evento de envío de un formulario
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert('Formulario enviado!');
});

// 4. Usar el contexto de this en un evento
const botonContexto = document.getElementById('botonContexto');
botonContexto.addEventListener('click', function() {
    this.style.backgroundColor = 'green'; // Cambiar el color de fondo del botón
});

// 5. Remover un manejador de eventos
const manejador = function() {
    alert('Evento removido!');
};
button.addEventListener('click', manejador);
button.removeEventListener('click', manejador); // Eliminar el manejador de eventos

// 6. Prevenir el comportamiento predeterminado de un enlace
const enlace = document.getElementById('miEnlace');
enlace.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    // En este caso evita que navegue a otra página
    // Si comentamos el event.preventDefault() el enlace navegaría a la URL especificada en el href
    alert('Enlace clicado, pero no navega!');
});

/*
Html ejemplo base:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Eventos en JavaScript</title>
    <style>
        #miCaja {
            width: 100px;
            height: 100px;
            background-color: white;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <button id="miBoton">Clicame</button>
    <div id="miCaja"></div>
    <form id="miFormulario">
        <input type="text" placeholder="Escribe algo...">
        <button type="submit">Enviar</button>
    </form>
    <button id="botonContexto">Cambia mi color</button>
    <a href="#" id="miEnlace">Soy un enlace</a>

    <script src="addEventListener.js"></script>
</body>
</html>
*/


