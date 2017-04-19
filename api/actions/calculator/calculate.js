/**
 * Created by Mikos on 19.04.2017.
 */
import {URL} from '../../config';
import axios from 'axios';

export default async function calculate(res) {
  try {
    const response = await axios.get(`${URL}/real-first-loan-offer?amount=${res.query.amount}&term=${res.query.term}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
