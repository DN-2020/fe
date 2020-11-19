import { backend_url, setCookie } from '../Utils'
import { ApiManager } from '../Utils'
const $http = new ApiManager()
const sample = {
  customer_email: 'admin',
  customer_pw: '0000',
}
const empSample = {
  emp_email: 'emp@gmail.com',
  emp_pw: '0000',
}
export default {
  /**
   * @title Login
   * @discription 로그인
   */

  empLogin: async () => {
    const url = `${backend_url}/v1/company/signin`
    const response = await $http.post(url, empSample)

    setCookie('accessToken', response.data.accessToken)
    setCookie('company', response.data.company_seq)
    return response
  },
  login: async () => {
    const url = `${backend_url}/v1/signin`
    const response = await $http.post(url, sample)

    setCookie('accessToken', response.data.accessToken)
    return response
  },
  getUser: async () => {
    const url = `${backend_url}/v1/user/info`
    const response = await $http.get(url)

    return response
  },
}
