import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 사용자 리뷰 목록
   */
  getReview: async () => {
    // const url = `${backend_url}/v1/user/review/list`;
    // const url = `${backend_url}/v1/goods/6/review`;
    // const url = `${backend_url}/v1/company/1/review`;
    const url = `${backend_url}/v1/goods/company/list?t_company_seq=1`;
    // const url = `${backend_url}/v1/review/26`;

    // const url = `http://192.168.64.94:8080/v1/goodsdetail/5/review`;

    return await $http.get(url);
  },
};
