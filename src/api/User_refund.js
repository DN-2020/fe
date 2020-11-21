import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  /**
   * @title findAll
   * @description 회원 예약 취소 조회
   */
  getReservation: async () => {
    const url = `${backend_url}/v1/refund`;

    return await $http.get(url);
  },
};
