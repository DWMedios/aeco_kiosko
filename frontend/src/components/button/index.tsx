import { useNavigate } from 'react-router-dom'
import {
  ButtonInterface,
  BorderRadiusEnum,
  FontSizeEnum,
  TextColorEnum,
  BackgroundButtonEnum,
} from '../../interfaces'

const Button = ({
  label = 'iniciar',
  bgColor = BackgroundButtonEnum.white,
  borderRadius = BorderRadiusEnum.xl3,
  textColor = TextColorEnum.black,
  borderColor = null,
  url,
  fontSize = FontSizeEnum.xl3,
  positionButton = null,
}: ButtonInterface) => {
  const navigation = useNavigate()

  return (
    <>
      <div className="w-full flex justify-center mb-10 z-10">
        <button
          onClick={() => navigation(url)}
          className={`${bgColor} w-[550px] p-2 h-[150px] rounded-${borderRadius} ${borderColor} ${textColor} font-extrabold text-${fontSize} ${positionButton} bottom-1/4`}
        >
          {label}
        </button>
      </div>
    </>
  )
}

export default Button
