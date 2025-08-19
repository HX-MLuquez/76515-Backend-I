const app = require("./app");
const config = require("./config/config");

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
