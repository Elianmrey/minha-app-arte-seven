import { options } from "../configurations/options";

export function GetSearchResults(term) {
    
    try {
        const data = []; 
        const response = fetch(`https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json()).then(response=>data.(response.results)).catch(err=>console.error("Problemas!", err.message))
                console.log("RESULTADOS", response.results)
        return data;

    } catch (err) {
        console.error("Temos um erro", err)
    }
}  