import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 아이템 전체 조회
   */
  findAll: async () => {
    const url = `${backend_url}/item`;
    return await $http.get(url);
  },
};
