import React from 'react';
import propTypes from 'prop-types';

import { Input } from 'antd';

function RVPriceInput(props) {

    const formatNumber = (value) => {
        value += '';
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
    }

    return (
        <Input
            style={{width: props.width}}
            defaultValue={0}
            addonBefore="₩"
            value={formatNumber(props.value)}
            onChange={(e) => {
                if(props.onChange) {
                    let  value = e.target.value.replace(/,/g,"");

                    const reg = /^-?\d*(\.\d*)?$/;
                    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
                        props.onChange(value);
                    }
                }
            }}
        />
    )
}

RVPriceInput.propTypes = {
    /* 컴포넌트 가로 길이 */
    width: propTypes.string,
    /* 컴포넌트 변경시 발생 이벤트 */
    onChange: propTypes.func,
    /* 컴포넌트 값 */
    value: propTypes.number
}

RVPriceInput.defaultProps = {
    width: '160px',
    onChange: null,
    value: 0
}

export default RVPriceInput;