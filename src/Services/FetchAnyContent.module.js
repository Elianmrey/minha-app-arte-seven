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


export  async function GetCardDetailsInfo(urlValue) {

  try {
    const response = await fetch(urlValue, options);
    if (response.ok)
      return await response.json();
    else
      return null;
  
  } catch (err) {
    console.error(err);
    return [];
  }
}
