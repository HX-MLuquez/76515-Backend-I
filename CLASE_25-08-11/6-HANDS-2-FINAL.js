//* HANDS 2

// UsersManager.js
// import fs from "fs/promises";
// import crypto from "crypto";
const fs = require("fs/promises");
const crypto = require("crypto");
const path = require("path");

class UsersManager {
  constructor(filePath) {
    this.filePath = filePath;
  }
  async #readFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") return []; // Si no existe el archivo, devolvemos array vacío
      throw error;
    }
  }
  async #writeFile(users) {
    try {
      console.log(this.filePath);
      await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
    } catch (error) {
      console.error("Error al escribir el archivo:", error);
    }
  }

  async addUser({ nombre, apellido, edad, curso = "Back I" }) {
    try {
      if (!nombre || !apellido || !edad) {
        throw new Error(
          "Todos los campos (nombre, apellido, edad) son obligatorios."
        );
      }
      const users = await this.#readFile();
      const newUser = {
        id: crypto.randomUUID(),
        nombre, // nombre: nombre <- object literal
        apellido,
        edad,
        curso,
      };

      users.push(newUser);
      await this.#writeFile(users);
      return newUser;
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }
  async getAllUsers() {
    try {
      const data = await this.#readFile();
      return data;
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }
  async getUserById(id) {
    try {
      const users = await this.#readFile();
      const user = users.find((u) => u.id === id || null);
      return user;
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }
  async deleteUserById(id) {
    try {
      // Por el ID vamos buscamos y si encontramos eliminamos
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }
  //                      {},           id
  async updateUserById(dataUpdateUser, id) {
    try {
      // Buscar el user por id
      const user = {
        ...user,
        dataUpdateUser,
      };
      // cargar el user actualizado
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }
}

module.exports = UsersManager;

// Ejemplo de uso
// testUsersManager.js
// import UsersManager from "./UsersManager.js";

const filePath = path.join(__dirname, "data", "Usuarios.json");
const managerUser = new UsersManager(filePath);

async function main() {
  // console.log(
  //   await managerUser.addUser({ nombre: "Juan", apellido: "Pérez", edad: 101 })
  // );
  // console.log(await managerUser.getAllUsers());

  // 834567b3-27e6-4b1f-8bac-87138f867f9c
  console.log(await managerUser.getUserById("834567b3-27e6-4b1f-8bac-87138f867f9c"));
  return;
}

main();

/*

*/
