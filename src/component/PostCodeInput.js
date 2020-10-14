import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

/**
 * @name 우편번호 입력 컴포넌트
 * @props {func} onChange
 */
function PostCodeInput(props) {
    const [ daumPostCode, setDaumPostCode ] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.onload = (e) => initiate(e);
        script.onerror = error => handleError(error);
        script.id = 'daum-post-code-api';
        document.body.appendChild(script);
    }, []);

    const initiate = (e) => {
        window.daum.postcode.load(() => {
            setDaumPostCode(new window.daum.Postcode({
                oncomplete: (data) => {
                    props.onChange(data);
                }
            }));
        });
    };

    const handleError = (error) => {
        console.log(error);
    };

    const openPostCodePopup = () => {
        if(daumPostCode) {
            daumPostCode.open();
        };
    }

    return (
        <>                
            <Button onClick={openPostCodePopup}>우편번호 찾기</Button>
        </>
    )
};

PostCodeInput.propTypes = {
    /** 우편번호 선택시 호출할 콜백함수 */
    onChange: propTypes.func
};

export default PostCodeInput;