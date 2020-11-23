import { reviewAPI } from '.'
import { backend_url } from '../Utils'
import { ApiManager } from '../Utils'
const $http = new ApiManager()
export default {
  /**
   * @title findAll
   * @description 관리자 예약 조회
   */
  getReservation: async (num) => {
    const url = `${backend_url}/v1/reservation/${num}`
    return await $http.get(url)
  },
  postReservation: async (body) => {
    const url = `${backend_url}/v1/reservation`
    return await $http.post(url, body)
  },
}
