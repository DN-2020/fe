import React from 'react';
import Routes from '../route';
import "../App.css"
import Cus_Header from '../pages/Main/Cus_Header';

import Cus_Footer from '../pages/Main/Cus_Footer';
const AppPresenter = () => {
  return (
    <>
      {/* Main 레이아웃 설정 */}
      <div className="App">
        <Cus_Header />
        <Routes />
        <Cus_Footer />
      </div>
    </>
  );
};

export default AppPresenter;
