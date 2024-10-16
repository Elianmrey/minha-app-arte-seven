import CardStyle from './styleTvShows.module.css';
import PropTypes from 'prop-types';
import StarRating from '../StarsRating/StarsRating.jsx';
import { Link } from 'react-router-dom';


export default function TvShowsCard({ searchTerm, info }) {



  const filteredData = info.filter(item =>
    item.original_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={CardStyle.generalContainer}>
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          
          <div key={index} className={CardStyle.cardContainer}>

            <Link to={`/tv/details/${item.id}`}>
            <div className={CardStyle.imgContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={`Image ${index}`}
                className={CardStyle.imgStyle}
              />
            </div>
            <div className={CardStyle.cardHeader}>
              <span className={CardStyle.title}>{item.original_name}</span>
              <span className={CardStyle.data}>Lançamento: {item.first_air_date}</span>
              <span className={CardStyle.data}><StarRating voteAverage={item.vote_average} /></span>
              </div>
              </Link>
          </div>
        ))
      ) : (
        <p>Carregando informações...</p>
      )}
    </div>
  );
}

TvShowsCard.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  info: PropTypes.array,
};
