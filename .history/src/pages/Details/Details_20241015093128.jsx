import { useParams } from "react-router-dom";
import GetCardInfo from "../../Services/FetchAnyContent.module";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types"


export default function Details({ cardType }) {

    const [data, setData] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        
        const urlValue = (cardType === 'movies') ? 'https://api.themoviedb.org/3/discover/movie?language=pt-BR' :
            'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc'
        try {
            async function fetchData() {
                const fetchedImages = await GetCardInfo(urlValue);
                setData(fetchedImages);
            }
            fetchData();
        } catch (err) {
            console.error(err);
        }
        
    }
        
    , [cardType]);
    const info = data.find((audiovisual) => (audiovisual.id === id))
    const urlBase = 'https://image.tmdb.org/t/p/w500'
    
    console.log("Data", data)
    return (
        <div className="container">

            <img src={`${urlBase+info.backdrop_path}`} />
            
           

        </div>
    )
}

Details.propTypes = {
    cardType: PropTypes.string.isRequired
}