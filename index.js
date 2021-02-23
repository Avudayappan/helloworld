var http = require('http');

var server = http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World from js in a Docker container. Avudayappan Palanivel. git test3 .");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");