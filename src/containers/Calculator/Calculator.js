/**
 * Created by Mikos on 19.04.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, load as loadCalculator} from 'redux/modules/Calculator/load';
import {calculate} from 'redux/modules/Calculator/calculate';
import {asyncConnect} from 'redux-async-connect';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadCalculator());
    }
  }
}])
@connect(
  state => ({
    calculator: state.calculator
  }),
  {loadCalculator, calculate}
)
export default
class Calculator extends Component {
  static propTypes = {
    calculator: PropTypes.object,
    loadCalculator: PropTypes.func,
    calculate: PropTypes.func
  }

  handleClick() {
    this.props.loadCalculator();
    this.props.calculate(5000, 30);
  }

  render() {
    return (
      <div>
        <h1 onClick={::this.handleClick}>Hello World</h1>
      </div>
    );
  }
}
