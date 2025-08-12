# 📦 Modelos de Trabajo con Módulos en JavaScript

Este documento presenta distintas formas de estructurar y exportar lógica en este caso relacionada con la gestión de productos, utilizando funciones o clases, tanto con el sistema de módulos CommonJS como con ES Modules (ESM).

---

## 🧪 Datos de ejemplo

```js
const productsJSON = [
  { id: 1, name: "Laptop", price: 1000, stock: 50 },
  { id: 2, name: "Smartphone", price: 500, stock: 100 },
  { id: 3, name: "Tablet", price: 300, stock: 75 },
  { id: 4, name: "Monitor", price: 200, stock: 30 },
  { id: 5, name: "Keyboard", price: 50, stock: 200 },
];
```

---

## 🛠️ Módulos CommonJS + Funciones

### ✅ Opción 1: Declarar funciones individuales y exportar al final

```js
function getAllProducts() {
  return productsJSON;
}

function getProductById(id) {
  return productsJSON.find((product) => product.id === id);
}

function addProduct(product) {
  productsJSON.push(product);
  return product;
}

function updateProduct(id, updatedProduct) {
  const index = productsJSON.findIndex((product) => product.id === id);
  if (index !== -1) {
    productsJSON[index] = { ...productsJSON[index], ...updatedProduct };
    return productsJSON[index];
  }
  return null;
}

function deleteProduct(id) {
  const index = productsJSON.findIndex((product) => product.id === id);
  if (index !== -1) {
    return productsJSON.splice(index, 1)[0];
  }
  return null;
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
```

**Ejemplo de uso:**

```js
const productModel = require("./productModel");
const allProducts = productModel.getAllProducts();
console.log(allProducts);
```

### ✅ Opción 2: Crear un objeto con las funciones y exportarlo al final

```js
const productModel = {
  getAllProducts() {
    return productsJSON;
  },
  getProductById(id) {
    return productsJSON.find((product) => product.id === id);
  },
  addProduct(product) {
    productsJSON.push(product);
    return product;
  },
  updateProduct(id, updatedProduct) {
    const index = productsJSON.findIndex((product) => product.id === id);
    if (index !== -1) {
      productsJSON[index] = { ...productsJSON[index], ...updatedProduct };
      return productsJSON[index];
    }
    return null;
  },
  deleteProduct(id) {
    const index = productsJSON.findIndex((product) => product.id === id);
    if (index !== -1) {
      return productsJSON.splice(index, 1)[0];
    }
    return null;
  },
};

module.exports = productModel;
```

**Ejemplo de uso:**

```js
const productModel = require("./productModel");
const allProducts = productModel.getAllProducts();
console.log(allProducts);
```

### ✅ Opción 3: Exportar directamente funciones dentro del `module.exports`

```js
module.exports = {
  //   getAllProducts: function() { //* <- Forma tradicional
  //     return productsJSON;
  //   },
  getAllProducts() {
    return productsJSON;
  },
  getProductById(id) {
    return productsJSON.find((product) => product.id === id);
  },
  addProduct(product) {
    productsJSON.push(product);
    return product;
  },
  updateProduct(id, updatedProduct) {
    const index = productsJSON.findIndex((product) => product.id === id);
    if (index !== -1) {
      productsJSON[index] = { ...productsJSON[index], ...updatedProduct };
      return productsJSON[index];
    }
    return null;
  },
  deleteProduct(id) {
    const index = productsJSON.findIndex((product) => product.id === id);
    if (index !== -1) {
      return productsJSON.splice(index, 1)[0];
    }
    return null;
  },
};
```
**Ejemplo de uso:**

```js
const productModel = require("./productModel");
const allProducts = productModel.getAllProducts();
console.log(allProducts);
```

---

## 📦 Módulos CommonJS + Clases

### ✅ Opción 1: Clase con instancia
Creamos una clase, la exportamos al final e instanciamos para usarla

```js
class ProductModel {
  constructor() {
    this.products = productsJSON;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }
    return null;
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = ProductModel;
```
**Ejemplo de uso:**

```js
const ProductModel = require("./ProductModel");
const productModel = new ProductModel();
const allProducts = productModel.getAllProducts();
console.log(allProducts);
```

