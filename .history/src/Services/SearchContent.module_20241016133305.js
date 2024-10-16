import { options } from "../configurations/options";
import { useState } from "react";
export async function GetSearchResults(term) {
    const [loading, setLoading] = useState(true)
    try {
         setLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`, options)
        const result = await response.json()
        console.log("RESULTADOS", result.results)
        setLoading(false);

        return result.results;

    } catch (err) {
        console.error("Temos um erro", err)
    } finally { 
        if(loading) return []
        setLoading(false);
    };
}  