const WebSocket = require('ws')

const { setupSerialPort } = require('./serial')
const { sendCommandLetters, receivedCommandArduino } = require('./serial/arduinoCommands')


const setupWebSocket = async (server) => {
  const { port, parser } = await setupSerialPort()
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado')

    if (parser) {
      // Enviar datos recibidos del puerto serial al cliente WebSocket
      parser.on('data', (data) => {
        console.log('Datos recibidos del puerto serial:', data)
        const receivedCommand = receivedCommandArduino[data]
        if (!receivedCommand) {
          console.log('Comando del arduino no encontrado:', data)
        }
        if (receivedCommand) {
          ws.send({ success: true, message: receivedCommand })
        }
      })
    }

    ws.on('message', async (message) => {

      if(!port) ws.send({ success: false, message: 'No se encontró un puerto Arduino' })

      console.log('Mensaje recibido:', message)

      const sendArduinoCommand = message?.command//sendCommandLetters[message?.command]

      if(!sendArduinoCommand) ws.send({ success: false, message: 'Comando no encontrado' })

      if (port) {
        // Enviar mensaje recibido al puerto serial
        port.write(sendArduinoCommand, (err) => {
          if (err) {
            console.error('Error al escribir en el puerto serial:', err?.message)
            ws.send({ success: false, message: 'Error al enviar mensaje al puerto serial' })
          }
          console.log('Mensaje enviado al puerto serial')
          ws.send({ success: true, message: 'Mensaje enviado al puerto serial' })
        })
      }
    })

    ws.on('close', () => {
      console.log('Cliente desconectado')
    })
  })
}

module.exports = setupWebSocket