### ✅ Opción 2: Clase con métodos estáticos
Creamos una clase usando static methods, exportamos al final y usamos directamente la clase sin instanciarla

```js
class ProductModel {
  static products = productsJSON;

  static getAllProducts() {
    return this.products;
  }

  static getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  static addProduct(product) {
    this.products.push(product);
    return product;
  }

  static updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }
    return null;
  }

  static deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = ProductModel;
```
**Ejemplo de uso:**

```js
import ProductModel from "./ProductModel.js";
const allProducts = ProductModel.getAllProducts();
console.log(allProducts);
```

---

## 🧩 ES Modules (type: module) + Funciones

### ✅ Opción 1: Exportar funciones individualmente

```js
export function getAllProducts() {
  return productsJSON;
}

export function getProductById(id) {
  return productsJSON.find((product) => product.id === id);
}

export function addProduct(product) {
  productsJSON.push(product);
  return product;
}

export function updateProduct(id, updatedProduct) {
  const index = productsJSON.findIndex((product) => product.id === id);
  if (index !== -1) {
    productsJSON[index] = { ...productsJSON[index], ...updatedProduct };
    return productsJSON[index];
  }
  return null;
}

export function deleteProduct(id) {
  const index = productsJSON.findIndex((product) => product.id === id);
  if (index !== -1) {
    return productsJSON.splice(index, 1)[0];
  }
  return null;
}
```

### ✅ Opción 2: Exportar un objeto por defecto

```js
const productModel = {
  getAllProducts() {
    return productsJSON;
  },
  getProductById(id) {
    return productsJSON.find((product) => product.id === id);
  },
  addProduct(product) {
    productsJSON.push(product);
    return product;
  },
  updateProduct(id, updatedProduct) {
    const index = productsJSON.findIndex((product) => product.id === id);
    if (index !== -1) {
      productsJSON[index] = { ...productsJSON[index], ...updatedProduct };
      return productsJSON[index];
    }
    return null;
  },
  deleteProduct(id) {
    const index = productsJSON.findIndex((product) => product.id === id);
    if (index !== -1) {
      return productsJSON.splice(index, 1)[0];
    }
    return null;
  },
};

export default productModel;
```

---

## 📦 ES Modules (type: module) + Clases

### ✅ Opción 1: Clase con instancia

```js
class ProductModel {
  constructor() {
    this.products = productsJSON;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }
    return null;
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

export default ProductModel;
```

**Ejemplo de uso:**

```js
import ProductModel from "./ProductModel.js";
const productModel = new ProductModel();
const allProducts = productModel.getAllProducts();
console.log(allProducts);
```

### ✅ Opción 2: Clase con métodos estáticos (export default)

```js
export default class ProductModel {
  static products = productsJSON;

  static getAllProducts() {
    return this.products;
  }

  static getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  static addProduct(product) {
    this.products.push(product);
    return product;
  }

  static updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }
    return null;
  }

  static deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

```

**Ejemplo de uso:**

```js
import ProductModel from "./ProductModel.js";
const allProducts = ProductModel.getAllProducts();
console.log(allProducts);
```

### ✅ Opción 3: Clase con métodos estáticos (export named)

```js
export class ProductModel {
  static products = productsJSON;

  static getAllProducts() {
    return this.products;
  }

  static getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  static addProduct(product) {
    this.products.push(product);
    return product;
  }

  static updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }
    return null;
  }

  static deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

// Ejemplo de uso
import { ProductModel } from "./ProductModel.js";
console.log(ProductModel.getAllProducts());
```

---

## 📌 Recomendaciones Finales

- Si tu aplicación es pequeña, puedes comenzar con funciones simples (`module.exports` o `export default`).
- Si vas a escalar, una clase (con o sin instancia) facilita mantener estado interno y encapsular lógica.
- Los métodos `static` permiten acceso sin crear instancias, ideal para modelos de solo lectura o cuando no necesitas estado propio.
- CommonJS es el sistema de módulos de Node.js por defecto, pero para nuevas aplicaciones se recomienda usar ES Modules (`type: "module"` en `package.json`).
