/**
 * Created by Mikos on 19.04.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, load as loadCalculator} from 'redux/modules/calculator';
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
  {loadCalculator}
)
export default
class Calculator extends Component {
  static propTypes = {
    calculator: PropTypes.object,
    loadCalculator: PropTypes.func
  }

  handleClick() {
    this.props.loadCalculator();
  }

  render() {
    const {calculator} = this.props;
    console.log(calculator);
    return (
      <div>
        <h1 onClick={::this.handleClick}>Hello World</h1>
      </div>
    );
  }
}
