import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/Card.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/Search/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { GetSearchResults } from '../../Services/SearchContent.module.js';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';

export default function Home() {
    
    
    // eslint-disable-next-line no-unused-vars
    const [searchResults, setSearchResults] = useState([]); //Desenvolver a busca Hj durante o dia 
    
    function SearchGeralContent(term) {
        try {
            const searchResponse = GetSearchResults(term);
            if (searchResponse && searchResponse.results) {
                setSearchResults(searchResponse);
                console.log(searchResponse)

            } else {
                console.log("Carregando");
            }
        } catch (error) {
            console.error("Tivemos algum problema por aí, vamos resolvê-lo em breve", error);
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
            
        
    return (
        
            <div className={StyleLayout.container}>
                <div className={StyleLayout.navigationBarContainer}>
                    <NavBar />
                </div>

            <div className={StyleLayout.cardsContainer}>
                
                    <SearchBar onSearch={SearchGeralContent} />
                {
                    searchResults.length > 0 ? ( 
                        <div className = {StyleLayout.searchResultsContainer}></>
                          
                    ): (<div className = {StyleLayout.searchResultsContainer}>
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
