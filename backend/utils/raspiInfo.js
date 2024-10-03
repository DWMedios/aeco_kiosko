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

exports.getSerialNumber = () => {
  return new Promise((resolve, reject) => {
    exec('cat /proc/cpuinfo | grep Serial | cut -d " " -f 2', (err, stdout) => {
      if (err) {
        reject(`Error ejecutando el comando para obtener el número de serie: ${err}`);
        return;
      }
      
      const serialNumber = stdout.trim();

      if (serialNumber) {
        resolve(serialNumber);
      } else {
        reject('No se pudo encontrar el número de serie en /proc/cpuinfo.');
      }
    });
  });
};
