const http = require("http");
const url = require("url");

const port = 3077;

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  res.setHeader("Content-Type", "application/json");

  if (path === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  } else if (path === "/products" && method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(products));
  } else if (path.startsWith("/products/") && method === "GET") {
    const id = parseInt(path.split("/")[2]);
    const product = products.find((p) => p.id === id);

    if (product) {
      res.writeHead(200);
      res.end(JSON.stringify(product));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Product not found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


//* --> node server_http.js