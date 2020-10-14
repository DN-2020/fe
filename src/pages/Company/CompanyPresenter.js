import React from 'react'
import { Table, Tag, Space,Button,Layout  } from 'antd';
const { Column, ColumnGroup } = Table;
const { Content, Sider, Header } = Layout;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const CompanyPresenter = (props) => {
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
    <h2>회사관리</h2>
  <Table dataSource={data}>
   
    <Column title="번호" dataIndex="age" key="age" />
    <Column title="회사명" dataIndex="age" key="age" />
    <Column title="회사 이메일" dataIndex="address" key="address" />
    <Column
      title="전화번호"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a href="http://localhost:3000/companyDetail">Invite {record.lastName}</a>
     
        </Space>
      )}
    />
    <Column
      title="삭제"
      key="action"
      render={(text, record) => (
        <Space size="middle">
         
          <Button>삭제</Button>
        </Space>
      )}
    />
  </Table>

    </div>
          </Content>
        </Layout>
      </Layout>
    </div>
    );
  </>
   
  )
}

CompanyPresenter.propTypes = {

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

export default CompanyPresenter

