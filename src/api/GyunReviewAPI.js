import { backend_url, setCookie } from '../Utils'
import { ApiManager } from '../Utils'
const $http = new ApiManager()

export default {
  /**
   * @title Login
   * @discription 로그인
   */

  getReview: async (num) => {
    const url = `${backend_url}/v1/goods/${num}/review`
    const response = await $http.get(url)

    return response
  },
}
