import { useEffect, useState } from 'react';
import CardStyle from './styleFilms.module.css';
import GetCardInfo from '../../Services/Movies.module.js';
import PropTypes from 'prop-types';
import StarRating from '../StarsRating/StarsRating.jsx';


export default function FilmCard({ searchTerm }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedImages = await GetCardInfo();
      console.log(fetchedImages)
      setImages(fetchedImages);
    }
    fetchData();
  }, []);


  const filteredImages = images.filter(item =>
    item.original_title.toLowerCase().includes(searchTerm.toLowerCase())
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
              <span className={CardStyle.title}>{item.original_title}</span>
              <span className={CardStyle.data}>Lançamento: {item.release_date}</span>
              <span className={CardStyle.data}><StarRating voteAverage={item.vote_average}/></span>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando informações...</p>
      )}
    </div>
  );
}

FilmCard.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
