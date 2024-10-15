import { useParams } from "react-router-dom";
import GetCardInfo from "../../Services/FetchAnyContent.module.js";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"


export default function Details({ cardType }) {

    const [data, setData] = useState([]);
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        setErr(null);
        
async function fetchData() {
        const urlValue = (cardType === 'movies') ? 'https://api.themoviedb.org/3/discover/movie?language=pt-BR' :
            'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc'
        try {
            
                const fetchedData = await GetCardInfo(urlValue);
                
                console.log("FetchedData", fetchedData)

                setData(fetchedData);
            }
            fetchData();
        } catch (err) {
            console.error(err.message);
            setErr("Temos um problema, algo deu errado");
        } finally {
            setLoading(false)

         } 
    }, [cardType]);


   

    


    const info = data.find((audiovisual) => (Number(audiovisual.id) === Number(id)))
    const urlBase = 'https://image.tmdb.org/t/p/w500'
     
    if (loading) (<div>Carregando</div>);
    if (err) (<div>{err}</div>);
    if (!info) (<div>Item não encontrado</div>);
    
    return (
        <div className="container">

            <img src={`${urlBase + info.backdrop_path}`} />
            
           

        </div>
    )
}

Details.propTypes = {
    cardType: PropTypes.string.isRequired
}