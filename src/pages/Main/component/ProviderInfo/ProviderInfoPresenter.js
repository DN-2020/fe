import React from 'react';
import { Divider, Descriptions } from 'antd';

const ProviderInfoPresenter = props => {
  const { type, user, client, clientMemberList = [], itemList = [] } = props;
  return (
    client !== null && (
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: '3%'
        }}
      >
        <Descriptions
          title={<h2>{client.clientName}</h2>}
          colon={true}
          column={1}
        >
          <Descriptions.Item label="대표">
            {client.clientChief}
          </Descriptions.Item>
          <Descriptions.Item label="사업자 등록번호">
            {client.clientNumber}
          </Descriptions.Item>
          <Descriptions.Item label="전화번호">
            {client.clientTel}
          </Descriptions.Item>
          <Descriptions.Item label="휴대폰">
            {client.clientPhone}
          </Descriptions.Item>
          <Descriptions.Item label="활동 지역">
            {client.clientAddress}
          </Descriptions.Item>
          <Descriptions.Item label="활동 지역 상세">
            {client.clientAddressDetail}
          </Descriptions.Item>
          <Descriptions.Item label="직원 등록 수">
            {clientMemberList.length}
          </Descriptions.Item>
          <Descriptions.Item label="상품 등록 수">
            {itemList.length}
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  );
};

ProviderInfoPresenter.defaultProps = {
  type: null,
  user: null,
  client: null,
  clientMemberList: []
};

export default ProviderInfoPresenter;
