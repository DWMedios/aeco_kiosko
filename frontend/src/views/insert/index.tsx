import { usePageData } from '../../hooks/usePageData'

import { MetaDataInsert } from '../../interfaces'

import ScreenLayout from '../../components/layout/screenLayout'
import { useEffect } from 'react'
import useWebSocket from '../../hooks/useWebSocket'
import { useNavigate } from 'react-router-dom'

const Insert = () => {
  const navigation = useNavigate()
  const { data: metas, loading, error } = usePageData<MetaDataInsert>('Insert')
  const { command } = useWebSocket()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation('/unidentified')
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(()=>{
    const { success, message } = command
    if (success && message === 'I') {
       navigation('/scanning')
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
