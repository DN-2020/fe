import React, { useState, useEffect } from 'react';
import { backend_url } from '../../../Utils';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Layout, Menu, Button } from 'antd';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import { get } from 'js-cookie';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
let config = {
  headers: {
    'Access-Control-Allow-Origin': true,
    // 'Set-Cookie': Axios.defaults.headers.common['Set-Cookie'],
    Authorization: get('accessToken'),
  },
};

const ReviewListPresenter = (props) => {
  let arr1 = [1];
  let history = useHistory();
  const [reviewNo, setReviewNo] = useState();
  const [key, setKey] = useState('');
  const [reviews, setreviews] = useState([]);
  const handleKey = (e) => {
    Axios.get(
      `${backend_url}/v1/goods/${
        props.goods_seq[e.key.replace(/\item_/g, '')]
      }/review`,
      config
    ).then((e) => {
      console.log(e);
      if (e.data.data != null) {
        arr1 = e.data.data.map((e) => {
          return {
            seq: e.review_seq,
            name: e.reservation_nm,
            review: e.review_content,
            starRate: e.review_grade,
            end: e.reservation_end,
          };
        });
        setreviews(arr1);
      } else {
        alert('리뷰가 없습니다');
      }
    });
  };

  const [currentPage, setCurrentPage] = useState(1); //시작
  const [postPerPage] = useState(5); //개수
  let indexOfLastPost = currentPage * postPerPage; //페이지에 마지막 데이터 인덱스/3
  let indexOfFirstPost = indexOfLastPost - postPerPage; //페이지 첫번째 데이터 인덱스/0
  let datas = reviews.slice(indexOfFirstPost, indexOfLastPost); //  1*5 last = 5 ,,, first = 0/0,3/
  let count = []; //  2*5 last = 10 ,,, first = 5
  let total = Math.ceil(reviews.length / postPerPage); //버튼count

  const column = [
    {
      title: '리뷰번호',
      key: 'seq',
      dataIndex: 'seq',
      render: (text) => (
        <div>
          {setReviewNo(text)}
          {text}
        </div>
      ),
    },
    {
      title: '상품명',
      key: 'seq',
      dataIndex: 'seq',
      render: (text) => (
        <div>
          {setReviewNo(text)}
          {text}
        </div>
      ),
    },
    {
      title: '사용자이름',
      key: 'name',
      dataIndex: 'name',
      render: (text) => <div>{text}</div>,
    },
    {
      title: '별점',
      key: 'starRate',
      dataIndex: 'starRate',
      render: (text) => <div>{text}</div>,
    },
    {
      title: '리뷰',
      key: 'review',
      dataIndex: 'review',
      render: (text) => <div>{text}</div>,
    },
  ];

  for (let i = 1; i <= total; i++) {
    count.push(i);
  }
  const handleRow = (data) => {
    console.log(data);
    // history.push(`/company/review/${data.seq}`);
    history.push({
      pathname: `/company/review/${data.seq}`,
      // search: `query=${data.seq}`,
      state: { detail: data },
    });
  };
  console.log(reviewNo);
  return (
    <>
      <Header style={style.headerLayout}>
        <h1>리뷰관리</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <div className="reviewContainer" style={style.reviewContainer}>
          <Layout className="reviewContent">
            <Sider>
              <h4 style={{ color: 'white', fontSize: '20px' }}>
                상품({props.goods_nm.length})
              </h4>
              {/**           <Menu theme="dark" selectedKeys={key} mode="inline">
                {props.goods_nm != null
                  ? menuData.map((item) => {
                      return (
                        <Menu.Item key={`r${item.seq}`} onClick={handleKey}>
                          {item.name}
                        </Menu.Item>
                      );
                    })
                  : 'data'}

                <Menu.Item onClick={handleKey}>{props.goods_nm[0]}</Menu.Item>
                  </Menu>**/}
              <Menu theme="dark" selectedKeys={key} mode="inline">
                {props.goods_nm != null
                  ? props.goods_nm.map((e) => {
                      return <Menu.Item onClick={handleKey}>{e}</Menu.Item>;
                    })
                  : 'noData'}
              </Menu>
            </Sider>
            <Content style={{ background: 'white', width: '100%' }}>
              <Table
                onRow={(record, rowIndex) => {
                  return {
                    onClick: (e) => handleRow(record, rowIndex),
                  };
                }}
                columns={column}
                dataSource={datas}
                pagination={false}
              ></Table>
              {count.map((e) => (
                <Button key={e} onClick={() => setCurrentPage(e)}>
                  {e}
                </Button>
              ))}
            </Content>
          </Layout>
        </div>
      </div>
    </>
  );
};

ReviewListPresenter.propTypes = {};
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  reviewContainer: {
    fontSize: '20px',
    textAlign: 'left',
    margin: '1%',
    height: '70%',
    width: '100%',
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
  reviewContent: {
    width: '100%',
    height: '100%',
  },
};
export default ReviewListPresenter;
