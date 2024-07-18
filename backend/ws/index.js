const WebSocket = require('ws');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Define el path del puerto serial
const serialPortPath = '/dev/tty-usbserial1'; // Cambia esto al path correcto de tu dispositivo

let port;
let parser;

try {
  // Configura el puerto serial
  port = new SerialPort({ path: serialPortPath, baudRate: 9600 });
  console.log(`Puerto serial ${serialPortPath} abierto exitosamente.`);
  parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
} catch (err) {
  console.error(`Error al abrir el puerto serial ${serialPortPath}:`, err.message);
}

const setupWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');

    if (parser) {
      // Enviar datos recibidos del puerto serial al cliente WebSocket
      parser.on('data', (data) => {
        console.log('Datos recibidos del puerto serial:', data);
        ws.send(data);
      });
    }

    ws.on('message', async (message) => {
      console.log('Mensaje recibido:', message);

      try {
        ws.send(JSON.stringify({ message: 'Mensaje recibido' }));
      } catch (err) {
        console.error(err);
        ws.send('Error al ejecutar la consulta');
      }

      if (port) {
        // Enviar mensaje recibido al puerto serial
        port.write(message, (err) => {
          if (err) {
            console.error('Error al escribir en el puerto serial:', err.message);
          }
          console.log('Mensaje enviado al puerto serial');
        });
      }
    });

    ws.on('close', () => {
      console.log('Cliente desconectado');
    });
  });
};

module.exports = setupWebSocket;
