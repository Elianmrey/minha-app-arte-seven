import HomeStyle from './style.module.css'
import svgimg from '../../assets/img/logo.svg'


export default function Home() {
  return (
    <div className={HomeStyle.container}>
      <nav className={HomeStyle.navbar} onClick={() => onClick()}>
        <div className={ HomeStyle.logoContainer}>
          <img src={svgimg} className={HomeStyle.logo} />
          <p className= {HomeStyle.logoText}>
            Arte sev7en
          </p>
        </div>

        <ul className={HomeStyle.menu}>
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

function onClick() {

  return (console.log("Olá mundo"));
}