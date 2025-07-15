import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WebApiAeco from '../../api/webApiAeco'
import useWebSocket from '../../hooks/useWebSocket'
import { SavePackaging } from '../../utils/savePackaging'
import { sendCommands } from '../../utils/commands'
import { Product } from '../../interfaces'

interface Props {
  setCodigo: (codigo: any) => void
  setProduct: (product: any) => void
}

const BarcodeScanner = ({ setProduct, setCodigo }: Props) => {
  const navigation = useNavigate()
  const [barcode, setBarcode] = useState('')
  const [awaiting, setAwaiting] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { sendCommand } = useWebSocket()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      if (barcode.trim().length == 0) {
        if (awaiting) return
        setBarcode((event.target as HTMLInputElement).value)
      }
    }, 1000)
  }

  useEffect(() => {
    if (barcode && barcode.trim().length > 0) {
      setCodigo(barcode)
      findProduct()
    }
  }, [barcode])

  const findProduct = async () => {
    try {
      if(awaiting) return
      setAwaiting(true)
      const response = (await WebApiAeco.findProduct(barcode)) as Product
      setProduct(response)
      await SavePackaging({
        id: response.id,
        name: response.name,
        packagingType: response.capacity.packaging,
      })
      sendCommand(sendCommands.ACCEPTED)
      const timeout = setTimeout(() => {
        navigation('/accepted')
      }, 6000)

      return () => clearTimeout(timeout)
    } catch (error) {
      sendCommand(sendCommands.REJECTED)
      const timeout = setTimeout(() => {
        navigation('/rejected')
      }, 6000)

      return () => clearTimeout(timeout)
    } finally {
      setBarcode('')
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  const handleBlur = () => {
    if (inputRef.current) inputRef.current.focus()
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
