/**
 * Created by Mikos on 20.04.2017.
 */
import {defineMessages} from 'react-intl';

const messages: {
  totalPrincipal: Object,
  term: Object,
  totalCostOfCredit: Object,
  totalRepayableAmount: Object,
  monthlyPayment: Object
} = defineMessages({
  totalPrincipal: {
    id: 'calculator.totalPrincipal',
    description: 'Total principal text',
    defaultMessage: 'Total principal'
  },
  term: {
    id: 'calculator.term',
    description: 'Term text',
    defaultMessage: 'Term'
  },
  totalCostOfCredit: {
    id: 'calculator.totalCostOfCredit',
    description: 'Total Cost Of Credit text',
    defaultMessage: 'Total Cost Of Credit principal'
  },
  totalRepayableAmount: {
    id: 'calculator.totalRepayableAmount',
    description: 'Total Repayable Amount text',
    defaultMessage: 'Total Repayable Amount'
  },
  monthlyPayment: {
    id: 'calculator.monthlyPayment',
    description: 'Monthly Payment text',
    defaultMessage: 'Monthly Payment'
  }
});

export default messages;
