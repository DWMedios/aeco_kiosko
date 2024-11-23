import WebApi from './webApi'

class WebApiAeco {
  static getCompany() {
    return WebApi.ApisType({ url: '/company', method: 'GET' })
  }
  
  static getPage(name:string) {
    return WebApi.ApisType({ url: `/pages?name=${name}`, method: 'GET' })
  }
  
  static findProduct(code:string) {
    return WebApi.ApisType({ url: `/products?code=${code}`, method: 'GET' })
  }
}

export default WebApiAeco
