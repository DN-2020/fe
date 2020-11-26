import React, { useEffect } from 'react';
import MainPresenter from './MainPresenter';
import LoginAPI from '../../api/LoginAPI';

const MainContainer = (props) => {
	return <MainPresenter props={props}></MainPresenter>;
};

export default MainContainer;
