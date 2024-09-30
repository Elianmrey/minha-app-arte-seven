import NavBarStyle from './style.module.css'
import svgimg from '../img/logo.svg'
import PropTypes from 'prop-types'


export default function NavBar() {

  return (
    <div className={NavBarStyle.container}>
      
      <nav className={NavBarStyle.navbar}>
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
          <li><a href="#">Meus filmes alugados</a></li>
          <li><a href="#">Descobrir lançamentos</a></li>
          <li><a href="#">Explorar Generos</a></li>
          <li><a href="#">Recomendados</a></li>
        </ul>
      </nav>

      </div>
  );
}



NavBar.propTypes = {
  openClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}