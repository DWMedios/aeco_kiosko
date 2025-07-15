import { useEffect, useRef, useState } from 'react'
import { MediaItem } from '../../interfaces'

export default function MediaPlayer() {
  // 1) Configuraciones
  const intervalMs = 20000 // 20s entre cambios
  const [media, setMedia] = useState<MediaItem[]>([])
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>()

  // 2) Ejemplo (IDs únicos)
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

  // 3) Cargar medios una sola vez
  useEffect(() => {
    setMedia(mediasExample)
    // Si más adelante llamas a tu API,
    // reemplaza esta línea por getMedias()
  }, [])

  // 4) Rotación automática
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

  // 5) Render
  return (
    <div
      style={{
        position: 'fixed', // ocupa la ventana completa
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
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain', // muestra todo el medio y lo centra
          }}
        />
      ) : (
        <video
          key={current.id}
          src={current.src}
          autoPlay
          muted
          playsInline
          controls={false}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      )}
    </div>
  )
}

/* Opcional: elimina márgenes del body dentro de tu entry point (index.css/ts) */
/* body { margin: 0 } */
