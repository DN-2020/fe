import React, { useEffect } from 'react'
import MainPresenter from "./MainPresenter"
import LoginAPI from '../../api/LoginAPI'

const MainContainer = (props) => {
  useEffect(()=> {
    LoginAPI.PostUser().then((e)=> console.log(e));
  }, []);
  return (
    <MainPresenter props={props}></MainPresenter>
  )
}

export default MainContainer;
