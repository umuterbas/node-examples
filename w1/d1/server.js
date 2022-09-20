const http = require("http");

const users = [
  { name: "Arthur", country: "Brazil" },
  { name: "Nicolo", country: "Italy" },
  { name: "Emir", country: "Turkey" },
];

const products = [
  { name: "pen", price: 2.5 },
  { name: "notebook", price: 4 },
  { name: "backpack", price: 14.99 },
];

const server = http.createServer((request, response) => {
  console.log("A wild client appears!", request.url);

  if (request.url === "/test") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<h1>Hello Client in test!!!!!!</h1>");
  }

  if (request.url === "/cats") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<img src=''>");
  }
  if (request.url === "/dogs") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(
      "<img src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'>"
    );
  }
  if (request.url === "/users") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.write(JSON.stringify({ users }));
  }
  if (request.url === "/products") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.write(JSON.stringify({ products }));
  }
  response.end();
});

server.listen(3000, () => console.log("Server is running at port 3000"));
