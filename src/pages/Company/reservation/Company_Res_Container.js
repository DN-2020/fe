import React, { useEffect } from 'react';
import Company_Res_Presenter from './Company_Res_Presenter';
import { withRouter } from 'react-router-dom';

const Company_Res_Container = (props) => {
  return <Company_Res_Presenter props={props}/>;
};

export default Company_Res_Container;
