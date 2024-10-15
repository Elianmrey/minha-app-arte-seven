import { useParams } from "react-router-dom";
import GetCardInfo from "../../Services/FetchAnyContent.module";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Details({ cardType }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        async  fetchData =  () => {
            try {
                const url = cardType === 'movies'
                    ? 'https://api.themoviedb.org/3/discover/movie?language=pt-BR'
                    : 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc';

                const fetchedImages = await GetCardInfo(url);
                setData(fetchedImages);
            } catch (err) {
                console.error(err);
                setError("Algo deu errado ao buscar os dados.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cardType]);

    const info = data.find(audiovisual => Number(audiovisual.id) === Number(id));
    const urlBase = 'https://image.tmdb.org/t/p/w500';

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!info) return <div>Nenhum detalhe encontrado.</div>;

    return (
        <div className="container">
            <img src={`${urlBase + info.backdrop_path}`} alt={info.title || info.name} />
        </div>
    );
}

Details.propTypes = {
    cardType: PropTypes.string.isRequired,
};
