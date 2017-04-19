/**
 * Created by Mikos on 19.04.2017.
 */

const CALCULATE = 'calculator/CALCULATE';
const CALCULATE_SUCCESS = 'calculator/CALCULATE_SUCCESS';
const CALCULATE_FAIL = 'calculator/CALCULATE_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CALCULATE:
      return {
        ...state,
        loading: true
      };
    case CALCULATE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case CALCULATE_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.calculator.result && globalState.calculator.result.loaded;
}

export function calculate(amount: number, term: number) {
  return {
    types: [CALCULATE, CALCULATE_SUCCESS, CALCULATE_FAIL],
    promise: (client) => client.get(`/calculator/calculate?amount=${amount}&term=${term}`)
  };
}
