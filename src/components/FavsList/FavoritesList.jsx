import StyleFav from "./StyleFavLists.module.css";
import PropTypes from "prop-types";
import Card from "../Cards/Card.jsx";
import { useEffect, useState } from "react";

export default function FavList({ tvList, filmsList, HandleFavoriteClick }) {
   
    const favList = JSON.parse(localStorage.getItem('favList'))
        const [tvFavList, setTvFavList] = useState();
        const [movieFavList, setmovieFavList] = useState();
    
    // useEffect(() => {
    //     if (favList) {
    //         function DetectFavs() {
    //             setmovieFavList(filmsList.map((item) => (favList.map((favitemId => item.id === favitemId)))))
    //             setTvFavList(tvList.map(item => (favList.map(favItem => item.id === favItem))))
    //             console.log("Televisão")
    //             console.log(tvFavList)
    //             console.log("Filmes")
    //             console.log(movieFavList)
    //         }
    //         DetectFavs()
    //     }
    // }, [tvList, filmsList])
   
//Continuar amanhã Aqui
    
 
    
    return (
        <div className={StyleFav.container}>
            <Card info={tvFavList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} />

            <Card info={movieFavList} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} />
        </div>
    )
}

FavList.propTypes = {
    favList: PropTypes.arrayOf(PropTypes.object).isRequired,
    tvList: PropTypes.arrayOf(PropTypes.object).isRequired,
    filmsList: PropTypes.arrayOf(PropTypes.object).isRequire,
    HandleFavoriteClick: PropTypes.func.isRequired,
}