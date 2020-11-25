import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 회원 예약 취소
   */
  deleteReservation: async (num, body) => {
    // const url = `${backend_url}/v1/admin/reservation`;
    const url = `${backend_url}/v1/reservation/${num}`;
    // const url = `${backend_url}/v1/admin/reservation`;
    // const url = `${backend_url}/v1/admin/reservation`;

    // const url = `http://192.168.64.94:8080/v1/goodsdetail/5/review`;

    return await $http.put(url, body);
  },
};
