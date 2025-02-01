import { Movement } from '../interfaces'
import WebApi from './webApi'

class WebApiAeco {
  static getCompany() {
    return WebApi.ApisType({ url: '/company', method: 'GET' })
  }

  static getPage(name: string) {
    return WebApi.ApisType({ url: `/pages?name=${name}`, method: 'GET' })
  }

  static findProduct(code: string) {
    return WebApi.ApisType({ url: `/products?code=${code}`, method: 'GET' })
  }

  static saveMovement(data: Movement) {
    return WebApi.ApisType({ url: '/movements', method: 'POST', body: data })
  }

  static getRewardCaterories() {
    return WebApi.ApisType({ url: '/reward-categories', method: 'GET' })
  }
  
  static getRewardSubCaterory(id: number) {
    return WebApi.ApisType({ url: `/rewards?reward_category=${id}`, method: 'GET' })
  }

} 

export default WebApiAeco
