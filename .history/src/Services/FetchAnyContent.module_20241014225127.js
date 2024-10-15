import { options } from '../options/options.js'


export default async function GetCardInfo(url) {
 
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
