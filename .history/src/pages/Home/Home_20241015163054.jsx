import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/cardFilms.jsx';
import CardTvShows from '../../components/cardTvShows/cardTvShows.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/StyleSearch/SearchBar.jsx';
import { useState } from 'react';

export default function Home() {
    
    const [searchTerm, setSearchTerm] = useState('');

   
    function SearchGeralContent(term) {
        https://api.themoviedb.org/3/search/movie?query=Top%20Gun&include_adult=false&language=en-US&page=1
        setSearchTerm(term); 
        
    };

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
