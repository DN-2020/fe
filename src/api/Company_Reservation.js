import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 회사 아이템별 예약 확인
   */
  getReservation: async () => {
    // const url = `${backend_url}/v1/admin/reservation`;
    // const url = `${backend_url}/v1/company/1/reservation`;
    const url = `${backend_url}/v1/goods/company/list?t_company_seq=1`;
    // const url = `${backend_url}/v1/goods/company/list?t_company_seq=1`;
    // /v1//goods/1/reservation
    // const url = `http://192.168.64.94:8080/v1/goodsdetail/5/review`;

    return await $http.get(url);
  },
};
