import NavBar from '../../components/navBar/index.jsx';
import Card from '../../components/cardFilms/cardFilms.jsx';
import CardTvShows from '../../components/cardTvShows/cardTvShows.jsx';
import StyleLayout ./layout.module.css'
import { useState } from 'react';
import img from '../../components/img/paranoidMenu.svg'
import SearchBar from '../../components/StyleSearch/SearchBar.jsx';


export default function Home() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    function onClick()
    {
        setIsOpen(!isOpen);
     }



    return (
        <div className={StyleLayout.container}>
            
            <div className={StyleLayout.AsideBarContainer}>
                
            <div className={StyleLayout.AsideBar}>
                    <img src={img} alt="Menu" onClick={()=>onClick()} />
            </div>

            <div className={isOpen ? StyleLayout.navigationBar : StyleLayout.navigationBarClosed }>
                <NavBar openClose={setIsOpen} />
            </div>
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