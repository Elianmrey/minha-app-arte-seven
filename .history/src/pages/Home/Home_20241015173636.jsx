import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/cardFilms.jsx';
import CardTvShows from '../../components/cardTvShows/cardTvShows.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/Search/SearchBar.jsx';
import { useState } from 'react';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';

export default function Home() {
    
    const [searchTerm, setSearchTerm] = useState('');

    const [loading, setLoading] = useState(true); 
       
    async function SearchGeralContent(term) {
        try {
            
            setLoading(true)
            const searchResults = await GetCardInfo(`https://api.themoviedb.org/3/search/multi?query=${term}Gun&include_adult=false&language=en-US&page=1`)
            console.log("Dados de busca", searchResults)
            setSearchTerm(searchResults);
            setLoading(false);
        } catch (error) {
            console.error("Tivemos um problema", error)
        } finally { 
            setLoading(false);
        }
        
    };
        if ()
    return (
        <div className={StyleLayout.container}>
            <div className={StyleLayout.navigationBarContainer}>
                <NavBar />
            </div>

            <div className={StyleLayout.cardsContainer}>
                <SearchBar onSearch={SearchGeralContent} />

                <div className={StyleLayout.filmsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                    <Card searchTerm={searchTerm} />
                </div>

                <div className={StyleLayout.showsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Series</h2>
                    <CardTvShows searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
}
