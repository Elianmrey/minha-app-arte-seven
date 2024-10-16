import NavBar from '../../components/navBar/NavBar.jsx';
import Card from '../../components/cardFilms/Card.jsx';
import StyleLayout from './layout.module.css';
import SearchBar from '../../components/Search/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { GetSearchResults } from '../../Services/SearchContent.module.js';
import GetCardInfo from '../../Services/FetchAnyContent.module.js';

export default function Home() {
    
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]); 
    const [tvData, setTvData] = useState([]);
    const [movieData, setMovieData] = useState([]);

    // Função para buscar conteúdo com base na pesquisa
    async function SearchGeralContent(term) {
        try {
            setLoading(true);
            const searchResponse = await GetSearchResults(term);
            const data = await searchResponse.json();
            if (data && data.results) {
                setSearchResults(data.results);
            }
        } catch (error) {
            console.error("Tivemos algum problema por aí, vamos resolvê-lo em breve", error);
        } finally {
            setLoading(false);
        }
    }

    // Fetch TV shows ao carregar o componente
    useEffect(() => {
        async function fetchTvData() {
            const fetchedData = await GetCardInfo('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc');
            setTvData(fetchedData.results || []);
        }

        fetchTvData();
    }, []);

    // Fetch Movies ao carregar o componente
    useEffect(() => {
        async function fetchMovieData() {
            const fetchedImages = await GetCardInfo('https://api.themoviedb.org/3/discover/movie?language=pt-BR');
            setMovieData(fetchedImages.results || []);
        }

        fetchMovieData();
    }, []);

    // Mostrar carregamento enquanto busca
    if (loading) return (<div>Carregando...</div>);

    return (
        <div className={StyleLayout.container}>
            <div className={StyleLayout.navigationBarContainer}>
                <NavBar />
            </div>

            <div className={StyleLayout.cardsContainer}>
                <SearchBar onSearch={SearchGeralContent} />

                {/* Renderiza resultados de pesquisa ou filmes/séries padrões */}
                {searchResults.length > 0 ? (
                    <div className={StyleLayout.searchResultsContainer}>
                        <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                        <Card info={searchResults} cardType="movies" />
                    </div>
                ) : (
                    <div className={StyleLayout.Container}>
                        <div className={StyleLayout.filmsContainer}>
                            <h2 className={StyleLayout.titleFilms}>Filmes</h2>
                            <Card info={movieData} cardType="movies" />
                        </div>

                        <div className={StyleLayout.showsContainer}>
                            <h2 className={StyleLayout.titleFilms}>Séries</h2>
                            <Card info={tvData} cardType="tvShows" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
