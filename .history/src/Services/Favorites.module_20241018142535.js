import { useState } from "react";

const [favoriteList, setFavoriteList] = useState([]);

export default function HandleFavoriteClick(id) {
    favoriteList.includes(id) ? (setFavoriteList(favoriteList.filter(itemId => itemId != id)))
        :
        setFavoriteList([...favoriteList, id]);

}