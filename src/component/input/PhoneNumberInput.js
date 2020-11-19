import React from 'react';
import propTypes from 'prop-types';
import { Input, Select } from 'antd';

const { Option } = Select;

const TYPE = {
  phone: [
    { labelText: '010', value: '010' },
    { labelText: '011', value: '011' },
    { labelText: '016', value: '016' },
    { labelText: '017', value: '017' },
    { labelText: '018', value: '018' },
    { labelText: '019', value: '019' },
  ],
  tel: [
    { labelText: '02(서울)', value: '02' },
    { labelText: '031(경기도)', value: '031' },
    { labelText: '032(인천)', value: '032' },
    { labelText: '033(강원도)', value: '033' },
    { labelText: '041(충청남도)', value: '041' },
    { labelText: '042(대전)', value: '042' },
    { labelText: '043(충청북도)', value: '043' },
    { labelText: '044(세종)', value: '044' },
    { labelText: '051(부산)', value: '051' },
    { labelText: '052(울산)', value: '052' },
    { labelText: '053(대구)', value: '053' },
    { labelText: '054(경상북도)', value: '054' },
    { labelText: '055(경상남도)', value: '055' },
    { labelText: '061(전라남도)', value: '061' },
    { labelText: '062(광주)', value: '062' },
    { labelText: '063(전라북도)', value: '063' },
    { labelText: '064(제주)', value: '064' },
  ],
};

let inputValue = '';
let selectValue = '';

/**
 * @name 전화번호 입력 폼 컴포넌트
 * @props {string} type
 * @props {string} value
 * @props {bool} disabled
 * @props {func} onChange
 */
function PhoneNumberInput(props) {
  // const [ firstNumber, setFirstNumber ] = useState('');
  // const [ secondNumber, setSecondNumber ] = useState('');
  // const [ thirdNumber, setThirdNumber ] = useState('');

  const getComponentValue = (component, type, value) => {
    if (value) {
      let preNumber =
        type === 'tel' && value.substring(0, 2) === '02'
          ? value.substring(0, 2)
          : value.substring(0, 3);
      selectValue = TYPE[type].find((item) => item.value === preNumber);

      if (component === 'select' && (type === 'tel' || type === 'phone')) {
        return selectValue ? selectValue.value : type === 'tel' ? '02' : '010';
      } else if (component === 'input') {
        return selectValue ? value.replace(preNumber, '') : value;
      } else {
        if (component === 'select' && (type === 'tel' || type === 'phone')) {
          return type === 'tel' ? '02' : '010';
        }
      }
    }
  };

  const renderSelect = (type) => {
    if (type) {
      return (
        <Select
          style={{
            minWidth: '100px',
            marginRight: '10px',
          }}
          disabled={props.disabled}
          value={getComponentValue('select', props.type, props.value)}
          onChange={(e) => onChangeMakeValue('select', e, props.type)}
        >
          {TYPE[type].map((item, index) => (
            <Option key={index} value={item.value}>
              {item.labelText}
            </Option>
          ))}
        </Select>
      );
    }
  };

  const onChangeMakeValue = (component, value, type) => {
    if (component === 'input') {
      inputValue = value;
    } else if (component === 'select') {
      selectValue = TYPE[type].find((item) => item.value === value);
    }

    props.onChange(`${selectValue ? selectValue.value : ''}${inputValue}`);
  };

  return (
    <>
      <Input.Group compact>
        {renderSelect(props.type)}
        <Input
          style={{ width: '100px', marginRight: '10px' }}
          value={getComponentValue('input', props.type, props.value)}
          disabled={props.disabled}
          onChange={(e) =>
            onChangeMakeValue('input', e.target.value, props.type)
          }
        />
        <Input style={{ width: '100px' }} />
      </Input.Group>
    </>
  );
}

PhoneNumberInput.propTypes = {
  /** 전화번호 타입 ['phone', 'tel'] */
  type: propTypes.string,
  /** 컴포넌트 값 */
  value: propTypes.string,
  /** 컴포넌트 사용불가 여부 */
  disabled: propTypes.bool,
  /** 컴포넌트 변경 이벤트 발생시 호출할 콜백함수 */
  onChange: propTypes.func,
};

PhoneNumberInput.defaultProps = {
  type: 'phone',
  value: '',
  disabled: false,
};

export default PhoneNumberInput;
