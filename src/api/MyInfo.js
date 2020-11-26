import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
import MyInfo from '../api/';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 내정보 조회
   */
  getMyInfo: async () => {
    const url = `${backend_url}/v1/user/info`;
    // `https://api.dnlab.kr`
    // const url = `http://api.dnlab.kr/v1/goods/6`;
    return await $http.get(url);
  },
};
