import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Radio, Input } from 'antd';
import { Layout, Menu, List, Button } from 'antd';
import {useHistory} from "react-router-dom";
const { Content } = Layout;

const CancelPresenter = (props) => {
  let history=useHistory();
  const [CurrentVal, setCurrentVal] = useState('');

  const data = [
    { id: 1, value: '취소사유1취소사유1취소사유 입니다' },
    { id: 2, value: '취소사유2취소사유2취소사유 입니다' },
    { id: 3, value: '취소사유3취소사유3취소사유 입니다' },
    { id: 4, value: '취소사유4취소사유4취소사유 입니다' },
    { id: 5, value: '취소사유5취소사유5취소사유 입니다' },
  ];

  const CheckedValue = (e) => {
    setCurrentVal(e.target.value);
  };

  return (
    <>
      <Layout>
        <Content style={{ textAlign: 'center' }}>
          <div style={style.DivStyle}>
            <Radio.Group>
              <List
                size="large"
                style={style.ListStyle}
                header={<div style={{ fontSize: '40px' }}>취소사유</div>}
                footer={
                  <div>
                    <Button onClick={()=>{history.push("/user/cancel/detail")}} type="primary">취소하기</Button>
                  </div>
                }
                dataSource={data}
                renderItem={(item) => (
                  <Radio
                    style={radioStyle}
                    value={item.value}
                    onChange={CheckedValue}
                  >
                    {item.value}
                  </Radio>
                )}
              />
              {console.log(CurrentVal)}
            </Radio.Group>
          </div>
        </Content>
      </Layout>
    </>
  );
};

CancelPresenter.propTypes = {};
const radioStyle = {
  marginTop: '3%',
  display: 'block',
  height: '50px',
  lineHeight: '30px',
  fontSize: '20px',
};
const style = {
  DivStyle: { marginTop: '5%', marginBottom: '10%' },
  ListStyle: {
    width: 400,
    height: 500,
    backgroundColor: '#ffffff',
  },
};
export default CancelPresenter;
