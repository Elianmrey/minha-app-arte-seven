import { options } from "../configurations/options";

export async function GetSearchResults(term) {
    
    try {
         
        const response = fetch(`https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
                console.log("RESULTADOS", response.results)
        return response.results;

    } catch (err) {
        console.error("Temos um erro", err)
    }
}  