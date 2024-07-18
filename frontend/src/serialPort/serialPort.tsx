import React, { useState } from "react";

const SerialPort: React.FC = () => {
  const [port, setPort] = useState<SerialPort | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [reader, setReader] =
    useState<ReadableStreamDefaultReader<Uint8Array> | null>(null);

  const requestPort = async () => {
    try {
      const port = await navigator.serial.requestPort();
      console.log("🚀 ~ requestPort ~ port:", port)
      setPort(port);
      await port.open({ baudRate: 9600 });
      listenToPort(port);
    } catch (err) {
      console.error("Error opening port:", err);
      setErrorMessage("Error opening port: " + (err as Error).message);
    }
  };

  const listenToPort = async (port: SerialPort) => {
    if (reader) {
      await reader.cancel();
      setReader(null);
    }

    const newReader = port.readable.getReader();
    setReader(newReader);
    setIsListening(true);
    setErrorMessage("");

    try {
      while (true) {
        const { value, done } = await newReader.read();
        if (done) break;
        setOutputValue(
          (prevValue) => prevValue + new TextDecoder().decode(value)
        );
      }
    } catch (err) {
      console.error("Error reading from port:", err);
      setErrorMessage("Error reading from port: " + (err as Error).message);
    } finally {
      newReader.releaseLock();
      setIsListening(false);
      setReader(null);
    }
  };

  const writeToPort = async (message: string) => {
    if (port) {
      const writer = port.writable.getWriter();
      await writer.write(new TextEncoder().encode(message));
      writer.releaseLock();
    }
  };

  const sendMessageAndListen = async () => {
    setOutputValue("");
    await writeToPort('');
    listenToPort(port!);
  };

  const closePort = async () => {
    if (reader) {
      await reader.cancel();
      setReader(null);
    }
    if (port) {
      await port.close();
      setPort(null);
      setOutputValue("");
      setIsListening(false);
    }
  };

  return (
    <div className="App" style={{ padding: 10 }}>
      <header className="App-header">
        <h1>Vite - Demo Serial Port Reader</h1>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {port ? (
          <div>
            <textarea value={outputValue} readOnly rows={10} cols={50} />
            <br />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => writeToPort(inputValue)}>Send</button>
            <button onClick={sendMessageAndListen}>Send 'L' and Listen</button>
            <button onClick={closePort}>Close Port</button>
            {isListening ? <p>Listening for data...</p> : <p>Not listening</p>}
          </div>
        ) : (
          <button onClick={requestPort}>Request Port</button>
        )}
      </header>
    </div>
  );
};

export default SerialPort;
