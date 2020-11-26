import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Card, Empty, Rate } from 'antd';

import { useHistory } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import GyunProductAPI from '../../api/GyunProductAPI';
import { bucket_url } from '../../Utils';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Cus_Body = (props) => {
  let history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let tempData = [];
    for (var i = 1; i < 6; i++) {
      let dataCategory = await GyunProductAPI.getProductCat(i);
      tempData = tempData.concat(dataCategory.data);
    }
    setData(tempData);
  };
  const { Meta } = Card;
  const imageStyle = {
    verticalAlign: 'center',
    width: '100 %',
  };
  const SlideStyle = {
    marginLeft: '10px',
  };
  const options = {
    loop: true,
    slidesPerView: 1,
    autoplay: { AutoplayOptions: true },
    spaceBetween: 50,
    pagination: { clickable: true },
    style: { paddingBottom: '1%', border: '0.1px solid lightgray' },
  };
  const slideStyle = {
    height: '700',
    width: 300,
  };
  const contentOption = {};
  const handleProduct = (e) => {
    history.push(`/user/productDetail/${e}`);
  };
  const value = 1;
  return (
    <div style={{ width: '80%', marginLeft: '10%', marginTop: '1%' }}>
      <div className="gyun_body_container">
        <div className="image_slide">
          <Swiper
            style={{ border: '1px solid lightgray' }}
            {...options}
            className="gyun_swiper"
          >
            <SwiperSlide key={1} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
            <SwiperSlide key={2} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
            <SwiperSlide key={3} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
            <SwiperSlide key={4} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>
          펜션
        </h1>
        <div
          className="main_rent_car"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Swiper
            slidesPerView={5.5}
            style={{ width: '80%', textAlign: 'left', margin: '0' }}
          >
            {data.length > 0 ? (
              data.map((value, key) => {
                if (value != null && value.t_goods_type_seq == 1) {
                  return (
                    <SwiperSlide>
                      <Card
                        onClick={() => handleProduct(value.goods_detail_seq)}
                        hoverable
                        style={{ width: 200, height: 250 }}
                        cover={
                          <img
                            style={{ height: '100px', objectFit: 'cover' }}
                            src={`${bucket_url}/${value.goods_image_path}`}
                          ></img>
                        }
                      >
                        <div>
                          <Meta
                            title={value.goods_detail_nm}
                            description={value.goods_address}
                          />
                          <Rate
                            disabled
                            defaultValue={value.goods_grade}
                          ></Rate>
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                }
              })
            ) : (
              <Empty />
            )}
          </Swiper>
        </div>
      </div>
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>
          리조트
        </h1>
        <div
          className="main_rent_car"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Swiper
            slidesPerView={5.5}
            style={{ width: '80%', textAlign: 'left', margin: '0' }}
          >
            {data.length > 0 ? (
              data.map((value, key) => {
                if (value != null && value.t_goods_type_seq == 2) {
                  return (
                    <SwiperSlide>
                      <Card
                        onClick={() => handleProduct(value.goods_detail_seq)}
                        hoverable
                        style={{ width: 200, height: 250 }}
                        cover={
                          <img
                            style={{ height: '100px', objectFit: 'cover' }}
                            src={`${bucket_url}/${value.goods_image_path}`}
                          ></img>
                        }
                      >
                        <div>
                          <Meta
                            title={value.goods_detail_nm}
                            description={value.goods_address}
                          />
                          <Rate
                            disabled
                            defaultValue={value.goods_grade}
                          ></Rate>
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                }
              })
            ) : (
              <Empty />
            )}
          </Swiper>
        </div>
      </div>
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>
          자전거
        </h1>
        <div
          className="main_rent_car"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Swiper
            slidesPerView={5.5}
            style={{ width: '80%', textAlign: 'left', margin: '0' }}
          >
            {data.length > 0 ? (
              data.map((value, key) => {
                if (value != null && value.t_goods_type_seq == 3) {
                  return (
                    <SwiperSlide>
                      <Card
                        onClick={() => handleProduct(value.goods_detail_seq)}
                        hoverable
                        style={{ width: 200, height: 250 }}
                        cover={
                          <img
                            style={{ height: '100px', objectFit: 'cover' }}
                            src={`${bucket_url}/${value.goods_image_path}`}
                          ></img>
                        }
                      >
                        <div>
                          <Meta
                            title={value.goods_detail_nm}
                            description={value.goods_address}
                          />
                          <Rate
                            disabled
                            defaultValue={value.goods_grade}
                          ></Rate>
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                }
              })
            ) : (
              <Empty />
            )}
          </Swiper>
        </div>
      </div>
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>
          자동차
        </h1>
        <div
          className="main_rent_car"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Swiper
            slidesPerView={5.5}
            style={{ width: '80%', textAlign: 'left', margin: '0' }}
          >
            {data.length > 0 ? (
              data.map((value, key) => {
                if (value != null && value.t_goods_type_seq == 4) {
                  return (
                    <SwiperSlide>
                      <Card
                        onClick={() => handleProduct(value.goods_detail_seq)}
                        hoverable
                        style={{ width: 200, height: 250 }}
                        cover={
                          <img
                            style={{ height: '100px', objectFit: 'cover' }}
                            src={`${bucket_url}/${value.goods_image_path}`}
                          ></img>
                        }
                      >
                        <div>
                          <Meta
                            title={value.goods_detail_nm}
                            description={value.goods_address}
                          />
                          <Rate
                            disabled
                            defaultValue={value.goods_grade}
                          ></Rate>
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                }
              })
            ) : (
              <Empty />
            )}
          </Swiper>
        </div>
      </div>
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>
          오토바이
        </h1>
        <div
          className="main_rent_car"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Swiper
            slidesPerView={5.5}
            style={{ width: '80%', textAlign: 'left', margin: '0' }}
          >
            {data.length > 0 ? (
              data.map((value, key) => {
                if (value != null && value.t_goods_type_seq == 5) {
                  return (
                    <SwiperSlide>
                      <Card
                        onClick={() => handleProduct(value.goods_detail_seq)}
                        hoverable
                        style={{ width: 200, height: 250 }}
                        cover={
                          <img
                            style={{ height: '100px', objectFit: 'cover' }}
                            src={`${bucket_url}/${value.goods_image_path}`}
                          ></img>
                        }
                      >
                        <div>
                          <Meta
                            title={value.goods_detail_nm}
                            description={value.goods_address}
                          />
                          <Rate
                            disabled
                            defaultValue={value.goods_grade}
                          ></Rate>
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                }
              })
            ) : (
              <SwiperSlide
                slidesPerView={5.5}
                style={{ width: '80%', textAlign: 'left', margin: '0' }}
              >
                <div style={{ height: '280px', width: '100%' }}>
                  <Empty />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

Cus_Body.propTypes = {};

export default Cus_Body;
