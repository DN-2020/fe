import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { backend_url } from '../../../Utils';
import { Layout, Table, Menu } from 'antd';
// import { useHistory } from 'react-router-dom';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import { get } from 'js-cookie';
import { Calendar } from './component';
const { Header, Footer, Sider, Content } = Layout;

let data;
let arr1 = [{}];
let config = {
  headers: {
    'Access-Control-Allow-Origin': true,
    // 'Set-Cookie': Axios.defaults.headers.common['Set-Cookie'],
    Authorization: get('accessToken'),
  },
};

const ResListPresenter = (props) => {
  const [seq, setseq] = useState(1);
  const [key, setKey] = useState('');
  const [datas, setData] = useState();

  console.log(arr1);

  const handleKey = (e) => {
    Axios.get(
      `${backend_url}/v1/goods/${
        props.goods_seq[e.key.replace(/\item_/g, '')]
      }/reservation`,
      config
    ).then((e) => {
      console.log(e);
      if (e.data.data != 0) {
        arr1 = e.data.data.map((e) => {
          return {
            title: e.goods_detail_nm,
            content: e.goods_detail_nm,
            start: e.reservation_st,
            end: e.reservation_end,
          };
        });
        setData(arr1);
      } else {
        alert('예약내역이 없습니다.');
      }
    });
  };
  console.log(arr1[0].title);
  return (
    <>
      <Header style={style.headerLayout}>
        <h1>{arr1[0].title}</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <div className="contentContent" style={style.content}>
          <Layout className="calendarContainer">
            <Sider>
              <h4 style={{ color: 'white', fontSize: '20px' }}>
                상품({props.goods_name.length})
              </h4>
              <Menu theme="dark" selectedKeys={key} mode="inline">
                {props.goods_name != null
                  ? props.goods_name.map((e) => {
                      return <Menu.Item onClick={handleKey}>{e}</Menu.Item>;
                    })
                  : 'noData'}
              </Menu>
            </Sider>
            <Content style={{ background: 'white' }}>
              <Calendar props={datas} />
            </Content>
          </Layout>
        </div>
      </div>
    </>
  );
};
ResListPresenter.propTypes = {};
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  infomationContainer: {
    fontSize: '20px',
    textAlign: 'left',
    width: '49%',
  },
  contentLayout: {
    background: 'white',
    padding: 24,
    minHeight: 360,
    marginTop: '10px',
    marginLeft: '1%',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  itemContainer: {
    borderTop: '1px solid #ebebeb',
    margin: '5px',
    padding: '5px',
  },
  imageContainer: {},
  explainContent: {
    height: '80%',
  },
  explainTitle: {
    height: '10%',
  },
  content: {
    background: 'white',
    width: '98%',
    margin: '1%',
  },
  calendarContainer: {
    background: 'white',
  },
};
export default ResListPresenter;
