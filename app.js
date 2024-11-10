const http = require('http');

// Usar el puerto proporcionado por Railway o 3000 por defecto
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write('¡Hello, this is a project in Node.js running on Railway!');
  res.end();
});

// Escuchar en el puerto asignado
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
