import React, { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter';
import MainAPI from '../../api/MainAPI';
import LoginAPI from '../../api/LoginAPI';
import UserGetAPI from '../../api/UserGetAPI';
import { setCookie, getCookie } from '../../Utils';
const MainContainer = (props) => {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    // MainAPI.getReview().then((e) => console.log(e));
    // LoginAPI.PostUser().then((e) => {
    //   if (e.msg === '로그인을 성공적으로 하였습니다.') {
    //     setCookie('accessToken', e.data.access_token);
    //     UserGetAPI.getUser().then((e) => console.log(e));
    //   }
    // });
    // LoginAPI.PostUser().then((e) => {
    //   setCookie('accessToken', e.data.access_token);
    // console.log(`accessToken=${getCookie('accessToken')}`);
    //   console.log(e);
    // });
    // LoginAPI.PostUser().then((e) => console.log(e));

    LoginAPI.PostUser();
    UserGetAPI.getUser().then((e) => console.log(e));
  }, []);

  return <MainPresenter props={props}></MainPresenter>;
};

export default MainContainer;
