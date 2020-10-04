import React from 'react'
import PropTypes from 'prop-types'

const Cus_Footer = (props) => {
    return (
        <div className="cus_footer">
            <div clasName="footer_nav">
                <a ><div className="cus_btn1">btn1</div></a>
                <a ><div className="cus_btn2">btn2</div></a>
                <a ><div className="cus_btn3">btn3</div></a>
            </div>
            <div className="footer_contents">
                <p>
                    상호명 상호명 | 대표 대표명 | 개인정보보호책임자 책임자 | 사업자등록번호 XXX-XX-XXXXX 사업자정보확인 | 통신판매업신고번호 2019-서울서초-0260
                    주소 XXXX시 XX구 XX로 XXX, XXXXX XX층(XX동) | 이메일 XXX@XXXX.XXX | 마케팅/제휴 문의 XXX@XXX.XXX

                    자사는 XXXXXX XXXXX에 가입되어 있습니다. XXXXXX은 XXXXX중개자이며 XXXX의 당사자가 아닙니다. 따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
                </p>
            </div>
        </div>
    )
}

Cus_Footer.propTypes = {

}

export default Cus_Footer

