import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
const body = {
  customer_email: 'email',
  customer_nm: 'name',
  customer_tel: 'phonnumber',
  customer_address: 'address',
  customer_detail_address: 'detailAddress',
  customer_post: '33245',
};
export default {
  /**
   * @title findAll
   * @description 회원 정보 수정
   */

  UserRevise: async () => {
    // const url = `${backend_url}/v1/admin/reservation`;
    const url = `${backend_url}/v1/user/info`;
    // const url = `${backend_url}/v1/admin/reservation`;
    // const url = `${backend_url}/v1/admin/reservation`;

    // const url = `http://192.168.64.94:8080/v1/goodsdetail/5/review`;

    return await $http.post(url, body);
  },
};
