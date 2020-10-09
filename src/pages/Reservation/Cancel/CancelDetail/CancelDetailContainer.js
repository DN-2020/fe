import React from 'react';
import CancelDetail from './CancelDetail'
import {Layout} from 'antd'
const { Header, Footer,Content } = Layout;

const CancelDetailContainer = () => {
    return (
        <Layout>
        <Header>
        </Header>
        <div style ={{ overflow : "scroll"}} >
        <Layout style = {{marginLeft : "20%" ,  marginRight : "20%"   , backgroundColor : "#ffffff", height : 900}}>
        <Content><CancelDetail/></Content>
        <Footer></Footer>
        </Layout>   
        </div>  
            </Layout>
    );
};

export default CancelDetailContainer;