import { usePageData } from '../../hooks/usePageData'

import { MetaDataInsert } from '../../interfaces'

import ScreenLayout from '../../components/layout/screenLayout'
import { useEffect, useState } from 'react'
import useWebSocket from '../../hooks/useWebSocket'

const Insert = () => {
  const { data: metas, loading, error } = usePageData<MetaDataInsert>('Insert')
  const { command, sendMessage } = useWebSocket()
  const [combinedMessage, setCombinedMessage] = useState<string>('')
    
  useEffect(()=>{
    sendMessage('J')
  },[])

  useEffect(()=>{
    const { success, message } = command
    console.log("🚀 ~ useEffect ~ message", message)
    if (success && message?.trim().length === 1) {
      setCombinedMessage((prev) => prev + message)
      if (combinedMessage + message === 'ECU') {
        console.log('¡Combinación ECU detectada!')
      }
    }
  }, [command])


  if (loading || error || !metas) {
    return (
      <div>
        {loading
          ? 'Loading...'
          : error
            ? `Error: ${error}`
            : 'No metadata available'}
      </div>
    )
  }

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen gap-20">
        <div className="flex flex-col text-center h-60">
          <span className="font-extrabold text-8xl text-center tracking-wider	w-[500px]">
            {metas?.title || 'INSERTAR ENVASE'}
          </span>
        </div>
        <img
          src={metas.centerImage}
          alt="Insert image"
          className="m-10 mb-20 w-auto h-[500px]"
        />
        <span className="text-5xl text-center w-96">
          {metas?.description || 'El reciclaje comienza aquí'}
        </span>
      </div>
    </ScreenLayout>
  )
}

export default Insert
