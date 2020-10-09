import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Card, Button } from 'antd';
import Search from './components/Search';
import Modify from './components/Modify';
import AccountInfoSider from './components/AccountInfoSider';

const { Header, Footer, Sider, Content } = Layout;
const AccountInfoPresenter = (props) => {
  const [page, setPage] = useState(true);

  const ChangeInfo = (e) => {
    setPage(!page);
  };

  const data = {
    name: '홍길동',
    email: 'hong12@naver.com',
    phonenum: '000-0000-0000',
  };

  return (
    <>
      <Layout style={style.outlayout}>
        <Layout style={style.inlayout}>
          <Sider style={style.sider}>
            <AccountInfoSider />
          </Sider>

          <Content>
            <Card
              style={style.card}
              extra={
                page ? <Button onClick={ChangeInfo}>편집하기</Button> : null
              }
            >
              {page ? (
                <Search data={data} />
              ) : (
                <Modify props={{ ChangeInfo, data }} />
              )}
            </Card>
          </Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </>
  );
};

AccountInfoPresenter.propTypes = {};

const style = {
  outlayout: {
    height: 800,
  },
  inlayout: {
    marginLeft: 'auto',
    backgroundColor: '#ffffff',
    width: 950,
    marginRight: 'auto',
  },
  sider: {
    height: 300,
    marginTop: '10%',
    marginLeft: 'auto',
  },
  card: {
    width: 500,
    height: 500,
    marginTop: '10%',
    marginLeft: '10%',
    borderColor: 'black',
  },
};

export default AccountInfoPresenter;
