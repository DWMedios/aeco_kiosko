import WebApiAeco from '../api/webApiAeco'
import { setLocalStorage } from '../utils/manageStorage'

const savePaperStatus = async () => {
  try {
    await WebApiAeco.getPaper()
    setLocalStorage('paperStatus', 'true')
  } catch (error) {
    setLocalStorage('paperStatus', 'false')
  }
}

export default savePaperStatus
