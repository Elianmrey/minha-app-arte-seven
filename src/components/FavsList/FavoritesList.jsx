import StyleFav from "./StyleFavLists.module.css";
import PropTypes from "prop-types";
import Card from "../Cards/Card.jsx";

export default function FavList({ favList })
{ 
    
    return (
        <div className={StyleFav.container}>
            <Card info={tvData} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favoriteList} />

    
        </div>
    )
}

FavList.propTypes = {
    favList: PropTypes.arrayOf(PropTypes.object).isRequired,
}