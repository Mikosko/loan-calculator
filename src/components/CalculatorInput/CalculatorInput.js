/**
 * Created by Mikos on 19.04.2017.
 */
import React, {PropTypes} from 'react';
import Select from 'react-select';
import InputRange from 'react-input-range';
import style from './CalculatorInput.scss';

const CalculatorInput = (props) => {
  return (
    <div>
      <div className={`${style.wrapper} ${style.inputRange}`}>
        <InputRange minValue={props.minValue}
                    maxValue={props.maxValue}
                    step={props.step}
                    value={props.value}
                    onChange={props.onChange}/>
      </div>
      <div className={style.wrapper}>
        <Select instanceId={props.id}
                options={props.options}
                value={props.value}
                onChange={(value) => {props.onChange(value.value);}}
                searchable={false}
                clearable={false}/>
      </div>
    </div>
  );
};

CalculatorInput.propTypes = {
  id: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  options: PropTypes.array
};

export default CalculatorInput;
