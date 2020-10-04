import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Input } from "antd";
const Search_Modal = (props) => {
    const [keyword, setKeyword] = useState("");
    const handleOnOK = () => {
        props.onOK(keyword, props.category)
    }
    return (
        <>
            <Modal title={props.category} visible={props.visible} onOk={handleOnOK} onCancle={props.onCancle}>
                <Input onChange={(e) => { setKeyword(e.target.value) }}></Input>
            </Modal>
        </>
    )
}

Search_Modal.propTypes = {

}

export default Search_Modal

