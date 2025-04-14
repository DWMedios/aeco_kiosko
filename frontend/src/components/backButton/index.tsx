import { useNavigate } from 'react-router-dom'
import { BackButtoninterface } from '../../interfaces'

const BackButton = ({
  url,
  imageSrc = '/images/backbutton.png',
}: BackButtoninterface) => {
  const navigation = useNavigate()

  return (
    <>
      <div className="flex flex-col fixed left-8 top-0 justify-center items-center w-40 pt-7 mt-5 z-10">
        <button
          type="button"
          onClick={() => navigation(url)}
          className={'rounded-3xl w-[90px] h-[90px] z-10'}
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt="back-button"
              className="w-full h-full object-contain z-10"
            />
          )}
        </button>
        <span className="tracking-wider font-medium z-10 text-4xl mt-2">
          Regresar
        </span>
      </div>
    </>
  )
}

export default BackButton
