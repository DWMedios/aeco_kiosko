import { useEffect, useRef, useState } from 'react'
import WebApiAeco from '../../api/webApiAeco';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('')
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)


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
      console.log("Se encontro-->> ", response.code)
      
    } catch (error) {
      console.log("🚀 ~ findProduct ~ error:", error)
      
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