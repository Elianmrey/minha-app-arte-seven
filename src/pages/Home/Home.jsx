import NavBar from '../../components/navBarWithMenu/NavBarWithMenu.jsx';
import Card from '../../components/Cards/Card.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/Search/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { GetSearchResults } from '../../Services/SearchContent.module.js';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';
import { GetFromLocalStrg, SaveToLocalStrg } from '../../Services/LocalStorageManagement.js';


export default function Home() {


    const [searchMovieResults, setSearchMovieResults] = useState([]); 
    const [searchTvResult, setSearchTvResult] = useState("");
    
   async function SearchGeralContent(term) {
        try {
            const searchResponse = await GetSearchResults(term);
            
            if (searchResponse)
            {
                setSearchMovieResults(await searchResponse.filter(movie => movie.media_type === "movie"));
                setSearchTvResult(await searchResponse.filter(movie => movie.media_type === "tv"));
            } 
        } catch (error) {
            console.error("Tivemos algum problema, vamos resolvê-lo em breve", error);
        } 
    }

    const [tvData, setTvData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await GetCardInfo('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc');
            setTvData(fetchedData);
        }
        fetchData();
    }, []);



    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedImages = await GetCardInfo('https://api.themoviedb.org/3/discover/movie?language=pt-BR');
            setMovieData(fetchedImages);
        }
        fetchData();
    }, []);
      
    const favorites = GetFromLocalStrg("@favoriteList");

    const [favoriteList, setFavoriteList] = useState([...favorites]);


    function HandleFavoriteClick(item) {

        favoriteList.find(itemFav=>itemFav.id === item.id) ? (setFavoriteList(favoriteList.filter(itemId => itemId.id != item.id)))
            :
            setFavoriteList([...favoriteList, item]);
        
    }


    SaveToLocalStrg("@favoriteList", favoriteList);
    
    return (
        
            <div className={StyleLayout.container}>
                <div className={StyleLayout.navigationBarContainer}>
                    <NavBar />
                </div>
            

            <div className={StyleLayout.cardsContainer}>
                
                    <SearchBar onSearch={SearchGeralContent} />
                {
                    searchMovieResults.length > 0 || searchTvResult.length > 0 ? (
                        
                        <div className={StyleLayout.searchContainer}>
                        
                            <div className={StyleLayout.searchResultsContainer}>
                                <h2 className={StyleLayout.titleFilms}>Resultados da Busca por Filmes</h2>
                                <Card info={searchMovieResults} cardType="movies" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favoriteList} />
                            </div>
                        
                            <div className={StyleLayout.searchResultsContainer}>
                                <h2 className={StyleLayout.titleFilms}>Resultados da Busca por Programas e Series</h2>
                                <Card info={searchTvResult} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favoriteList} />
                            </div>

                          </div>
                    ): (<div className = {StyleLayout.Container}>
                <div className={StyleLayout.filmsContainer}>

                    <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                                <Card info={movieData} cardType="movies" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favoriteList} />
                </div>

                <div className={StyleLayout.showsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Series</h2>
                                <Card info={tvData} cardType="tvShows" HandleFavoriteClick={HandleFavoriteClick} favoriteList={favoriteList} />
                </div>

            </div>)
                }
            </div>
            </div>   
    );
}