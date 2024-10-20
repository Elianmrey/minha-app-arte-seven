import StyleFav from "./StyleFavLists.module.css";
import Card from "../../components/Cards/Card.jsx";
import { GetFromLocalStrg, SaveToLocalStrg } from "../../Services/LocalStorageManagement.js";
import { useEffect, useState } from "react";


export default function FavList() {

   
    const [dataTvList, setDataTvList] = useState([]);
    const [dataMovieList, setDataMovieList] = useState([]);

   
   
    useEffect(() => {
        const tvShows = [];
        const movies = [];
        GetFromLocalStrg('@favoriteList').forEach(element => {
            if (element.first_air_date) tvShows.push(element) 
            else if (!element.first_air_date) movies.push(element); 
        });
        setDataTvList(tvShows);
        setDataMovieList(movies);
        
    }, []);

    
   const favList = GetFromLocalStrg('@favoriteList');
   
    function HandleFavoriteList(item) {
       
        favList.find(itemFav => itemFav.id === item.id) ? (SaveToLocalStrg('@favoriteList',favList.filter(itemId => itemId.id != item.id)))
            :
            (SaveToLocalStrg('@favoriteList', [...favList, item]));
        
        const tvShows = [];
        const movies = [];
        GetFromLocalStrg('@favoriteList').forEach(element => {
            if (element.first_air_date) tvShows.push(element)
            else if (!element.first_air_date) movies.push(element);
        });
        setDataTvList(tvShows);
        setDataMovieList(movies);

    }

    return (
        <div className={StyleFav.container}>
            <h2>Favoritos</h2>
            
              
            
            {
                dataTvList.length > 0 ? (<Card info={dataTvList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteList} favoriteList={favList} />) : (<span>Nenhum Programa de TV Favorito</span>)
            }
            {
                dataMovieList.length > 0 ? (<Card info={dataMovieList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteList} favoriteList={favList} />) : (<span>Nenhum filme Favorito</span>)
           }

        </div>
    )
}

