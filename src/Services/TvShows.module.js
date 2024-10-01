import { options } from '../options/options.js'

export default async function GetTvShows() {



  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc'
      , options);

    const data = await response.json();

  return data.results;

  } catch (err) {
    console.error(err); // Corrigido: use console.error para exibir o erro
    return []; // Retorna um array vazio ou qualquer outro valor adequado em caso de erro
  }
}
