import NavBarStyle from './style.module.css';
import svgimg from '../img/logo.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar() {
return (
    <div className={NavBarStyle.ContainerAll}>
      <Link to="/">
      <div className={NavBarStyle.logoContainer}>
        
          <img src={svgimg} className={NavBarStyle.logo} />
        <p className={NavBarStyle.logoText}>Arte Sev7en</p>
        
        </div>
        </Link>
    </div>
  );
}

NavBar.propTypes = {
  setClose: PropTypes.func,
};
