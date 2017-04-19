/**
 * Created by Mikos on 19.04.2017.
 */

const initialState = {
  "amountInterval": {
    "min": 10,
    "max": 2000,
    "step": 10,
    "defaultValue": 400
  },
  "termInterval": {
    "min": 3,
    "max": 30,
    "step": 1,
    "defaultValue": 15
  }
};

export default function load() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialState);
    }, 1000);
  });
}
