import { options } from '../options/options.js'


export default async function GetCardInfo(urlValue) {
 
  try {
    const response = await axio(urlValue, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
