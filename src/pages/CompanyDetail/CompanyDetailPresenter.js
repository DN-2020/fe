import React from 'react';
import { Descriptions, Button, Input, Layout } from 'antd';
const { Content, Sider, Header } = Layout;
const CompanyDetailPresenter = (props) => {
	return (
		<>
			<Header style={style.headerLayout}>
				<h1>회사 상세</h1>
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
								<Descriptions bordered size={'default'}>
									<Descriptions.Item span={3} label="회사이름">
										<Input placeholder="회사이름" />
									</Descriptions.Item>
									<Descriptions.Item span={1.5} label="회사이메일">
										<Input placeholder="회사이메일" />
									</Descriptions.Item>
									<Descriptions.Item span={1.5} label="회사 전화번호">
										<Input placeholder="회사 전화번호" />
									</Descriptions.Item>
									<Descriptions.Item span={1.5} label="사업자번호">
										<Input placeholder="사업자번호" />
									</Descriptions.Item>
									<Descriptions.Item span={1.5} label="일련번호">
										<Input placeholder="일련번호" />
									</Descriptions.Item>
									<Descriptions.Item span={3} label="주소">
										<Input placeholder="주소" />
									</Descriptions.Item>
								</Descriptions>
								<br />
								<Button>수정</Button>&nbsp;&nbsp;&nbsp;
								<a href="http://localhost:3000/company/companys">
									<Button>돌아가기</Button>
								</a>
							</div>
						</Content>
					</Layout>
				</Layout>
			</div>
			);
		</>
	);
};

CompanyDetailPresenter.propTypes = {};

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
export default CompanyDetailPresenter;
