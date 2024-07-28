const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

async function findArduinoPort() {
  try {
    const ports = await SerialPort.list()
    for (const port of ports) {
      console.log('Puerto encontrado:', port)
      if (port.manufacturer && port.manufacturer.includes('Arduino')) {
        return port.path
      }
    }
    throw new Error('No se encontró un puerto Arduino')
  } catch (error) {
    console.error('Error al listar los puertos seriales:', error?.message)
  }
}

async function setupSerialPort() {
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