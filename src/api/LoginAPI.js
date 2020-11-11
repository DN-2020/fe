import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
import { setCookie } from '../../src/Utils';
const $http = new ApiManager();
const SUCCESS_CODE = 200;
var body = {
  customer_email: 'test22',
  customer_pw: '0000',
};
export default {
  /**
   * @title findAll
   * @description 관리자 로그인
   */

  PostUser: async () => {
    const url = `${backend_url}/v1/signin`;
    // return await $http.post(url, body);
    let api = await $http.post(url, body);
    setCookie('accessToken', api.data.access_token);
    return console.log(api);
  },
};
