import { useState, useEffect } from 'react';
import CardStyle from './style.module.css';



export default function FilmCard() {
  const [images, setImages] = useState([]);


  // Função para buscar as imagens da API
  async function GetCardImg() {

    const getEnvKey = import.meta.env.VITE_APP_API_TMDB_KEY;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${getEnvKey}`,
      },
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR', options);

      const data = await response.json();

      return data.results;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  // useEffect para buscar as imagens ao montar o componente
  useEffect(() => {
    GetCardImg().then(fetchedImages => setImages(fetchedImages));
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

              <span key={index} className={CardStyle.title}>{item.original_title}</span>  {/* Titulo*/}
              <span key={index} className={CardStyle.data}>Data de Lançamento: {item.release_date}</span> {/* Ano de lançamento*/}
               {/* <span key={index}>{item.overview}</span> */}

            </div>
          </div>
         ))
      ) : (
        <p>Loading images...</p> // Mensagem de carregamento enquanto as imagens não são carregadas
      )}
    </div>
  );
}
