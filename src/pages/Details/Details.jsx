import { Link, useParams } from "react-router-dom";
import { GetCardDetailsInfo } from "../../Services/FetchAnyContent.module.js";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import StyleDetails from "./StyleDetails.module.css"
import StarRating from "../../components/StarsRating/StarsRating.jsx";
import CleanNavBar from "../../components/CleanNavBar/CleanNavBar.jsx"


export default function Details({ cardType, whereToGo }) {

    const [data, setData] = useState([]);
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        setErr(null);

        async function fetchData() {
           
            try {
                const urlValue = (cardType === 'movies') ? `https://api.themoviedb.org/3/movie/${id}?language=pt-BR` :
                    `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`
                
                const fetchedData = await GetCardDetailsInfo(urlValue);
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
        [cardType,id]);
            
    const info = data
    const urlBase = 'https://image.tmdb.org/t/p/w500';
    
    if (loading) return (<div>Carregando</div>);
    if (err) return (<div className={ StyleDetails.error}>{err}</div>);
    if (!info) return (<div>Item não encontrado</div>);
    
    
    console.log(info);
    
    const genre = info.genres;
    
    
    return (
        <div className={StyleDetails.container} >
            <CleanNavBar />
            
            <div className={StyleDetails.innerContainer}>

            <div className={StyleDetails.buttonBackContainer}>
                    <Link to={ whereToGo }> <button className={StyleDetails.buttonBack}>
                
                    <svg className={StyleDetails.iconBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" />
                    </svg>
                    
                </button></Link>
                </div>
                <div className={StyleDetails.posterContainer}>
            <img className={StyleDetails.poster} src={info.backdrop_path? urlBase + info.backdrop_path : urlBase + info.poster_path} />
            </div>
            {
                cardType === "tvShows" ?
                    
                    <div>
                        <h1>{info.name}</h1>

                        <div className={StyleDetails.overviewContainer}>

                            <p>Sinopse: {info.overview? info.overview: "Não Disponível"}</p>
                        <p>Nota: {info.vote_average}</p>
                        <p>Data de Lançamento: {info.first_air_date}</p>
                            <p>Episódios: {info.number_of_episodes}</p>
                            <p>Temporadas: {info.number_of_seasons? info.number_of_seasons: "Não disponível"}</p>
                        </div>
                        
                        <div className={StyleDetails.genreContainer}>
                            <p>Genero:</p>
                            {
                                genre.map((item, index) =>
                                (
                                    <p key={index}>{item.name}</p>
                                ))
                            }
                        </div>
                    </div> :
                    
                <div>
                        <h1>{info.title}</h1>
                        
                        <div className={StyleDetails.overviewContainer}>

                        <p>Sinopse:  {info.overview ? info.overview : "Não Disponível"}</p>
                        </div>
                        <div className={StyleDetails.genreContainer}>
                            
                            <p>Genero:</p>
                        {
                            genre.map((item, index) =>
                            (
                                <p key={index}>{item.name}</p>
                            ))
                            }
                        </div>
                        <div className={StyleDetails.ratingContainer}>
                            <p>{<StarRating voteAverage={info.vote_average} />}</p>
                            </div>
                    </div>
            
            }
            
            </div> 
        </div>
    )
}

Details.propTypes = {
    cardType: PropTypes.string.isRequired,
    whereToGo: PropTypes.string.isRequired,
}