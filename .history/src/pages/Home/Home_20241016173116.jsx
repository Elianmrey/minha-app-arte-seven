import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/Card.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/Search/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { GetSearchResults } from '../../Services/SearchContent.module.js';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';

export default function Home() {
    
    
    

    
    const [searchMovieResults, setSearchMovieResults] = useState([]); 
    const [searchQuery, setSearchQuery] = useState("");
    
    function SearchGeralContent(term) {
        try {
            const searchResponse =  GetSearchResults(term);
            
            if (searchResponse)
            {
                setSearchResults(searchResponse);
            } 
        } catch (error) {
            console.error("Tivemos algum problema, vamos resolvê-lo em breve", error);
        } 
    }

    const dataSearchedMovies = searchResults.filter((movie) => movie.media_type === "movie");
    const dataSearchedTv = searchResults.filter((tvProgram) => tvProgram.media_type === "tv");
  


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
      
   
    return (
        
            <div className={StyleLayout.container}>
                <div className={StyleLayout.navigationBarContainer}>
                    <NavBar />
                </div>

            <div className={StyleLayout.cardsContainer}>
                
                    <SearchBar onSearch={SearchGeralContent} />
                {
                    searchResults.length > 0 ? (
                        <div className={StyleLayout.searchContainer}>
                        
                            <div className={StyleLayout.searchResultsContainer}>
                                <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                                <Card info={dataSearchedMovies} cardType="movies" />
                            </div>
                        
                            <div className={StyleLayout.searchResultsContainer}>
                                <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                                <Card info={dataSearchedTv} cardType="tvShows" />
                            </div>

                          </div>
                    ): (<div className = {StyleLayout.Container}>
                <div className={StyleLayout.filmsContainer}>

                    <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                    <Card info={movieData} cardType="movies" />
                </div>

                <div className={StyleLayout.showsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Series</h2>
                    <Card info={tvData} cardType="tvShows" />
                </div>

            </div>)
                }
            </div>
            </div>   
    );
}
