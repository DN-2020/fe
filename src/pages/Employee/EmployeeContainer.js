import React, { useEffect, useState } from 'react';
import EmployeePresenter from './EmployeePresenter';
import Emp_Search from '../../api/Emp_Search';

const EmployeeContainer = (props) => {
  const [empdata, setEmpdata] = useState([]);
  useEffect(() => {
    Emp_Search.emp_search().then((e) => {
      setEmpdata(e.data);
    });
  }, []);
  return <EmployeePresenter empdata={empdata}></EmployeePresenter>;
};

export default EmployeeContainer;
