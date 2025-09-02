# WebSockets

## Introducción

Los WebSockets son una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP. Está diseñada para ser implementada en navegadores y servidores web, pero puede utilizarse por cualquier cliente o servidor.



Referencias para:
- [WebSockets](https://developer.mozilla.org/es/docs/WebSockets)
- [Handlebars](https://handlebarsjs.com/)
- [Express](https://expressjs.com/es/)
- [Node.js](https://nodejs.org/es/)
- [Socket.io](https://socket.io/)
- [SweetAlert2](https://sweetalert2.github.io/)

Para despliegue en Glitch:
- [Glitch](https://glitch.com/)


Diferencias entre WebSockets y HTTP
- [Diferencias](https://lab.wallarm.com/what/websocket-frente-a-http/?lang=es)


---

# socket 

1. `socket.emit('privateMessage', data)`: Solo envía al cliente que inició la conexión.
2. `io.emit('globalMessage', data)`: Envío global a TODOS los clientes.
3. `socket.broadcast.emit('broadcastMessage', data)`: Envío a todos excepto al que lo envió.
4. `io.to(socketId).emit('privateMessage', data)`: Envío privado a un cliente específico.


---

### **Servidor (`server.js`)**
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Permite cualquier origen (ajustar según sea necesario)
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  // socket.emit -> Enviar solo al cliente que inició la conexión
  socket.emit('privateMessage', `Hola cliente ${socket.id}, bienvenido!`);

  // io.emit -> Enviar a TODOS los clientes conectados
  io.emit('globalMessage', `El cliente ${socket.id} se ha conectado.`);

  // socket.broadcast.emit -> Enviar a todos EXCEPTO al que envió
  socket.on('sendBroadcast', (message) => {
    socket.broadcast.emit('broadcastMessage', `Mensaje global de ${socket.id}: ${message}`);
  });

  // io.to(socketId).emit -> Enviar mensaje privado a un cliente específico
  socket.on('privateMessage', ({ targetId, message }) => {
    io.to(targetId).emit('privateMessage', `Mensaje privado de ${socket.id}: ${message}`);
  });

  // Evento de desconexión
  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
    io.emit('globalMessage', `El cliente ${socket.id} se ha desconectado.`);
  });
});

server.listen(8080, () => {
  console.log('Servidor corriendo en http://localhost:8080');
});
```

---

### **Cliente (`client.html`)**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.IO Client</title>
    <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
</head>
<body>
    <h1>Cliente de Socket.IO</h1>
    <button onclick="sendBroadcast()">Enviar Broadcast</button>
    <input type="text" id="targetId" placeholder="ID del destinatario">
    <input type="text" id="privateMessage" placeholder="Mensaje privado">
    <button onclick="sendPrivateMessage()">Enviar Privado</button>

    <ul id="messages"></ul>

    <script>
        const socket = io('http://localhost:8080');

        // Recibir mensaje privado
        socket.on('privateMessage', (message) => {
            appendMessage(`🔒 PRIVADO: ${message}`);
        });

        // Recibir mensaje global
        socket.on('globalMessage', (message) => {
            appendMessage(`🌍 GLOBAL: ${message}`);
        });

        // Recibir mensaje de broadcast
        socket.on('broadcastMessage', (message) => {
            appendMessage(`📢 BROADCAST: ${message}`);
        });

        // Enviar un mensaje de broadcast
        function sendBroadcast() {
            socket.emit('sendBroadcast', '¡Hola a todos menos a mí!');
        }

        // Enviar mensaje privado
        function sendPrivateMessage() {
            const targetId = document.getElementById('targetId').value;
            const message = document.getElementById('privateMessage').value;
            socket.emit('privateMessage', { targetId, message });
        }

        // Función para agregar mensajes al DOM
        function appendMessage(message) {
            const li = document.createElement('li');
            li.textContent = message;
            document.getElementById('messages').appendChild(li);
        }
    </script>
</body>
</html>
```

---


---

Enlace al Repo bien Modularizado de este mismo proyecto

- https://github.com/HX-MLuquez/chat-test