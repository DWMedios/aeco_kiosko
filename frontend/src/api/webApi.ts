import { fetchRequest } from "./fetch";

// import { fetchRequest } from "./fetch";

// class WebApi {
//   static ApisType = (url, method = "post", params = {}) => {
//     switch (method) {
//       case "post":
//         return fetchRequest(url, params);
//         break;
//       case "put":
//         return fetchRequest(url, params);
//         break;
//       case "get":
//         return fetchRequest(url);
//         break;
//       case "delete":
//         return fetchRequest(url);
//       case "patch":
//         return fetchRequest(url, params);
//         break;
//     }
//   };
// }

// export default WebApi;

// src/api/WebApi.ts

interface WebApiParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: object;
}

class WebApi {
  static ApisType<T>({
    url,
    method = "POST",
    params = {},
  }: WebApiParams): Promise<T> {
    const options = {
      url,
      method,
      body: method !== "GET" ? params : undefined,
    };

    return fetchRequest<T>(options);
  }
}

export default WebApi;
