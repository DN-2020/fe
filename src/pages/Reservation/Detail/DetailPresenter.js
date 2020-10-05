import React from 'react';
import PropTypes from 'prop-types';
import DetailContent from './components/DetailContent';
import DetailHeader from './components/DetailHeader';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const DetailPresenter = (props) => {
  return (
    <>
      <Layout>
        <div style={{ overflow: 'scroll' }}>
          <Layout style={style}>
            <Content>
              <DetailContent />
            </Content>
          </Layout>
        </div>
      </Layout>
    </>
  );
};

DetailPresenter.propTypes = {};

const style = {
  marginLeft: '20%',
  marginRight: '20%',
  backgroundColor: '#ffffff',
  height: 900,
};
export default DetailPresenter;
