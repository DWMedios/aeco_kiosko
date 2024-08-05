import ButtonBack from '../../assets/img/button_back.svg';

function BackButton() {
  return (
    <div className="flex flex-col py-6 text-black rounded-lg w-36 items-center">
            <img src={ButtonBack} alt="Regresar" className="w-16 h-16"/>
            <span className='font-bold text-lg'>Regresar</span>
    </div>
  )
}

export default BackButton