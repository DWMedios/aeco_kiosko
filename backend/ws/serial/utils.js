const { SerialPort } = require('serialport')

const findArduinoPort = async () => {
  try {
	  const ports = await SerialPort.list()
	  for (const port of ports) {
      console.log('Puerto encontrado:', port)
      if (port.manufacturer && port.manufacturer.includes('Arduino')) {
        return port.path
      	}
	  }
	  return null
  } catch (error) {
	  console.error('Error al listar los puertos seriales:', error?.message)
	  return null
  }
}

module.exports = {
	  findArduinoPort,
}