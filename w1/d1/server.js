const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A wild client appears!", request.url);

  if (request.url === "/test") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<h1>Hello Client in test!!!!!!</h1>");
  }
  response.end();
});

server.listen(3000, () => console.log("Server is running at port 3000"));
