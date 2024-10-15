import { useParams } from "react-router-dom";
import GetCardInfo from "../../Services/FetchAnyContent.module.js";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import StyleDetails from "./StyleDetails.module.css"
import StarRating from "../../components/StarsRating/StarsRating.jsx";


export default function Details({ cardType }) {

    const [data, setData] = useState([]);
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        setErr(null);

        async function fetchData() {
           
            try {
                const urlValue = (cardType === 'movies') ? 'https://api.themoviedb.org/3/discover/movie?language=pt-BR' :
                    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc'
                
                const fetchedData = await GetCardInfo(urlValue);
                setData(fetchedData);
                setLoading(false);
        } catch (err) {
            console.error(err);
            setErr("Temos um problema, algo deu errado");
        } finally {
            setLoading(false)
        }
        }
        fetchData();
    },
        [cardType]);
            
    const info = data.find((audiovisual) => (Number(audiovisual.id) === Number(id)));
    const urlBase = 'https://image.tmdb.org/t/p/w500';
    
    if (loading) return (<div>Carregando</div>);
    if (err) return (<div className={ StyleDetails.error}>{err}</div>);
    if (!info) return (<div>Item não encontrado</div>);
    console.log(info);
    return (
        <div className={StyleDetails.container} >

            <img className={StyleDetails.poster} src={`${urlBase + info.backdrop_path}`} />
            
            {
                cardType === "tvShows" ?
                    <div>
                        <h1>{info.name}</h1>
                        <p>{info.overview}</p>
                        <p>Nota: {info.vote_average}</p>
                        <p>Data de Lançamento: {info.first_air_date}</p>
                        <p>Episódios: {info.number_of_episodes}</p>
            </div> :
                <div>
                    <h1>{info.title}</h1>
                    <p>Sinopse: {info.overview}</p>
                    <p>Nota: {<StarRating voteAverage={} >}</p>
                    </div>
            
            }
            

        </div>
    )
}

Details.propTypes = {
    cardType: PropTypes.string.isRequired
}