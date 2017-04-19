/**
 * Created by Mikos on 20.04.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import messages from './CalculatorResultMessages';
import style from './CalculatorResult.scss';

@connect(
  state => ({
    data: state.calculator.result.data
  }),
  {}
)
export default
class CalculatorResult extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const {data} = this.props;
    return (
      <div className={style.wrapper}>
        {Object.keys(data).map((key) =>
          <div key={key} className={style.item}>
            <span className={style.label}><FormattedMessage {...messages[key]}/>: </span>
            <span className={style.value}>{data[key]}</span>
          </div>
        )}
      </div>
    );
  }
}
