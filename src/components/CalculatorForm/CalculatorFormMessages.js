/**
 * Created by Mikos on 19.04.2017.
 */
import {defineMessages} from 'react-intl';

const messages: {
  amount: Object,
  term: Object
} = defineMessages({
  amount: {
    id: 'calculatorFrom.amount',
    description: 'Amount text',
    defaultMessage: 'Amount'
  },
  term: {
    id: 'calculatorFrom.term',
    description: 'Term text',
    defaultMessage: 'Term'
  }
});

export default messages;
