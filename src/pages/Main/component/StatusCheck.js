import React from 'react';
import { PageTitle } from '../../../../src/component';

const StatusCheck = props => {
  const { orderStatusList } = props;

  const statusCheckList = (
    <div style={styles.container}>
      {orderStatusList.map(item => (
        <div style={styles.boxContainer}>
          <div style={styles.boxStyle}>{item.orderState}</div>
          <div style={styles.boxStyle}>{item.orderFrequency}</div>
        </div>
      ))}
    </div>
  );
  return (
    <div style={{ width: '100%', padding: '2.5%' }}>
      <div style={{ margin: '0 1%' }}>
        <PageTitle>
          주문 접수 현황 | <span style={{ fontSize: '17px' }}>(한달기준)</span>
        </PageTitle>
      </div>
      {statusCheckList}
    </div>
  );
};

export default StatusCheck;

const styles = {
  container: {
    margin: '3% 2%',
    width: '100%',
    display: 'flex'
  },
  boxContainer: {
    margin: '0 1%',
    width: '10%',
    height: '100px',
    backgroundColor: '#e8e8e8',
    border: '1px solid #e8e8e8',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  boxStyle: {
    width: '100%',
    // height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
