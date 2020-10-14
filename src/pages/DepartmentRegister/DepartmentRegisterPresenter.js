import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, InputNumber, Button,Select,Layout  } from 'antd';
const { Content, Sider, Header } = Layout;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const DepartmentRegisterPresenter = (props) => {
    const onFinish = (values) => {
        console.log(values);
      };
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
          <div style={{marginRight:300}}>
  <h2>부서등록</h2>
 <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
   
      <Form.Item label="부서선택">
          <Select>
            <Select.Option value="demo">부서1</Select.Option>
            <Select.Option value="demo">부서2</Select.Option>
            <Select.Option value="demo">부서3</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item
        name={['user', 'staff']}
        label="관리자"
      >
        <Input/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <a href="http://localhost:3000/department"><Button type="button">
          돌아가기
        </Button></a>&nbsp;
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
       
      </Form.Item>
    </Form>
  

    </div>
          </Content>
        </Layout>
      </Layout>
    </div>
    );
  </>
    
  )
}

DepartmentRegisterPresenter.propTypes = {

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

export default DepartmentRegisterPresenter
