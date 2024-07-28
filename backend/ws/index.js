const WebSocket = require('ws')

const { setupSerialPort } = require('./serial')


const setupWebSocket = async (server) => {
  const { port, parser } = await setupSerialPort()
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado')

    if (parser) {
      // Enviar datos recibidos del puerto serial al cliente WebSocket
      parser.on('data', (data) => {
        console.log('Datos recibidos del puerto serial:', data)
        ws.send(data)
      })
    }

    ws.on('message', async (message) => {
      console.log('Mensaje recibido:', message)

      try {
        ws.send(JSON.stringify({ message: 'Mensaje recibido' }))
      } catch (err) {
        console.error(err)
        ws.send('Error al ejecutar la consulta')
      }

      if (port) {
        // Enviar mensaje recibido al puerto serial
        port.write(message, (err) => {
          if (err) {
            console.error('Error al escribir en el puerto serial:', err?.message)
          }
          console.log('Mensaje enviado al puerto serial')
        })
      }
    })

    ws.on('close', () => {
      console.log('Cliente desconectado')
    })
  })
}

module.exports = setupWebSocket
