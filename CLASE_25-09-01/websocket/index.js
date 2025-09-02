const server = require("./src/server");

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
