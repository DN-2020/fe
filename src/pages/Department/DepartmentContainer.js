import React, { useEffect } from 'react';
import DepartmentPresenter from './DepartmentPresenter';
import Dept_Search from '../../api/Dept_Search';
const DepartmentContainer = (props) => {
  useEffect(() => {
    Dept_Search.dept_search().then((e) => {
      console.log(e);
    });
  }, []);
  return <DepartmentPresenter></DepartmentPresenter>;
};

export default DepartmentContainer;
