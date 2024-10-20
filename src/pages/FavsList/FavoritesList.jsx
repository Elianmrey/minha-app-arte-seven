import StyleFav from "./StyleFavLists.module.css";
import PropTypes from "prop-types";
import Card from "../../components/Cards/Card.jsx";

import { GetFromLocalStrg } from "../../Services/LocalStorageManagement.js";
import { useEffect, useState } from "react";


export default function FavList({ HandleFavoriteClick }) {

   
    const [dataTvList, setDataTvList] = useState([]);
    const [dataMovieList, setDataMovieList] = useState([]);

   
   const favList = GetFromLocalStrg('@favoriteList');
    useEffect(() => {
        
       

        const tvShows = [];
        const movies = [];
        favList.forEach(element => {
            if (element.first_air_date) tvShows.push(element) 
            else if (!element.first_air_date) movies.push(element); 
        });
        setDataTvList(tvShows);
        setDataMovieList(movies);
        
    }, []);

    return (
        <div className={StyleFav.container}>
            <h2>Favoritos</h2>
            
              
            
            {
                dataTvList.length > 0 ? (<Card info={dataTvList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} />) : (<span>Nenhum Programa de TV Favorito</span>)
            }
            {
                dataMovieList.length > 0 ? (<Card info={dataMovieList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} />) : (<span>Nenhum filme Favorito</span>)
           }

        </div>
    )
}

FavList.propTypes = {
   HandleFavoriteClick: PropTypes.func.isRequired,
}