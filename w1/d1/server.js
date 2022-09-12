const http = require("http");

const users = [{ umut, vini, kento }];

const server = http.createServer((request, response) => {
  console.log("A wild client appears!", request.url);

  if (request.url === "/dogs") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(
      "<img src='https://pbs.twimg.com/profile_images/1213144769452486656/sRfg9m1O_400x400.jpg' alt=''>"
    );
  }
  if (request.url === "/users") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.write(
      "<p></p>"
    );
  }
  response.end();
});

server.listen(3000, () => console.log("Server is running at port 3000"));
