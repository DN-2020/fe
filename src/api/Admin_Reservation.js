import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 관리자 예약 조회
   */
  getReservation: async () => {
    // const url = `${backend_url}/v1/admin/reservation`;
    const url = `${backend_url}/v1/company/1/reservation`;
    // const url = `${backend_url}/v1/admin/reservation`;
    // const url = `${backend_url}/v1/admin/reservation`;

    // const url = `http://192.168.64.94:8080/v1/goodsdetail/5/review`;

    return await $http.get(url);
  },
};
