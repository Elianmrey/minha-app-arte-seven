import NavBarStyle from './NavBarStyle.module.css';
import svgimg from '../img/logo.svg';
import PropTypes from 'prop-types';
import img from '../../components/img/paranoidMenu.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={NavBarStyle.ContainerAll}>
      <Link to="/">
      <div className={NavBarStyle.logoContainer}>
        
          <img src={svgimg} className={NavBarStyle.logo} />
        <p className={NavBarStyle.logoText}>Arte Sev7en</p>
        
        </div>
      </Link>

      <div className={NavBarStyle.ButtonsContainer}>
        
        <img src={img} alt="Menu" className={NavBarStyle.MenuButton}
          onClick={toggleMenu} style={{ display: isOpen ? 'none' : 'block' }} />
        
        <button className={NavBarStyle.backButton}
          onClick={toggleMenu} style={{ display: isOpen ? 'block' : 'none' }}>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" />
          </svg>

        </button>
      </div>

      <ul className={`${NavBarStyle.menu} ${isOpen ? NavBarStyle.menuOpen : NavBarStyle.menuClosed}`}>
        <li onClick={toggleMenu}><Link to="/">Home</Link></li>
        <li onClick={toggleMenu}><Link to="/">Minha Conta</Link></li>
        <li onClick={toggleMenu}><Link to="/favlist">Favoritos</Link></li>
        <li onClick={toggleMenu}><Link to="/">Meus filmes</Link></li>
        <li onClick={toggleMenu}><Link to="/">Lançamentos</Link></li>
        <li onClick={toggleMenu}><Link to="/">Gêneros</Link></li>
        <li onClick={toggleMenu}><Link to="/">Recomendados</Link></li>
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  setClose: PropTypes.func,
};
