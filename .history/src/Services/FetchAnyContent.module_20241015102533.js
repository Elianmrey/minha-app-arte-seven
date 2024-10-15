import { options } from '../configurations/options.js'


export default async function GetCardInfo(urlValue) {
 
  try {
    const response = await fetch(urlValue, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
