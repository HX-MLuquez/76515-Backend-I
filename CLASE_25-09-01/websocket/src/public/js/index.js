//* CLIENT
console.log("IN CLIENT");

const userName = document.querySelector(".userName");
const chatMessage = document.querySelector(".chatMessage");
var uuid = "";

// const socket = io("http://localhost:8080");

//* CONEXIÓN
const socket = io(); //* por defecto toma la url donde levanta el server

//* Lista de mensajes a renderizar en el chat
var messages = [];

const updateMessagges = (newMessages) => {
  messages = [...newMessages];
  chatMessage.innerHTML = messages
    .map((message) => {
      if (message.info === "connection") {
        return `<p class="connection">${message.message}</p>`;
      } else {
        return `
        <div class="messageUser">
          <h5>Nombre: ${message.name}</h5>
          <p>ID - ${message.id}</p>
          <p>${message.message}</p>
        </div>
      `;
      }
    })
    .join("");
};
/*
Modelo a extraer de la librería de carteles
*/
//* Formulario de entrada de usuario con SweetAlert2
// Mostrar el formulario de entrada de usuario
Swal.fire({
  title: "Ingrese su información",
  html: `
        <input type="text" id="swal-input-name" class="swal2-input" placeholder="Nombre">
        <input type="text" id="swal-input-id" class="swal2-input" placeholder="ID">
      `,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText: "Ingresar",
  preConfirm: () => {
    const name = Swal.getPopup().querySelector("#swal-input-name").value;
    const id = Swal.getPopup().querySelector("#swal-input-id").value;
    if (!name || !id) {
      Swal.showValidationMessage(`Por favor ingrese ambos campos`);
    }
    return { name: name, id: id };
  },
}).then((result) => {
  console.log("-->", result);
  const { name, id } = result.value;
  uuid = id;
  if (result.isConfirmed) {
    userName.textContent = name;
    socket.emit(`userConnect`, { user: name, id });
  }
});

//* Enlace de eventos de los botones de la interfaz - al DOM
const btnMessage = document.getElementById("btnMessage");
const inputMessage = document.getElementById("inputMessage");


//* EMITE un MENSAJE
//* Función para enviar un mensaje al servidor
btnMessage.addEventListener("click", (e) => {
  e.preventDefault();
  const message = inputMessage.value;
  socket.emit("userMessage", { message, user: userName.innerHTML });
});


//* RECIBE la LISTA de mensajes actualizada
socket.on("serverUserMessage", (data) => {
  chatMessage.innerHTML = "";
  updateMessagges(data);
});

/*
Los eventos de Socket.IO son asíncronos, lo que significa que no podemos detener el flujo 
de la aplicación esperando una respuesta directa. 
Para manejar esto, podemos:

1. Usar callbacks proporcionados por el cliente o el servidor.
2. Emitir eventos personalizados y escuchar las respuestas por separado.

Esto permite que el flujo de la aplicación continúe mientras se gestionan las respuestas.
*/
