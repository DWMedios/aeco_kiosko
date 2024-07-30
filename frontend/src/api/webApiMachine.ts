import WebApi from "./webApi";

class WebApiCatalogs {
  static getCapacities() {
    return WebApi.ApisType({ url: `/hellow-world`, method: "GET" });
  }
}

export default WebApiCatalogs;
