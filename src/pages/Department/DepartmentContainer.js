import React, { useEffect, useState } from 'react';
import DepartmentPresenter from './DepartmentPresenter';
import Dept_Search from '../../api/Dept_Search';
const DepartmentContainer = (props) => {
  const [deptdata, setDeptdata]=useState([]);
  useEffect(() => {
    Dept_Search.dept_search().then((e) => {
      setDeptdata(e.data);
      console.log(e);
    });
  }, []);
  return <DepartmentPresenter deptdata={deptdata}></DepartmentPresenter>;
};

export default DepartmentContainer;


