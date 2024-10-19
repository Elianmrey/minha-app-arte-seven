import StyleFav from "./StyleFavLists.module.css";
import PropTypes from "prop-types";
import Card from "../Cards/Card.jsx";
import { useEffect, useState } from "react";
import { GetFromLocalStrg } from "../../Services/LocalStorageManagement.js";

export default function FavList({ HandleFavoriteClick }) {
   
    const favList = GetFromLocalStrg('@favoriteList')
        const [tvFavList, setTvFavList] = useState();
        const [movieFavList, setmovieFavList] = useState();
       
    useEffect(() => {
    if (favList) {
       GetSearchResults()
        setTvFavList(favList.filter())
        setmovieFavList()
            
        }
       
    
    }, [tvFavList, favList, movieFavList])
    
   
    console.log("MOVIES",movieFavList,"TV", tvFavList)
 
    
    return (
        <div className={StyleFav.container}>
{/*             
            <Card info={tvFavList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} />

            <Card info={movieFavList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} /> */}
        </div>
    )
}

FavList.propTypes = {
    tvList: PropTypes.arrayOf(PropTypes.object).isRequired,
    filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,  
    HandleFavoriteClick: PropTypes.func.isRequired,
}