import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 유저 정보 확인
   */
  getUser: async () => {
    const url = `${backend_url}/v1/user/info`;
    // const url = `http://api.dnlab.kr/v1/user/info`;
    return await $http.get(url);
  },
};
