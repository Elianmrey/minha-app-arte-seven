import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/cardFilms.jsx';
import CardTvShows from '../../components/cardTvShows/cardTvShows.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/StyleSearch/SearchBar.jsx';
import { useState } from 'react';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';

export default function Home() {
    
    const [searchTerm, setSearchTerm] = useState('');

   
  async  function SearchGeralContent(term) {
        const processedTerm = term.replace(' ','%') 
     response    GetCardInfo(`https://api.themoviedb.org/3/search/movie?query=${processedTerm}&include_adult=false&language=pt-BR&page=1`)
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
