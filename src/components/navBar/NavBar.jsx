import NavBarStyle from './style.module.css'
import svgimg from '../img/logo.svg'
import PropTypes from 'prop-types'
import img from '../../components/img/paranoidMenu.svg'
import { useState } from 'react';

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  function onClickClose() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen? NavBarStyle.ContainerAll : NavBarStyle.ContainerAllClosed}>
     
      <div className={NavBarStyle.AsideBarContainer}>    
        <div className={!isOpen ? NavBarStyle.AsideBar : NavBarStyle.AsideBarClosed}>
            <img src={img} alt="Menu" onClick={() => onClickClose()} />
          </div>
      </div>
      
      <div className={isOpen ? NavBarStyle.navigationBar : NavBarStyle.navigationBarClosed}>
        
            <div className={NavBarStyle.navbarButonContainer}>
              <button className={NavBarStyle.navbarButon} onClick={() => onClickClose()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" />
                </svg>

          </button>
        </div>


        <div className={ NavBarStyle.logoContainer}>
          <img src={svgimg} className={NavBarStyle.logo} />
          <p className= {NavBarStyle.logoText}>
            Arte sev7en
          </p>
        </div>

        <ul className={NavBarStyle.menu}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Minha Conta</a></li>
          <li><a href="#">Favoritos</a></li>
          <li><a href="#">Meus filmes </a></li>
          <li><a href="#">Lançamentos</a></li>
          <li><a href="#">Generos</a></li>
          <li><a href="#">Recomendados</a></li>
        </ul>
        </div>
      </div>
  );
}



NavBar.propTypes = {
  setClose: PropTypes.func,
}