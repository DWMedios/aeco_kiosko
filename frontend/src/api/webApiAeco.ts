import { Ticket } from '../interfaces'
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

  static saveTicket(ticket: Ticket) {
    return WebApi.ApisType({ url: '/tickets', method: 'POST', body: ticket })
  }

  static getRewardCategories() {
    return WebApi.ApisType({
      url: '/rewards/categories',
      method: 'GET',
    })
  }

  static getRewardsByType(type: string) {
    return WebApi.ApisType({
      url: `/rewards?type=${type}`,
      method: 'GET',
    })
  }

  static getPaper() {
    return WebApi.ApisType({ url: '/paper', method: 'GET' })
  }

  static printerTicket(id: number) {
    return WebApi.ApisType({
      url: '/printer-ticket',
      method: 'POST',
      body: { movement_id: id },
    })
  }

  static getMachine() {
    return WebApi.ApisType({
      url: '/validate-machine',
      method: 'GET',
    })
  }

  static getAdvertising() {
    return WebApi.ApisType({
      url: '/advertising',
      method: 'GET',
    })
  }
}

export default WebApiAeco
