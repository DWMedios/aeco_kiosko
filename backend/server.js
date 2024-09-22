const http = require('http')

const express = require('express')
const cors = require('cors')

const setupWebSocket = require('./ws')
const apiRoutes = require('./routes/api')
const companyController = require('./controllers/companyController')
require('dotenv').config()

const app = express()
const server = http.createServer(app)

app.use(express.json())

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)
app.use('/api', apiRoutes)

;(async () => {
  try {
    companyController.updateCompanyByMacAddress()
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
