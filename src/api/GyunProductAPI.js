import { backend_url } from '../Utils'
import { ApiManager, getCookie } from '../Utils'
const $http = new ApiManager()
export default {
  /**
   * @title post thumnail
   * @discription 썸네일 업로드
   */
  postThumbnail: async (body) => {
    const url = `${backend_url}/v1/upload/image`
    console.log(body)
    return await $http.multipart(url, body)
  },
  postProduct: async (body) => {
    const url = `${backend_url}/v1/goods`
    console.log(body)
    return await $http.post(url, body)
  },
  getProductList: async () => {
    const company = getCookie('company')
    console.log(company)
    const url = `${backend_url}/v1/goods/company/list?t_company_seq=${company}`
    return await $http.get(url)
  },
  getProduct: async (num) => {
    const company = getCookie('company')
    const url = `${backend_url}/v1/goods/${num}`
    return await $http.get(url)
  },
  updateProduct: async (body, num) => {
    const url = `${backend_url}/v1/goods/${num}`
    return await $http.put(url, body)
  },
  getProductCat: async (num) => {
    const url = `${backend_url}/v1/search/${num}`
    return await $http.get(url)
  },
  getSearch: async (search) => {
    const url = `${backend_url}/v1/search?search=${search}`
    return await $http.get(url)
  },
}
