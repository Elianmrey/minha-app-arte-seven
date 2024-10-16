import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/cardFilms.jsx';
import CardTvShows from '../../components/cardTvShows/cardTvShows.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/Search/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { GetSearchResults } from '../../Services/SearchContent.module.js';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';

export default function Home() {
    
    const [searchResults, setSearchResults] = useState('');
    
    function SearchGeralContent(term) {
        try {
            const searchResponse =  GetSearchResults(term);
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
            console.log(fetchedData)
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

                <div className={StyleLayout.filmsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                    <Card searchTerm={searchResults} />
                </div>

                <div className={StyleLayout.showsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Series</h2>
                    <CardTvShows searchTerm={searchResults} info={tvData}/>
                </div>
            </div>
        </div>
    );
}
