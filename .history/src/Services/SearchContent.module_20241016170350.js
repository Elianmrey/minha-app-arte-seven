import { options } from "../configurations/options";

export async function GetSearchResults(term) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`, options);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        console.log("RESULTADOS", data.results);
        return data.results;  
    } catch (err) {
        console.error("Temos um erro", err);
        return [];  // Retorna uma array vazia em caso de erro
    }
}
