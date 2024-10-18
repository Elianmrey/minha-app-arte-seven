import StyleFav from "./StyleFavLists.module.css";
import PropTypes from "prop-types";
import Card from "../Cards/Card.jsx";

export default function FavList({ favList })
{ 
    //------------------------------------------------------------------------------
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
        [cardType, id]);
    
    //------------------------------------------------------------------------------
    
    return (
        <div className={StyleFav.container}>
            <Card info={tvData} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favList} />

    
        </div>
    )
}

FavList.propTypes = {
    favList: PropTypes.arrayOf(PropTypes.object).isRequired,
}