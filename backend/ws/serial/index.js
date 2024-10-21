const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const { findArduinoPort } = require('./utils')

const setupSerialPort = async () => {
  const serialPortPath = await findArduinoPort()

  let port
  let parser

  try {
    // Configura el puerto serial
    port = new SerialPort({ path: serialPortPath, baudRate: 9600 })
    console.log(`Puerto serial ${serialPortPath} abierto exitosamente.`)
    parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
  } catch (error) {
    console.error(`Error al abrir el puerto serial ${serialPortPath}:`, error?.message)
  }

  return { port, parser }
}

module.exports = {
  setupSerialPort,
}