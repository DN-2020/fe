import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
import Cookies from 'js-cookie';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 유저 정보 확인
   */
  getUser: async () => {
    // const url = `${backend_url}/v1/user/info`;
    const url = `http://192.168.64.94:8080/v1/user/info`;
    // console.log(Cookies.get('accessToken'));
    // const url = `http://api.dnlab.kr/v1/user/info`;
    return await $http.get(url);
  },
};
