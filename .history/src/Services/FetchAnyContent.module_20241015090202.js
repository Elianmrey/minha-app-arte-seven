import axios from 'axios';
import { options } from '../options/options.js'


export default async function GetCardInfo(urlValue) {
 
  try {
    const response = await axios(urlValue, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
