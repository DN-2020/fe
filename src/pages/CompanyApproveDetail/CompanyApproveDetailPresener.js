import React from 'react'
import { Descriptions, Button,Layout  } from 'antd';
const { Content, Sider, Header } = Layout;
const CompanyApproveDetailPresener = (props) => {
  return (
    <>
      <Header style={style.headerLayout}>
        <h1>고객관리</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
           
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
            <div style={{marginLeft:100,marginRight:100}}>
  companydetail
  <Descriptions
          bordered
          title="회사등록"
          size={'default'}
        
        >
          <Descriptions.Item span={3} label="회사이름">회사이름</Descriptions.Item>
          <Descriptions.Item span={1.5} label="회사이메일">회사이메일</Descriptions.Item>
          <Descriptions.Item span={1.5} label="회사 전화번호">회사 전화번호</Descriptions.Item>
          <Descriptions.Item span={1.5} label="사업자번호">사업자번호</Descriptions.Item>
          <Descriptions.Item span={1.5} label="일련번호">일련번호</Descriptions.Item>
          <Descriptions.Item span={3} label="주소">주소</Descriptions.Item>
        </Descriptions>
        <br/>
        <Button>승인</Button>&nbsp;&nbsp;&nbsp;
        <Button>거절</Button>
  

    </div>
            </Content>
          </Layout>
        </Layout>
      </div>
      );
    </>
    
  )
}

CompanyApproveDetailPresener.propTypes = {

}
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
};
export default CompanyApproveDetailPresener