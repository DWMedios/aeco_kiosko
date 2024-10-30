import { usePageData } from '../../hooks/usePageData'

import { MetaDataScanning } from '../../interfaces'

import ScreenLayout from '../../components/layout/screenLayout'

const Scanning = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataScanning>('Scanning')

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
    <ScreenLayout image={metas?.background || '/leafBackground.png'}>
      <div className="relative flex flex-col justify-center items-center h-screen gap-20">
        <div className="flex flex-col text-center h-60">
          <span className="font-extrabold text-8xl text-center tracking-wider	w-[500px]">
            {metas?.title || 'LEYENDO'}
          </span>
        </div>
        <img
          src={metas?.centerImage || '/images/containers.png'}
          alt="Scanning image"
          className="m-5 mb-20 w-auto h-[500px]"
        />
        <span className="text-5xl text-center w-[500px]">
          {metas?.description || 'Estamos trabajando para ti'}
        </span>
      </div>
    </ScreenLayout>
  )
}

export default Scanning
