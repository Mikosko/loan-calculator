/**
 * Created by Mikos on 19.04.2017.
 */

const LOAD = 'calculator/LOAD';
const LOAD_SUCCESS = 'calculator/LOAD_SUCCESS';
const LOAD_FAIL = 'calculator/LOAD_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
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
