import { backend_url, setCookie } from '../Utils'
import { ApiManager } from '../Utils'
const $http = new ApiManager()

export default {
  /**
   * @title Login
   * @discription 로그인
   */

  getCategory: async () => {
    const url = `${backend_url}/v1/goods/type`
    const response = await $http.get(url)

    return response
  },
}
