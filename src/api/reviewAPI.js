import { reviewAPI } from '.'
import { backend_url } from '../Utils'
import { ApiManager } from '../Utils'
const $http = new ApiManager()
export default {
  /**
   * @title findAll
   * @description 사용자 리뷰 목록
   */
  getReview: async () => {
    const url = `${backend_url}/v1/goods/company/list?t_company_seq=1`

    return await $http.get(url)
  },
}
