import React from 'react';
import PropTypes from 'prop-types';
import DetailContent from './components/DetailContent'
import DetailHeader from './components/DetailHeader'
import {Layout} from 'antd'

const { Header, Footer,Content } = Layout;

const DetailPresenter = props => {
    return (
        <>
        <Layout>
            <Header>
            <DetailHeader/>
            </Header>
            <div style ={{ overflow : "scroll"}} >
            <Layout style = {{marginLeft : "20%" ,  marginRight : "20%"   , backgroundColor : "#ffffff", height : 900}}>
            <Content><DetailContent/></Content>
    {/**<Footer>footer</Footer>**/}
    <Footer></Footer>
    </Layout>    
    </div>    
    </Layout>
        </>
    );
};

DetailPresenter.propTypes = {
    
};

export default DetailPresenter;