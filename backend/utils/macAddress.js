const { exec } = require('child_process')

exports.getMacAddress = () => {
  return new Promise((resolve, reject) => {
    exec('ifconfig', (err, stdout) => {
      if (err) {
        reject(`Error ejecutando el comando ifconfig: ${err}`)
        return
      }      
      const macAddress = stdout.match(/HWaddr\s([0-9a-fA-F:]{17})/)
      if (macAddress) {
        resolve(macAddress[1])
      } else {
        reject('No se pudo encontrar la dirección MAC usando ifconfig.')
      }
    })
  })
}


