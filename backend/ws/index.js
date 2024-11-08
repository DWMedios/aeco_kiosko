const WebSocket = require('ws')

const { setupSerialPort } = require('./serial')
const {
  sendCommandLetters,
  receivedCommandArduino,
} = require('./serial/arduinoCommands')

const setupWebSocket = async (server) => {
  const wss = new WebSocket.Server({ server })
  let { port: portSerial, parser: serialParser } = await setupSerialPort()

  wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado')

    if (serialParser) {
      serialParser.on('data', (data) => {
        console.log('Datos recibidos del puerto serial:', data)
        const receivedCommand = receivedCommandArduino[data]
        if (!receivedCommand) {
          console.log('Comando del arduino no encontrado:', data)
          ws.send(JSON.stringify({ success: false, message: 'Comando no encontrado en el catalogo del BACKEND' }))
        }
        if (receivedCommand) {
          ws.send(JSON.stringify({ success: true, message: receivedCommand, command: data }))
        }
      })
    }

    ws.on('message', async (message) => {
      if (!portSerial || !portSerial?.isOpen) {
        console.error(
          'Puerto serial no encontrado o cerrado, intentando reconectar...'
        )
        const serialReconnected = await setupSerialPort()

        if (!serialReconnected?.port) {
          ws.send(
            JSON.stringify({
              success: false,
              message: 'No se encontró un puerto serial, intenta de nuevo',
            })
          )
          return
        } else {
          portSerial = serialReconnected.port
          serialParser = serialReconnected.parser
        }
      }

      console.log(
        'Mensaje recibido:',
        JSON.parse(message.toString('utf8')).command
      )

      // const sendArduinoCommand = sendCommandLetters[JSON.parse(message.toString('utf8'))?.command]
      const sendArduinoCommand = JSON.parse(message.toString('utf8'))?.command

      if (!sendArduinoCommand)
        ws.send(
          JSON.stringify({ success: false, message: 'Comando no encontrado' })
        )

      if (portSerial) {
        // Enviar mensaje recibido al puerto serial
        portSerial.write(sendArduinoCommand, (err) => {
          if (err) {
            console.error(
              'Error al escribir en el puerto serial:',
              err?.message
            )
            ws.send(
              JSON.stringify({
                success: false,
                message: 'Error al enviar mensaje al puerto serial',
              })
            )
          }
          console.log(
            'Enviando mensaje al puerto serial...: ',
            sendArduinoCommand
          )
          ws.send(
            JSON.stringify({
              success: true,
              message: 'Mensaje enviado al puerto serial',
            })
          )
        })
      }
    })

    ws.on('close', () => {
      console.log('Cliente desconectado')
    })
  })
}

module.exports = setupWebSocket