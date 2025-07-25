import { useEffect, useRef, useState } from 'react'
import { MediaItem } from '../../interfaces'
import WebApiAeco from '../../api/webApiAeco'

const MediaPlayer = () => {
  const intervalMs = 20000
  const [media, setMedia] = useState<MediaItem[]>([])
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>()
  const [firstLoad, setFirstLoad] = useState(false)
  const [hasRunToday, setHasRunToday] = useState(false)

  const mediasExample: MediaItem[] = [
    { id: '1', type: 'video', src: 'staticAdvertisings/ayuntaeco.mp4' },
  ]

  useEffect(() => {
    if (!firstLoad) { 
        getAdvertising() 
        setFirstLoad(true)
    }
    const interval = setInterval(() => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()

      
      if (hours === 1 && minutes === 0 && !hasRunToday) {
        getAdvertising()
      }

      if (hours === 0 && minutes === 1) {
        setHasRunToday(false)
      }
    }, 3600000) // cada hora

    return () => clearInterval(interval)
  }, [])

  const getAdvertising = async () => {
    try {
      const response = await WebApiAeco.getAdvertising()
      if (response.length>0)
        setMedia(response.map((item: any) => {
            return ({
                id: item.id,
                type: item.mime_type.toLowerCase().split('/')[0] === 'video' ? 'video' : 'image',
                src: item.path.substring(item.path.indexOf('synchronized')), // Remove leading slash
            });
        }))
      else setMedia(mediasExample)
    } catch (error) {
      console.error('Error fetching advertising:', error)
      setMedia(mediasExample) // Fallback to example data
    }
  }

  useEffect(() => {
    if (!media.length) return
    timerRef.current = setInterval(
      () => setIndex((prev) => (prev + 1) % media.length),
      intervalMs,
    )
    return () => clearInterval(timerRef.current!)
  }, [media, intervalMs])

  if (!media.length) return <p>Cargando…</p>
  const current = media[index]

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {current.type === 'image' ? (
        <img
          src={current.src}
          alt={current.id}
          style={{
            width: '100%',
            maxHeight: '100%',
            objectFit: 'fill',
          }}
        />
      ) : (
        <video
          key={current.id}
          src={current.src}
          autoPlay
          muted={false}
          playsInline
          controls={false}
          style={{
            width: '100vw',
            maxHeight: '100%',
            objectFit: 'fill',
          }}
        />
      )}
    </div>
  )
}

export default MediaPlayer
