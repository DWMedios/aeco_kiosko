import { useNavigate } from 'react-router-dom'
import { TicketButtonInterface } from '../../interfaces'
import WebApiAeco from '../../api/webApiAeco'
import { getSessionStorage } from '../../utils/manageStorage'

const TicketButton = ({
  imageSrc,
  altText,
  buttonText,
  buttonClass = 'flex flex-col items-center justify-between bg-white p-4 h-[250px] z-10',
  imgClass = 'w-[150px] h-[150px] border-4 border-[#027333] border-solid p-3 rounded-lg',
  textClass = 'text-4xl font-medium',
}: TicketButtonInterface) => {
  const navigate = useNavigate()

  const printerTicket = async () => {
    try {
      const movementId = getSessionStorage('movementId')
      if (movementId) {
        await WebApiAeco.printerTicket(Number(movementId))
        // navigate('/finalView')
      }
    } catch (error) {
      // navigate('/ticket')
    }
  }

  return (
    <button
      onClick={printerTicket}
      className={`${buttonClass} opacity-50 cursor-not-allowed`}
    >
      <img src={imageSrc} alt={altText} className={imgClass} />
      <span className={textClass}>{buttonText}</span>
    </button>
  )
}

export default TicketButton
