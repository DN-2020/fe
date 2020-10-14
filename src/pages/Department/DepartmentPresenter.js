import React from 'react';
import { Table, Tag, Space, Button, Layout } from 'antd';
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

const DepartmentPresenter = (props) => {
	return (
		<>
			<Header style={style.headerLayout}>
				<h1>부서관리</h1>
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
								<a href="http://localhost:3000/company/departmentRegister">
									<Button style={{ float: 'right' }}>등록</Button>
								</a>

								<Table dataSource={data}>
									<Column title="부서명" dataIndex="age" key="firstName" />
									<Column title="부서관리자" dataIndex="age" key="lastName" />
									<Column
										title="수정"
										key="action"
										render={(text, record) => (
											<Space size="middle">
												<Button>수정</Button>
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
	);
};

DepartmentPresenter.propTypes = {};
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

export default DepartmentPresenter;
