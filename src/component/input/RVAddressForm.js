import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import PostCodeInput from './PostCodeInput';
import RVInput from './RVInput';

/**
 * @name 주소 입력 폼 컴포넌트
 * @props {string} postCode
 * @props {string} address
 * @props {string} otherAddress
 * @props {array} validate
 * @props {function} onChange
 */
function RVAddressForm(props) {
    // 우편번호
    const [ zoneCode, setZoneCode ] = useState('');
    const [ zoneCodeValid, setZoneCodeValid ] = useState(null);
    // 주소
    const [ address, setAddress ] = useState('');
    const [ addressValid, setAddressValid ] = useState(null);
    // 나머지 주소
    const [ otherAddress, setOtherAddress ] = useState('');

    useEffect(() => {
        if(props.postCode) {
            setZoneCode(props.postCode);
        }

        if(props.address) {
            setAddress(props.address);
        }

        if(props.otherAddress) {
            setOtherAddress(props.otherAddress);
        }
    }, [props.postCode, props.address, props.otherAddress]);

    useEffect(() => {
        if(props.validate.find(item => item === 'postcode')) {
            setZoneCodeValid({
                type: 'error',
                label: '우편번호가 누락 되었습니다.'
            });
        } else {
            setZoneCodeValid(null);
        }

        if(props.validate.find(item => item === 'address')) {
            setAddressValid({
                type: 'error',
                label: '주소가 누락 되었습니다.'
            });
        } else {
            setAddressValid(null);
        }
    }, [props.validate])

    return (
        <>
            <div style={{marginBottom: '10px'}}>
                <RVInput 
                    value={zoneCode} 
                    width={'150px'} 
                    readOnly 
                    validate={zoneCodeValid}
                />
                {' '}
                <PostCodeInput 
                    onChange={(result) => {
                        setZoneCode(result.zonecode);
                        setAddress(result.roadAddress);

                        props.onChange({
                            postcode: result.zonecode,
                            address: result.roadAddress,
                            otherAddress: otherAddress
                        })
                    }}
                />
            </div>
            <div style={{marginBottom: '10px'}}>
                <RVInput 
                    value={address} 
                    validate={addressValid}
                />
            </div>
            <div>
                <RVInput 
                    placeholder={'나머지 주소 입력'} 
                    value={otherAddress} 
                    onChange={(e) => {
                        setOtherAddress(e.target.value);

                        props.onChange({
                            postcode: zoneCode,
                            address: address,
                            otherAddress: e.target.value
                        })
                    }}
                />
            </div>
        </>
    )
}

RVAddressForm.propTypes = {
    /* 우편번호 */
    postCode: propTypes.string,
    /* 주소 */
    address: propTypes.string,
    /* 나머지 주소 */
    otherAddress: propTypes.string,
    /* 주소 컴포넌트 필수값 검증 ['postcode', 'address'] */
    validate: propTypes.array,
    /* 컴포넌트 변경시 발생 이벤트 */
    onChange: propTypes.func
}

RVAddressForm.defaultProps = {
    postCode: '',
    address: '',
    otherAddress: '',
    validate: [],
    onChange: null
}

export default RVAddressForm;