/**
 * Created by Mikos on 19.04.2017.
 */
import {URL} from '../../config';
import axios from 'axios';

export default async function load() {
  try {
    const response = await axios.get(`${URL}/constraints`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
