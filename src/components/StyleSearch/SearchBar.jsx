import StyleSearch from './StyleSearch.module.css'

export default function SearchBar()
{
    return (
        <div className={StyleSearch.Container}>
        <h2>Buscar Filmes</h2>
        <div className={StyleSearch.ContainerSearch}>
            <input type="text" placeholder="Pesquisar aqui" />
            </div>
        </div>
    )
 }