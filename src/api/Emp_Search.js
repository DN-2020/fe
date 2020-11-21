import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 사원 전체 조회
   */
  emp_search: async () => {
    // const url = `http://192.168.64.14:8080/v1/company/1/emp`;
    const url = `${backend_url}/v1/company/1/emp`;
    return await $http.get(url);
  },
};
