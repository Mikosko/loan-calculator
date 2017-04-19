/**
 * Created by Mikos on 19.04.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeAmount, changeTerm} from 'redux/modules/calculator/load';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import {calculate} from 'redux/modules/calculator/calculate';
import {debounce} from 'core-decorators';
import {FormattedMessage} from 'react-intl';
import messages from './CalculatorFormMessages';
import style from './CalculatorForm.scss';

@connect(
  state => ({
    data: state.calculator.form.data,
    value: state.calculator.form.value
  }),
  {changeAmount, changeTerm, calculate}
)
export default
class CalculatorForm extends Component {
  static propTypes = {
    data: PropTypes.object,
    value: PropTypes.object,
    changeAmount: PropTypes.func,
    changeTerm: PropTypes.func,
    calculate: PropTypes.func
  };

  onChangeHandleAmount(value) {
    this.props.changeAmount(value);
    this.handleCalculate();
  }

  onChangeHandleTerm(value) {
    this.props.changeTerm(value);
    this.handleCalculate();
  }

  getSelectOptions(data) {
    const optionsArray = [];
    for (let value = data.min; data.max >= value; value += data.step) {
      optionsArray.push({
        value: value,
        label: value
      });
    }
    return optionsArray;
  }

  @debounce
  handleCalculate() {
    this.props.calculate(this.props.value.amount, this.props.value.term);
  }

  render() {
    const {data, value} = this.props;
    return (
      <div className={style.wrapper}>
        <h3><FormattedMessage {...messages.amount}/></h3>
        <CalculatorInput
          id="amount"
          minValue={data.amountInterval.min}
          maxValue={data.amountInterval.max}
          step={data.amountInterval.step}
          value={value.amount}
          onChange={::this.onChangeHandleAmount}
          options={this.getSelectOptions(data.amountInterval)}/>
        <h3><FormattedMessage {...messages.term}/></h3>
        <CalculatorInput
          id="term"
          minValue={data.termInterval.min}
          maxValue={data.termInterval.max}
          step={data.termInterval.step}
          value={value.term}
          onChange={::this.onChangeHandleTerm}
          options={this.getSelectOptions(data.termInterval)}/>
      </div>
    );
  }
}
