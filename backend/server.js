const express = require('express');
const http = require('http');
const setupWebSocket = require('./ws');
const apiRoutes = require('./routes/api');
const { connectDB } = require('./db/index');
require('dotenv').config();

// Inicializa la aplicación Express
const app = express();
const server = http.createServer(app);

// Conectar a la base de datos
connectDB();
// Configura Express para recibir JSON en las peticiones
app.use(express.json());

// Configura las rutas de la API
app.use('/api', apiRoutes);

// Configurar WebSocket
(async () => {
  try {
    await setupWebSocket(server);
    console.log('WebSocket configurado correctamente.');
  } catch (err) {
    console.error('Error al configurar WebSocket:', err.message);
  }

  // Inicia el servidor
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
})();
