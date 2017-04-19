/**
 * Created by Mikos on 19.04.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded as isCalculated, calculate} from 'redux/modules/calculator/calculate';
import {isLoaded, load as loadCalculator} from 'redux/modules/calculator/load';
import {asyncConnect} from 'redux-async-connect';
import {CalculatorForm, CalculatorResult} from 'components';

@asyncConnect([
  {
    promise: ({store: {dispatch, getState}}) => {
      if (!isLoaded(getState())) {
        return dispatch(loadCalculator()).then(
          () => {
            if (!isCalculated(getState())) {
              return dispatch(calculate(getState().calculator.form.value.amount, getState().calculator.form.value.term));
            }
          }
        );
      }
    }
  }
])
@connect(
  state => ({
    calculator: state.calculator
  }),
  {}
)
export default
class Calculator extends Component {
  static propTypes = {
    calculator: PropTypes.object,
  }

  render() {
    const {form, result} = this.props.calculator;
    return (
      <div>
        {form.loaded ? <CalculatorForm/> : <div>Loading...</div>}
        {result.loaded ? <CalculatorResult/> : <div>Loading...</div>}
      </div>
    );
  }
}
