import { useEffect, useState } from 'react';
import CardStyle from './styleTvShows.module.css';
import GetTvShows from '../../Services/TvShows.module.js';
import PropTypes from 'prop-types';
import StarRating from '../StarsRating/StarsRating.jsx';


export default function TvShowsCard({ searchTerm }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedImages = await GetTvShows();
      setImages(fetchedImages);
    }

    fetchData();
  }, []);


  const filteredImages = images.filter(item =>
    item.original_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={CardStyle.generalContainer}>
      {filteredImages.length > 0 ? (
        filteredImages.map((item, index) => (
          <div key={index} className={CardStyle.cardContainer}>
            <div className={CardStyle.imgContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={`Image ${index}`}
                className={CardStyle.imgStyle}
              />
            </div>
            <div className={CardStyle.cardHeader}>
              <span className={CardStyle.title}>{item.original_name}</span>
              <span className={CardStyle.data}>Data de Lançamento: {item.first_air_date}</span>
              <span className={CardStyle.data}><StarRating voteAverage={item.vote_average} /></span>
            </div>
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
};
