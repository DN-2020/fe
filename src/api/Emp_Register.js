import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title register
   * @description 사원 등록
   */
  emp_register: async (body) => {
    // const url = `http://192.168.64.14:8080/v1/company/1/emp`;
    const url = `${backend_url}/v1/company/signup`;
    console.log(body)
    return await $http.post(url,body);
    
  },
//   postProduct: async (body) => {
//     const url = `${backend_url}/v1/goods`
//     console.log(body)
//     return await $http.post(url, body)
//   },
};
