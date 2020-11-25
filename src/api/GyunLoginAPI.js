import { backend_url, setCookie } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();

export default {
	/**
	 * @title Login
	 * @discription 로그인
	 */

	empLogin: async (body) => {
		const url = `${backend_url}/v1/company/signin`;

		return await $http.post(url, body);
	},
	login: async (body) => {
		const url = `${backend_url}/v1/signin`;

		return await $http.post(url, body);
	},
	getUser: async () => {
		const url = `${backend_url}/v1/user/info`;
		const response = await $http.get(url);

		return response;
	},
};
