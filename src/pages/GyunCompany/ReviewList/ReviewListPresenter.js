import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import PostCodeInput from '../../../component/PostCodeInput';
const { Header, Footer, Sider, Content } = Layout;

const ReviewListPresenter = (props) => {
	let history = useHistory();
	const [key, setKey] = useState('');
	const handleKey = (e) => {
		setKey(`v${e.key}`);
	};
	const menuData = [
		{
			seq: 1,
			name: '아이템1',
			reservation: [{ startDate: '', endDate: '', name: '' }],
		},
		{
			seq: 2,
			name: '아이템2',
			reservation: [{ startDate: '', endDate: '', name: '' }],
		},
	];
	const column = [
		{
			title: '사용자이름',
			key: 'seq',
			dataIndex: 'seq',
			render: (text) => <div>{text}</div>,
		},
		{
			title: '별점',
			key: 'starRate',
			dataIndex: 'starRate',
			render: (text) => <div>{text}</div>,
		},
		{
			title: '리뷰',
			key: 'review',
			dataIndex: 'review',
			render: (text) => <div>{text}</div>,
		},
	];
	const data = [
		{
			key: '1',
			seq: '1',
			review: '굳',
			name: '사용자명',
			starRate: '4',
		},
		{
			key: '2',
			seq: '2',
			review: 'gooddddd',
			name: '사용자명',
			starRate: '4',
		},
	];
	const handleRow = (data) => {
		history.push(`/company/review/${data.seq}`);
	};
	return (
		<>
			<Header style={style.headerLayout}>
				<h1>리뷰관리</h1>
			</Header>
			<div className="contentContainer" style={style.container}>
				<div className="reviewContainer" style={style.reviewContainer}>
					<Layout className="reviewContent">
						<Sider>
							<h4 style={{ color: 'white', fontSize: '20px' }}>상품({1})</h4>
							<Menu theme="dark" selectedKeys={key} mode="inline">
								{menuData != null
									? menuData.map((item) => {
											return (
												<Menu.Item key={`r${item.seq}`} onClick={handleKey}>
													{item.name}
												</Menu.Item>
											);
									  })
									: 'data'}
							</Menu>
						</Sider>
						<Content style={{ background: 'white', width: '100%' }}>
							<Table
								onRow={(record, rowIndex) => {
									return { onClick: (e) => handleRow(record, rowIndex) };
								}}
								columns={column}
								dataSource={data}
							></Table>
						</Content>
					</Layout>
				</div>
			</div>
		</>
	);
};

ReviewListPresenter.propTypes = {};
const style = {
	headerLayout: {
		background: '#fff',
		textAlign: 'left',
	},
	reviewContainer: {
		fontSize: '20px',
		textAlign: 'left',
		margin: '1%',
		height: '70%',
		width: '100%',
	},
	contentLayout: {
		background: 'white',
		padding: 24,
		minHeight: 360,
		marginTop: '10px',
		marginLeft: '1%',
	},
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
	},
	reviewContent: {
		width: '100%',
		height: '100%',
	},
};
export default ReviewListPresenter;
