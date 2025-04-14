// src/global.d.ts
interface Navigator {
  serial: {
    requestPort: () => Promise<SerialPort>
    getPorts: () => Promise<SerialPort[]>
  }
}
