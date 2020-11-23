import { backend_url } from '../Utils'
import { ApiManager } from '../Utils'
const $http = new ApiManager()
export default {
  /**
   * @title get promotion
   * @discription 프로모션 리스트 조회
   */
  getPromotion: async () => {
    const url = `${backend_url}/v1/promotion`

    return await $http.get(url)
  },
  getPromotionDetail: async (num) => {
    const url = `${backend_url}/v1/promotion/${num}`
    return await $http.get(url)
  },
}
