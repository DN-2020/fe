import React from 'react';
import { Modal } from 'antd';
import { Descriptions, Button, Input } from 'antd';

import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const RegisterModal = (props) => {
	const { isOpen, title } = props;

	const toggleOnChange = () => {
		if (props.onChange) props.onChange(!isOpen);
	};

	//
	const onOk = () => {
		if (props.handleDateSelect()) props.handleDateSelect();
		else toggleOnChange();
	};

	//
	const onCancel = () => {
		if (props.onCancel) props.onCancel();
		else toggleOnChange();
	};

	const abc = () => {
		console.log(props.start);
	};
	return (
		<div>
			<Modal
				title={title}
				width={props.width}
				visible={isOpen}
				onOk={onOk}
				onCancel={onCancel}
				style={{ top: 20 }}
			>
				<div>
					<Descriptions title="일정 등록하기" bordered>
						<Descriptions.Item label="날짜선택" span={3}>
							<RangePicker
								format={dateFormat}
								onChange={(e) => props.dateHandler(e)}
							/>
						</Descriptions.Item>

						<Descriptions.Item label="일정명" span={3}>
							{' '}
							<Input onChange={(e) => props.titleHandler(e)}></Input>
						</Descriptions.Item>
					</Descriptions>
					<Space direction="vertical" size={12}></Space>
				</div>
			</Modal>
		</div>
	);
};

RegisterModal.defaultProps = {
	isOpen: false,
	onChange: () => {},
	name: 'defaultModal',
	title: 'Modal',
	// onOk: () => {},
	// onCancel: () => {}
};

export default RegisterModal;
