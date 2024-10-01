import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/cardFilms.jsx';
import CardTvShows from '../../components/cardTvShows/cardTvShows.jsx';
import StyleLayout from './layout.module.css'

import SearchBar from '../../components/StyleSearch/SearchBar.jsx';


export default function Home() {
    
    return (
        <div className={StyleLayout.container}>
            
            <div className={StyleLayout.navigationBarContainer}>
                    <NavBar />
            </div>

            <div className={StyleLayout.cardsContainer}>

                <SearchBar />

                <div className={StyleLayout.filmsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                    <Card />
                </div>


                <div className={StyleLayout.showsContainer}>
                    <h2 className={StyleLayout.titleFilms}>Series</h2>
                    <CardTvShows />
                </div>
            </div>

        </div>
    )
}