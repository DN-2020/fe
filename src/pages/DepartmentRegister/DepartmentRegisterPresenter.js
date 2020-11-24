import React, { useState, useEffect, useContext } from 'react'
import Dept_Register from '../../api/Dept_Register'

import { Form, Input, InputNumber, Button, Select, Layout } from 'antd';
import { useHistory } from 'react-router-dom'

function DepartmentRegisterPresenter(props) {
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
let history = useHistory()
const [deptName, setDeptName] = useState('')
const [deptManager, setDeptManager] = useState('')
const [deptPath, setDeptPath] = useState('')


const registerDept = async (
    deptName,
    deptManager,
    deptPath,
    
  ) => {
	  
    const body = {
		dept_nm: deptName,
		dept_path: deptPath,
		dept_manager:deptManager,
    
    }
    const response = await Dept_Register.dept_register(body)
    if (response.code == 200) {
	  console.log("등록")
      history.push('/company/department')
    }
  }
 


  
  const onFinish = (values) => {
	console.log(values);
};


  return (
    <>
			<Header style={style.headerLayout}>
				<h1>부서등록</h1>
			</Header>
			<div className="contentContainer" style={style.container}>
				<Layout style={{ minHeight: '100vh' }}>
					<Layout className="site-layout">
						<Content style={{ margin: '0 16px' }}>
							<div
								style={{
									marginTop: '1%',
									marginLeft: '1%',
									marginRight: '1%',
									background: 'white',
								}}
							>
								<h2>부서등록</h2>
								<Form
									{...layout}
									name="nest-messages"
									onFinish={onFinish}
									validateMessages={validateMessages}
								>
									<Form.Item label="부서명">
									    <Input onChange={(e) => {setDeptName(e.target.value)}}/>
									</Form.Item>
									<Form.Item label="관리자">
										<Input onChange={(e) => {setDeptManager(e.target.value)}}/>
									</Form.Item>
									<Form.Item label="경로">
										<Input onChange={(e) => {setDeptPath(e.target.value)}}/>
									</Form.Item>
								    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
									<Button
              type={'primary'}
              style={{ marginRight: '10px' }}
              onClick={() => {
                registerDept(
				  deptName,
				  deptManager,
                  deptPath,
                  
                )
              }}
            >
              등록
            </Button>
										&nbsp;
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
DepartmentRegisterPresenter.propTypes = {};
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

