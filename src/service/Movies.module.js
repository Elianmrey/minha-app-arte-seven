import EnvironmentKey from './EnvironmentConst.module'

export default async function GetCardInfo() {
  const EnvKey = EnvironmentKey();
  
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${EnvKey}`,
    },
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR', options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
