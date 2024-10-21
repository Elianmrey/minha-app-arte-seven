import StyleNotFound from "./NotFoundStyle.module.css"
import error404 from '../../components/img/Erro404-dark.png'
export default function NotFound() {
    return (
        <div className={StyleNotFound.container}>
           
            <img className={StyleNotFound.image}  src={error404} alt="Erro 404" title="Não encontramos o que busca por aqui :(" />
            <img className={StyleNotFound.imageFloat} src={error404} alt="Erro 404" title="Não encontramos o que busca por aqui :(" />
        </div>
    )
}