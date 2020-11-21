import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
import { setCookie } from '../../src/Utils';
import Cookies from 'js-cookie';
const $http = new ApiManager();
const SUCCESS_CODE = 200;
var body = {
  customer_email: 'admin',
  customer_pw: '0000',
};
export default {
  /**
   * @title findAll
   * @description 관리자 로그인
   */

  PostUser: async () => {
    const url = `${backend_url}/v1/signin`;
    // const url = `http://192.168.64.14:8080/v1/signin`;
    // return await $http.post(url, body);
    // let api = await $http.post(url, body);
    // await $http.post(url, body).then((res) => console.log(res.headers));
    // setCookie('accessToken', api.data.access_token);

    // console.log(api);
    // localStorage.setItem('accessToken', api.data.access_token);
    // return api;
    // var myRequest = new Request(url, body);
    // var myHeaders = myRequest.headers
    //////////////////////////////////////////////
    //////////////////////////////////////////////////
    // var myHeaders = new Headers();

    // var myInit = {
    //   method: 'post',
    //   // headers: myHeaders,
    //   body: body,
    //   mode: 'cors',
    //   cache: 'default',
    // };
    // var myRequest = new Request(url, myInit);

    // var myContentType = myRequest; // returns 'image/jpeg'
    // return console.log(myContentType);
    ////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    // var myImage = document.querySelector('img');

    // // var myRequest = new Request(url);

    // fetch(url).then(function (response) {
    //   console.log(response.headers); // returns a Headers{} object
    //   response.blob().then(function (myBlob) {
    //     var objectURL = URL.createObjectURL(myBlob);
    //     myImage.src = objectURL;
    //   });
    // });

    /////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    // http://192.168.64.94:8080/v1/user/info
    var aa = await $http
      .post(url, body)
      // .then((response) => console.log(response.data));
      .then((res) => setCookie('accessToken', res.data.accessToken));

    return aa;
  },

  //     .then(res => res.json()).then(res => {
  //       let token = res.token;
  //       console.log("token: ", token);
  // });

  //   var requestOptions = {
  //     method: 'POST',
  //     // headers: myHeaders,
  //     body: body,
  //     redirect: 'follow',
  //   };

  //   fetch('https://api.dnlab.kr/v1/signin', requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result));
  //   // .catch((error) => console.log('error', error));

  // onLogin = (email, password) => {
  //   const data = {
  //     email,
  //     password,
  //   };
  //   axios.post('/login', data).then(response => {
  //     const { accessToken } = response.data;

  //     // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  //     // accessToken을 localStorage, cookie 등에 저장하지 않는다!

  //   }).catch(error => {
  //     // ... 에러 처리
  //   });
  // }
  // },

  Logout: async () => {
    // const url = `${backend_url}/v1/user/review/list`;
    const url = `http://192.168.64.94:8080/v1/logout`;

    var aa1 = await $http
      .post(url, body)
      // .then((response) => console.log(response.data.accessToken));
      .then((res) => setCookie('refreshToken', res.data.refreshToken));

    return aa1;
    // return await $http.post(url);
  },
};
