import { useEffect, useRef, useState } from 'react'
import { MediaItem } from '../../interfaces'

const MediaPlayer = () => {
  const intervalMs = 20000
  const [media, setMedia] = useState<MediaItem[]>([])
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>()

  const mediasExample: MediaItem[] = [
    { id: '1', type: 'video', src: 'advertisings/ayuntaeco.mp4' },
    { id: '1', type: 'video', src: 'advertisings/art.mp4' },
    { id: '2', type: 'image', src: 'advertisings/family.jpg' },
    { id: '3', type: 'image', src: 'advertisings/pc_gamer.jpg' },
    { id: '4', type: 'video', src: 'advertisings/quimic.mp4' },
    { id: '4', type: 'video', src: 'advertisings/robot.mp4' },
    { id: '4', type: 'image', src: 'advertisings/rv.jpg' },
    { id: '4', type: 'image', src: 'advertisings/technologia.jpg' },
  ]

  useEffect(() => {
    setMedia(mediasExample)
  }, [])

  useEffect(() => {
    if (!media.length) return
    timerRef.current = setInterval(
      () => setIndex((prev) => (prev + 1) % media.length),
      intervalMs
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