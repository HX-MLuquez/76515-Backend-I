# Desarrollo Backend Avanzado

**Unidad 4: Desarrollo de Backend Avanzado**

### Objetivos de la Clase:
- Aprender a crear un servidor utilizando el módulo nativo http.
- Crear un servidor de Express.
- Profundizar en las peticiones GET de un servidor Express.
- Entender el protocolo HTTP y los códigos de estado.
- Conocer los métodos POST, PUT, DELETE y utilizarlos con POSTMAN o ThunderClient.

Comprender el concepto de API REST.

---

## PUNTOS CLAVE
- HTTP, ¿qué es y cómo funciona?
- Códigos de estado HTTP.
- Métodos HTTP.
- Creación de un servidor con Express.
- MIDLEWARES, ¿qué son y cómo se utilizan? principales midlewares.
- CORS, ¿qué es y cómo se utiliza?
- PARAMS, QUERY y BODY.
- API REST.
- POSTMAN y ThunderClient.

---

## HTTP, ¿qué es y cómo funciona?
HTTP (Hypertext Transfer Protocol) es un protocolo de comunicación que se utiliza para la transmisión de información en la web. Es el encargado de establecer la comunicación entre el cliente y el servidor, permitiendo la transferencia de datos en la web.

El protocolo HTTP funciona a través de una arquitectura cliente-servidor, donde el cliente realiza una petición al servidor y este responde con una respuesta. La comunicación entre el cliente y el servidor se realiza a través de mensajes, que se envían en formato texto.


## Códigos de estado HTTP
Los códigos de estado HTTP son un conjunto de códigos numéricos que se utilizan para indicar el estado de una petición HTTP. Estos códigos se dividen en cinco categorías, cada una de las cuales representa un tipo de respuesta diferente.

- 1xx: Respuestas informativas.
- 2xx: Respuestas satisfactorias.
- 3xx: Redirecciones.
- 4xx: Errores del cliente.
- 5xx: Errores del servidor.

## Métodos HTTP
Los métodos HTTP son una parte fundamental del protocolo HTTP, ya que permiten especificar la acción que se desea realizar sobre un recurso. Los métodos más comunes son:

- GET: Se utiliza para obtener información de un recurso.
- POST: Se utiliza para enviar información a un recurso.
- PUT: Se utiliza para actualizar un recurso.
- DELETE: Se utiliza para eliminar un recurso.

**CRUD: create, read, update, delete**

## Creación de un servidor con Express
Express es un framework de Node.js que se utiliza para crear aplicaciones web y APIs de forma sencilla y eficiente. Para crear un servidor con Express, es necesario instalar el paquete express y utilizarlo en el código de la siguiente manera:

```javascript
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
```

## MIDLEWARES, ¿qué son y cómo se utilizan?
Los middlewares son funciones que se ejecutan en el flujo de una petición HTTP, antes de que llegue al controlador de la ruta. Los middlewares se utilizan para realizar tareas como la validación de datos, la autenticación de usuarios, el manejo de errores, entre otros.

```javascript
app.use((req, res, next) => {
  console.log('Middleware');
  next();
});
```

### Principales midlewares
- express.json(): Middleware que se utiliza para parsear el cuerpo de las peticiones en formato JSON.
- express.urlencoded(): Middleware que se utiliza para parsear el cuerpo de las peticiones en formato URL-encoded.
- express.static(): Middleware que se utiliza para servir archivos estáticos.


## CORS, ¿qué es y cómo se utiliza?

CORS (Cross-Origin Resource Sharing) es un mecanismo que permite a los servidores indicar a los navegadores si se permite que una página web acceda a recursos de otro origen. CORS se utiliza para evitar problemas de seguridad que pueden surgir al realizar peticiones entre dominios diferentes.

Para habilitar CORS en una aplicación de Express, se puede utilizar el paquete cors y configurarlo de la siguiente manera:

```javascript
const cors = require('cors');

app.use(cors());
```

## PARAMS, QUERY y BODY
Los parámetros, las consultas y el cuerpo son formas de enviar información a un servidor a través de una petición HTTP.

- Parámetros: Se envían en la URL y se utilizan para identificar un recurso de forma única.
```js
//* CLIENT
https://akabab.github.io/starwars-api/334
//* SERVER
/akabab.github.io/starwars-api/:code
const {code} = req.params

```
- Consultas: Se envían en la URL y se utilizan para filtrar, ordenar o paginar los resultados de una petición.
```js
https://akabab.github.io/starwars-api?id=44&nombre=Fede

const {id, nombre} = req.query
```
- Cuerpo: Se envía en el cuerpo de la petición y se utiliza para enviar información adicional al servidor.
```js
https://akabab.github.io/starwars-api
const {id, nombre} = req.body
```

## API REST
Una API REST (Representational State Transfer) es una arquitectura de software que se utiliza para diseñar servicios web que siguen los principios de REST. Una API REST se basa en la transferencia de representaciones de recursos a través de HTTP, utilizando los métodos y códigos de estado de HTTP.


## POSTMAN y ThunderClient
Postman y ThunderClient son herramientas que se utilizan para probar y depurar APIs. Estas herramientas permiten realizar peticiones HTTP, ver las respuestas, guardar las peticiones, entre otras funcionalidades.




---



#### Recursos Adicionales
- [HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)
- [Express](https://expressjs.com/es/)
- [Postman](https://www.postman.com/)
- [ThunderClient](https://www.thunderclient.io/)
- [API REST](https://www.redhat.com/es/topics/api/what-is-a-rest-api)
- [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
- [MIDLEWARES](https://expressjs.com/es/guide/using-middleware.html)
- [MIDLEWARES](https://www.digitalocean.com/community/tutorials/nodejs-middleware)
- [MIDLEWARES](https://www.geeksforgeeks.org/express-js-middleware/)

