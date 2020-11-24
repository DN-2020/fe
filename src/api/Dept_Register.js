import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title register
   * @description 부서 등록
   */
  dept_register: async (body) => {
    // const url = `http://192.168.64.14:8080/v1/company/1/emp`;
    const url = `${backend_url}/v1/dept`;
    console.log(body)
    return await $http.post(url,body);
    
  }
};