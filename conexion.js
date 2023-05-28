const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //req= es la peticion que hace el cliente
    //res= es la respuesta del servidor
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, Mundo!\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en  http://${hostname}:${port}/`);
});