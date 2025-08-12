const fs = require("fs");
// o const fs = require("fs").promises

async function readFileMIO() {
  try {
    const data = await fs.promises.readFile("user.txt", "utf-8");
    console.log("-->", data);
    return data
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

// readFileMIO()


async function writeFile() {
  try {
    const data = await readFileMIO()
    const message = data + " jujujujuujjj---------------"
    await fs.promises.writeFile("user.txt", message);
    fs.promises.appendFile
    console.log("archivo creado exitosamente");
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

writeFile()