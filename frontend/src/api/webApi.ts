import { ApiParams } from '../interfaces'
import { fetchRequest } from './fetch'

class WebApi {
  static ApisType<T>({
    url,
    method = 'POST',
    body = {},
    headers = {},
  }: ApiParams): Promise<T> {
    const options = {
      url,
      method,
      body: method !== 'GET' ? body : undefined,
      headers: headers ? headers : {},
    }
    console.log("🚀 ~ WebApi ~ body:", body)

    return fetchRequest<T>(options)
  }
}

export default WebApi
