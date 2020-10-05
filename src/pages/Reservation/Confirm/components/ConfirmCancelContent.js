import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Modal } from 'antd';
import { RightSquareOutlined } from '@ant-design/icons';

/*
npm install --save @ant-design/icons
*/

const ConfirmContent = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const showModal = ({ data }) => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div>
      <h style={{ fontSize: '30px' }}>취소내역</h>
      <List bordered style={style}>
        <List.Item actions={[<RightSquareOutlined onClick={showModal} />]}>
          <List.Item.Meta
            description={
              <p>
                <h style={{ fontSize: 40 }}>{data.name}</h> <br /> 체크인 :
                {data.checkin}
                <br />
                체크아웃 : {data.checkout} <br />
                이름: {data.username}
                <br /> 결제금액 : {data.price}
                <br /> <br />
                <hr />
                취소사유 : {data.cancelreason}
              </p>
            }
          />
        </List.Item>
      </List>

      <Modal
        title="영수증"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{data.name}</p>
        <p>체크아웃 :{data.checkout}</p>
        <p>이름: {data.username}</p>
        <p>결제금액 :{data.price}</p> <hr />
        <p> 취소사유 : {data.cancelreason} </p>
      </Modal>
    </div>
  );
};

ConfirmContent.propTypes = {};

const style = {
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '3%',
};

export default ConfirmContent;
