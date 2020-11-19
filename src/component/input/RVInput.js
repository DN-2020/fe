import React from 'react';
import propTypes from 'prop-types';

import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

/**
 * @name 입력 컴포넌튼
 * @props {string} value
 * @props {function} onChange
 * @props {object} validate
 * @props {boolean} readOnly
 * @props {string} width
 * @props {string} placeholder
 */
function RVInput(props) {

    let style = {};
    let suffix = null;

    if(props.validate && props.validate.type === 'error') {
        style.borderColor = 'red';
        suffix = (
            <Tooltip title={props.validate.label}>
                <InfoCircleOutlined style={{ color: 'red' }} />
            </Tooltip>
        )
    }

    if(props.width) {
        style.width = props.width;
    }

    return (
        <Input 
            value={props.value}
            onChange={props.onChange}
            style={style}
            suffix={suffix}
            readOnly={props.readOnly}
            placeholder={props.placeholder}
        />
    )
}

RVInput.propTypes = {
    /* Input 컴포넌트 입력 값 */
    value: propTypes.string,
    /* 컴포넌트 변경 이벤트 */
    onChange: propTypes.func,
    /* 컴포넌트 validate 체크 값 */
    validate: propTypes.object,
    /* 읽기 전용 플래그 */
    readOnly: propTypes.bool,
    /* 컴포넌트 가로 크기 */
    width: propTypes.string,
    /* 컴포넌트 placeholder 값 */
    placeholder: propTypes.string
}

RVInput.defaultProps = {
    value: '',
    onChange: null,
    validate: null,
    readOnly: false,
    width: '100%',
    placeholder: null
}

export default RVInput;