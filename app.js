// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('¡Hello, this is a project in Node.js!');
  res.end();
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
