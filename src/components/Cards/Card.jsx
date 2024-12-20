import CardStyle from './styleFilms.module.css';
import PropTypes from 'prop-types';
import StarRating from '../StarsRating/StarsRating.jsx';
import { Link } from 'react-router-dom';
import ButtonForRent from '../ButtonRent/ButtonRent.jsx';




export default function FilmCard({ info, cardType, favoriteList, HandleFavoriteClick}) {

  return (
    cardType === "movies" ? (
      < div className={CardStyle.generalContainer} >
        {
          info.length > 0 ? (

            info.map((item, index) => (

              <div key={index} className={CardStyle.cardContainer}>
               
                <div className={CardStyle.favContainer} onClick={() => HandleFavoriteClick(item)}>
                  {
                    favoriteList.find(itemFav=>itemFav.id === item.id) ?
                      <div>
                        <span style={{ textShadow: "2px 3px 20px #d00000" }}>❤️</span>
                      </div>
                      :
                      <div>
                        <span style={{ textShadow: "2px 3px 20px #ffba08" }} >🤍</span>
                      </div>
                    
                  }            
                </div>

                <Link to={`/movies/details/${item.id}`}>

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
                    <span className={CardStyle.data}><StarRating voteAverage={item.vote_average} /></span>
                  </div>
                
                </Link>
                <div className={CardStyle.buttonContainer}>
                  <ButtonForRent whatWillRent={`/movies/details/${item.id}`} whatIsIt={'Alugar Filme'} />
                    </div>
              </div>
            ))
          ) : (
            <p>Carregando informações...</p>
          )
        }
      </div >
    )
      :
      (
        <div className={CardStyle.generalContainer}>

          
          {info.length > 0 ? (
            info.map((item, index) => (

              <div key={index} className={CardStyle.cardContainer}>
                
                <dir className={CardStyle.favContainer} onClick={()=>HandleFavoriteClick(item)}>
                  {
                    favoriteList.find(itemFav => itemFav.id === item.id) ?
                      <div>
                        <span style={{ textShadow: "2px 3px 20px 10px red" }}>❤️</span>
                      </div>
                      :
                      <div>
                        <span style={{ textShadow: "2px 3px 20px 10px blue" }} >🤍</span>
                      </div>

                  }                  
                </dir>

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
                <div className={CardStyle.buttonContainer}>
                  <ButtonForRent whatWillRent={`/movies/details/${item.id}`} whatIsIt={'Alugar Serie'} />
                </div>
              </div>
            ))
          ) : (
            <p>Carregando informações...</p>
          )}
        </div>
      )
  )
}



FilmCard.propTypes = {
  info: PropTypes.array.isRequired,
  cardType: PropTypes.string.isRequired,
  favoriteList: PropTypes.array,
  HandleFavoriteClick: PropTypes.func.isRequired,
};
