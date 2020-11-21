import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();

var body = {
  emp_email: 'emp@gmail.com',
  emp_pw: '0000',
};
export default {
  /**
   * @title findAll
   * @description 회사 로그인
   */
  companylogin: async () => {
    const url = `${backend_url}/v1/company/signin`;
    // `https://api.dnlab.kr`
    // const url = `http://api.dnlab.kr/v1/goods/6`;
    return await $http.post(url, body);
  },
};
