import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './pages/components/navBar/index.jsx';
import Card from './pages/components/cardFilms/cardFilms.jsx';
import CardTvShows from './pages/components/cardTvShows/cardTvShows.jsx';
import './layout.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className="container">
        <div className="navigation-bar">
              <NavBar  />
          </div>

      <div className="cards-container">

      <div className='Films-Container'>
        <h2 className='Title-Films'>Filmes</h2>
      <Card  />
      </div>


      <div className='Shows-Container'>
        <h2 className='Title-Films'>Series</h2>
      <CardTvShows />
      </div>
</div>

  </div>


  </StrictMode>,
)
