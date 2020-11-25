import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
	Row,
	Col,
	Card,
	Carousel,
	Select,
	Form,
	Empty,
	Divider,
	Button,
	message,
	Upload,
	Modal,
	Avatar,
	Input,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import {
	RVWysiwygEditor,
	RVInput,
	RVAddressForm,
	RVPriceInput,
	PostCodeInput,
} from '../../../component';
// import { productApi, commonApi, fileApi } from 'src/api'

import HtmlParser from 'react-html-parser';
import { GyunProductAPI } from '../../../api';
import GyunLoginAPI from '../../../api/GyunLoginAPI';
import GyunPromotionAPI from '../../../api/GyunPromotionAPI';
import { getCookie } from '../../../Utils';
import { useHistory } from 'react-router-dom';

const { Option } = Select;
const categoryList = [
	{ type_seq: '1', type_nm: '펜션' },
	{ type_seq: '2', type_nm: '리조트' },
	{ type_seq: '3', type_nm: '자전거' },
	{ type_seq: '4', type_nm: '자동차' },
	{ type_seq: '5', type_nm: '오토바이' },
];
function ProductAddPresenter(props) {
	// const { handleChangePageTitle } = useContext(AdminContext)
	// 상품 카테고리
	let history = useHistory();
	const [category, setCategory] = useState('펜션');
	const [user, setUser] = useState({});
	// 상품명
	const [productName, setProductName] = useState('');
	// 전화번호
	const [tel, setTel] = useState('');
	// 주소 관련 state
	const [postcode, setPostcode] = useState('');
	const [address, setAddress] = useState('');
	const [otherAddress, setOtherAddress] = useState('');
	// eslint-disable-next-line
	const [addressValidate, setAddressValidate] = useState([]);
	// 가격
	const [price, setPrice] = useState(0);
	// 컨텐츠
	const [contents, setContents] = useState('');
	// 프로모션
	const [promotion, setPromotion] = useState(1);
	//양
	const [amount, setAmount] = useState('');
	// eslint-disable-next-line
	const [promotionList, setPromotionList] = useState([]);
	// 이미지 파일 관련 state
	// eslint-disable-next-line
	const [thumbnailFileObj, setThumbnailFileObj] = useState([]);
	const [imageList, setImageList] = useState([]);

	const [preview, setPreview] = useState(false);

	useEffect(() => {
		getPromot();
	}, []);

	const getPromot = async () => {
		const promot = await GyunPromotionAPI.getPromotion();
		setPromotionList(promot.data);
	};
	const setAddressState = (result) => {
		if (result.postcode !== postcode) {
			setPostcode(result.postcode);
		}

		if (result.address !== address) {
			setAddress(result.address);
		}

		if (result.otherAddress !== otherAddress) {
			setOtherAddress(result.otherAddress);
		}
	};

	// const fetchGetCommon = (callback) => {
	//   commonApi.getCommonInfo().then((result) => {
	//     if (callback) {
	//       callback(result)
	//     }
	//   })
	// }

	// const fetchInsertFileImg = async (fileObject) => {
	//   return await fileApi.insertTumbnail(fileObject)
	// }

	const registProductProcess = async (
		category,
		productName,
		tel,
		postcode,
		address,
		otherAddress,
		price,
		promotion,
		contents,
		imageListParam
	) => {
		if (imageListParam.length === 0) {
			alert('썸네일등록은 필수입니다.');
			return;
		}
		const fileObject = imageListParam.map((item) => item.originFileObj);
		let formData = new FormData();

		for (let index = 0; index < fileObject.length; index++) {
			formData.append('image_path', fileObject[index]);
		}

		const thumbnail = await GyunProductAPI.postThumbnail(formData);
		const company_seq = getCookie('company');

		const body = {
			t_goods_type_seq: category,
			goods_detail_nm: productName,
			goods_detail_tel: tel,
			goods_post: postcode,
			goods_address: address,
			goods_detail_address: otherAddress,
			goods_detail_price: price,
			t_promotion_seq: promotion,
			goods_detail_expression: contents,
			goods_image_path: thumbnail.data,
			t_company_seq: company_seq,
			goods_detail_amount: amount,
		};
		const response = await GyunProductAPI.postProduct(body);
		console.log(response);
		if (response.code == 200) {
			history.push('/company/product');
		}
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>이미지 업로드</div>
		</div>
	);

	const renderImageBanner = (key, src) => {
		return (
			<div key={key} style={{ width: '100%' }}>
				<img src={src} style={{ height: '280px', width: '100%' }} alt={key} />
			</div>
		);
	};

	return (
		<>
			<Row gutter={[10, 10]} style={{ height: '100%' }}>
				<Col span={8}>
					<Row>
						<Col span={24}>
							<Card
								title={'상품 이미지 등록'}
								style={{
									height: '700px',
								}}
							>
								<div style={{ width: '100%', marginBottom: '10px' }}>
									{imageList.length > 0 ? (
										<Carousel autoplay>
											{imageList.map((item, index) =>
												renderImageBanner(index, item.imgLink)
											)}
										</Carousel>
									) : (
										<div style={{ height: '280px', width: '100%' }}>
											<Empty />
										</div>
									)}
								</div>
								<div>
									<Upload
										listType="picture-card"
										fileList={imageList}
										onChange={(info) => {
											if (imageList.length < info.fileList.length) {
												// 이미지 추가
												if (info.file.type !== 'image/png') {
													alert('png 파일만 등록 가능합니다.');
													return;
												}
												if (
													!imageList.find((item) => item.uid === info.file.uid)
												) {
													const reader = new FileReader();
													reader.readAsDataURL(info.file.originFileObj);

													reader.onload = () => {
														let dataUrl = reader.result;

														setImageList(
															imageList.concat({
																...info.file,
																imgLink: dataUrl,
															})
														);
													};
												}
											} else if (imageList.length > info.fileList.length) {
												//이미지 삭제
												setImageList(
													imageList.filter((item) => item.uid !== info.file.uid)
												);
											}
										}}
									>
										{imageList.length >= 1 ? null : uploadButton}
									</Upload>
								</div>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col span={16}>
					<Card title={'상품정보'} style={{ height: '700px' }}>
						<Form labelCol={{ span: '3' }}>
							<Form.Item label="카테고리" style={{ textAlign: 'left' }}>
								<Select
									defaultValue={1}
									style={{ width: '150px' }}
									value={category}
									onChange={(value) => {
										setCategory(value);
									}}
								>
									{categoryList.map((item, index) => {
										return (
											<Option key={item.type_seq} value={item.type_seq}>
												{item.type_nm}
											</Option>
										);
									})}
								</Select>
							</Form.Item>
							<Divider />
							<Form.Item label="상품명">
								<RVInput
									value={productName}
									onChange={(e) => {
										setProductName(e.target.value);
									}}
								/>
							</Form.Item>
							<Divider />
							<Form.Item label="전화번호">
								<RVInput
									value={tel}
									onChange={(e) => {
										setTel(e.target.value);
									}}
								/>
							</Form.Item>
							<Divider />
							<Form.Item label="주소" style={{ textAlign: 'left' }}>
								<RVAddressForm
									postCode={postcode}
									address={address}
									otherAddress={otherAddress}
									onChange={(result) => {
										setAddressState(result);
									}}
									validate={addressValidate}
								/>
							</Form.Item>
							<Divider />
							<Form.Item label="가격" style={{ textAlign: 'left' }}>
								<RVPriceInput
									value={price}
									onChange={(value) => setPrice(value)}
								/>
							</Form.Item>
							<Divider />
							<Form.Item label="프로모션" style={{ textAlign: 'left' }}>
								<Select
									defaultValue={'0'}
									style={{ width: '150px' }}
									value={promotion}
									onChange={(value) => {
										setPromotion(value);
									}}
								>
									{promotion.length != 0 ? (
										promotionList.map((value, key) => {
											return (
												<Option key={key} value={value.promotion_seq}>
													{value.promotion_nm}
												</Option>
											);
										})
									) : (
										<Option></Option>
									)}
								</Select>
							</Form.Item>
							<Divider />
							<Form.Item label="양" style={{ textAlign: 'left' }}>
								<Input
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								></Input>
							</Form.Item>
						</Form>
					</Card>
				</Col>

				{/* 상품 컨텐츠 */}
				<Col span={24}>
					<div style={{ height: '500px' }}>
						<Card title="상품 설명란" style={{ height: '700px' }}>
							<RVWysiwygEditor
								onChange={(data) => {
									setContents(data);
								}}
							/>
						</Card>
					</div>
				</Col>

				{/* 저장 및 취소 버튼 */}
				<Col span={24}>
					<div style={{ textAlign: 'center', marginTop: '100px' }}>
						<Button
							type={'primary'}
							style={{ marginRight: '10px' }}
							onClick={() => {
								registProductProcess(
									category,
									productName,
									tel,
									postcode,
									address,
									otherAddress,
									price,
									promotion,
									contents,
									imageList
								);
							}}
						>
							저장
						</Button>
						<Button
							onClick={() => {
								props.history.push('/admin/product/list');
							}}
						>
							돌아가기
						</Button>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default ProductAddPresenter;
