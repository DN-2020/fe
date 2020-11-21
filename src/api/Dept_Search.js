import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 부서 전체 조회
   */
  dept_search: async () => {
    const url = `${backend_url}/v1/dept`;
    return await $http.get(url);
  },
};
