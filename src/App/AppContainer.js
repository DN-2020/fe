import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';
import { withRouter } from 'react-router-dom';

const AppContainer = (props) => {
  return <AppPresenter />;
};

export default withRouter(AppContainer);
