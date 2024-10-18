  const [favoriteList, setFavoriteList] = useState([]);

 function HandleFavoriteClick(id)
 {
   favoriteList.includes(id) ? (setFavoriteList(favoriteList.filter(itemId => itemId != id)))
     :
     setFavoriteList([...favoriteList, id]);
   
  }