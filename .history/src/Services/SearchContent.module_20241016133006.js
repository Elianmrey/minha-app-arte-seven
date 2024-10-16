import { options } from "../configurations/options";
import { }
export async function GetSearchResults(term) {
    try {
        let loading = true;
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`, options)
        const result = await response.json()
        console.log("RESULTADOS", result.results)
        loading = false;
        return result.results;

    } catch (err) {
        console.error("Temos um erro", err)
    } finally { 
        loading = false;
    };
}  