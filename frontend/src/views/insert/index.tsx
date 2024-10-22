import ScreenLayout from '../../components/layout/screenLayout'
import { usePageData } from '../../hooks/usePageData'
import { MetaDataInsert } from '../../interfaces'

const Insert = () => {
  const { data: metas, loading, error } = usePageData<MetaDataInsert>('Insert')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!metas) return <div>No metadata available</div>

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen gap-20">
        <div className="flex flex-col text-center h-60">
          <span className="font-extrabold text-8xl text-center tracking-wider	w-[500px]">
            {metas.title}
          </span>
        </div>
        <img
          src={metas.centerImage}
          alt="Insert image"
          className="m-10 mb-20 w-auto h-[500px]"
        />
        <span className="text-5xl text-center w-96">{metas.description}</span>
      </div>
    </ScreenLayout>
  )
}

export default Insert
