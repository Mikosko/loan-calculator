/**
 * Created by Mikos on 19.04.2017.
 */

const LOAD = 'calculator/LOAD';
const LOAD_SUCCESS = 'calculator/LOAD_SUCCESS';
const LOAD_FAIL = 'calculator/LOAD_FAIL';

const AMOUNT_CHANGE = 'calculator/AMOUNT_CHANGE';
const TERM_CHANGE = 'calculator/TERM_CHANGE';

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  value: {
    amount: 0,
    term: 0
  },
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AMOUNT_CHANGE:
      return {
        ...state,
        value: {
          ...state.value,
          amount: action.data.amount
        }
      };
    case TERM_CHANGE:
      return {
        ...state,
        value: {
          ...state.value,
          term: action.data.term
        }
      };
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        value: {
          amount: action.result.amountInterval.defaultValue,
          term: action.result.termInterval.defaultValue
        },
        error: null
      };
    case LOAD_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.calculator.form && globalState.calculator.form.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/calculator/load')
  };
}

export function changeAmount(amount: number) {
  return {
    type: AMOUNT_CHANGE,
    data: {
      amount
    }
  };
}

export function changeTerm(term: number) {
  return {
    type: TERM_CHANGE,
    data: {
      term
    }
  };
}
