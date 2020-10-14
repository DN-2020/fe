import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Layout, Table, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from './component';
const { Header, Footer, Sider, Content } = Layout;

const ResListPresenter = (props) => {
	const [key, setKey] = useState('');
	const handleDateClick = (e) => {
		console.log(e);
	};
	const handleKey = (e) => {
		setKey(`r${e.key}`);
	};
	const data = [
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
	return (
		<>
			<Header style={style.headerLayout}>
				<h1>예약관리</h1>
			</Header>
			<div className="contentContainer" style={style.container}>
				<div className="contentContent" style={style.content}>
					<Layout className="calendarContainer">
						<Sider>
							<h4 style={{ color: 'white', fontSize: '20px' }}>상품({1})</h4>
							<Menu theme="dark" selectedKeys={key} mode="inline">
								{data != null
									? data.map((item) => {
											return (
												<Menu.Item key={`r${item.seq}`} onClick={handleKey}>
													{item.name}
												</Menu.Item>
											);
									  })
									: 'noData'}
							</Menu>
						</Sider>
						<Content style={{ background: 'white' }}>
							<Calendar />
							{/* <FullCalendar
								plugins={[dayGridPlugin, interactionPlugin]}
								initialView="dayGridMonth"
								dateClick={handleDateClick}
							/> */}
						</Content>
					</Layout>
				</div>
			</div>
		</>
	);
};
ResListPresenter.propTypes = {};
const style = {
	headerLayout: {
		background: '#fff',
		textAlign: 'left',
	},
	infomationContainer: {
		fontSize: '20px',
		textAlign: 'left',
		width: '49%',
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
	itemContainer: {
		borderTop: '1px solid #ebebeb',
		margin: '5px',
		padding: '5px',
	},
	imageContainer: {},
	explainContent: {
		height: '80%',
	},
	explainTitle: {
		height: '10%',
	},
	content: {
		background: 'white',
		width: '98%',
		margin: '1%',
	},
	calendarContainer: {
		background: 'white',
	},
};
export default ResListPresenter;
