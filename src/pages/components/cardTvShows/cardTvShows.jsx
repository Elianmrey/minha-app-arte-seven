import { useEffect, useState } from 'react';
import CardStyle from './style.module.css';
import GetTvShows from '../../../service/TvShows.module.js';

export default function TvShowsCard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedImages = await GetTvShows();
      setImages(fetchedImages);
    }

    fetchData();
  }, []);

  return (
    <div className={CardStyle.generalContainer}>
      {images.length > 0 ? (
        images.map((item, index) => (
          <div key={index} className={CardStyle.cardContainer}>
            <div className={CardStyle.imgContainer}>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`Image ${index}`} className={CardStyle.imgStyle} />
            </div>
            <div className={CardStyle.cardHeader}>
              <span className={CardStyle.title}>{item.original_name}</span>  {/* Título */}
              <span className={CardStyle.data}>Data de Lançamento: {item.first_air_date}</span> {/* Ano de lançamento */}
              {/* <span>{item.overview}</span> */}
            </div>
          </div>
        ))
      ) : (
        <p>Loading images...</p> // Mensagem de carregamento enquanto as imagens não são carregadas
      )}
    </div>
  );
}
