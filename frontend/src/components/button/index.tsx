import { useNavigate } from 'react-router-dom'
import {
  ButtonInterface,
  BorderRadiusEnum,
  FontSizeEnum,
  TextColorEnum,
  BackgroundButtonEnum,
  BorderColorEnum,
} from '../../interfaces'
import { useEffect } from 'react'

const Button = ({
  action,
  label = 'iniciar',
  bgColor = BackgroundButtonEnum.white,
  borderRadius = BorderRadiusEnum.xl3,
  textColor = TextColorEnum.black,
  borderColor = BorderColorEnum.green,
  url,
  fontSize = FontSizeEnum.xl3,
  positionButton = null,
}: ButtonInterface) => {
  const navigation = useNavigate()

  useEffect(()=>{console.log(borderColor)},[borderColor])

  return (
    <>
      <div className="w-full flex justify-center mb-10 z-10">
        <button
          onClick={() => (action && action(), url && navigation(url))}
          className={`${bgColor} w-[550px] p-2 h-[150px] rounded-${borderRadius} border-solid border-4 ${borderColor} ${textColor} font-extrabold text-${fontSize} ${positionButton} bottom-1/4`}
        >
          {label}
        </button>
      </div>
    </>
  )
}

export default Button
