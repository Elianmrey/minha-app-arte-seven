import { options } from '../options/options.js'
// import axios from 'axios';

export default async function GetCardInfo() {
 
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR', options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
