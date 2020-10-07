import { Layout, Input, Avatar } from "antd";
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from "antd";
import "./Main.css"
const { Meta } = Card;
const { Header } = Layout;
const { Search } = Input;
const Cus_Header = (props) => {
    const login = false;
    const handleSearch = (e) => {
        window.location.href = `/search?key=${e}`;
    }
    return (
        <>
            <div className="gyun_header" >
                <div className="gyun_logo" style={{ textAlign: "center" }}>
                    <a><img style={{ height: "50px" }} src="logo192.png"></img></a>
                </div>
                <div className="gyun_search_container" >
                    <Search className="gyun_searchs" allowClear onSearch={handleSearch}></Search>
                </div>
                <div className="gyun_menu_container">
                    <ul className="gyun_menus">
                        <a className="gyun_items">장바구니</a>
                        <a className="gyun_items">예약</a>
                        <a className="gyun_items">마이페이지</a>
                    </ul>
                </div>
                <div clasName="gyun_profile">
                    {login == false ?
                        <>
                            <div className="gyun_user_name">userName님</div>
                            <div className="gyun_avatar"><Avatar size={32} src="logo192.png" /></div>
                        </>
                        : <button>로그인</button>}
                </div>
            </div >
            <div className="gyun_nav_container" >
                <Card className="gyun_nav_rent" hoverable cover={<div style={{ fontSize: "30px" }}>🚗</div>} >
                    <Meta style={{ fontSize: "30px" }} description="렌트카"></Meta>
                </Card>
                <Card className="gyun_nav_lodg" hoverable cover={<div style={{ fontSize: "30px" }}>🏡</div>} >
                    <Meta style={{ fontSize: "30px" }} description="숙소"></Meta>
                </Card>
                <Card className="gyun_nav_byc" hoverable cover={<div style={{ fontSize: "30px" }}>🚲</div>} >
                    <Meta style={{ fontSize: "30px" }} description="자전거"></Meta>
                </Card>
                <Card className="gyun_nav_moto" hoverable cover={<div style={{ fontSize: "30px" }}>🛵</div>} >
                    <Meta style={{ fontSize: "30px" }} description="오토바이"></Meta>
                </Card>
            </div>
        </>
    )
}

Cus_Header.propTypes = {

}

export default Cus_Header