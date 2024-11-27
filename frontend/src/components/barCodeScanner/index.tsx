import { useEffect, useRef, useState } from 'react'
import WebApiAeco from '../../api/webApiAeco';
import { useNavigate } from 'react-router-dom';
import useWebSocket from '../../hooks/useWebSocket';
import { SavePackaging } from '../../utils/savePackaging';

const BarcodeScanner = () => {
  const navigation = useNavigate()
  const [barcode, setBarcode] = useState('')
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)
  const { sendCommand } = useWebSocket()


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      if(barcode.trim.length == 0)
        setBarcode(event.target.value)
    }, 100);
  }

  useEffect(()=>{
    if (barcode && barcode.trim().length > 0)
      findProduct()
  },[barcode])

  const findProduct =async ()=>{
    try {
      const response = await WebApiAeco.findProduct(barcode)
      SavePackaging({ name: response.name, packaging: response.capacity.packaging })
      sendCommand('BUS')
      navigation('/accepted')
    } catch (error) {
      sendCommand('J')
      navigation('/rejected')
    }finally{
      setBarcode('')
      if (inputRef.current)
        inputRef.current.value = ''
    }
  }

  const handleBlur = () => {
    if (inputRef.current)
      inputRef.current.focus()
  }

  return (
    <input
      ref={inputRef}
      type="text"
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      autoFocus
      style={{
        position: 'absolute',
        opacity: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default BarcodeScanner