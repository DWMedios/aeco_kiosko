const http = require('http')

const express = require('express')
const cors = require('cors')

const setupWebSocket = require('./ws')
const apiRoutes = require('./routes/api')
require('dotenv').config()

// Inicializa la aplicación Express
const app = express()
const server = http.createServer(app)
// Configura Express para recibir JSON en las peticiones
app.use(express.json())

// Configura las rutas de la API
app.use(
  cors({
    origin: '*', // Permite solo este origen, ajusta según sea necesario
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite estos métodos
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite estos encabezados
  })
)
app.use('/api', apiRoutes)
// Configurar WebSocket
;(async () => {
  try {
    await setupWebSocket(server)
    console.log('WebSocket configurado correctamente.')
  } catch (err) {
    console.error('Error al configurar WebSocket:', err.message)
  }

  // Inicia el servidor
  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
  })
})()
