import StyleSearch from './StyleSearch.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

export default function SearchBar({ onSearch }) {
    
    const [searchTerm, setSearchTerm] = useState('');

    const SearchContent = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };



    return (
        <div className={StyleSearch.Container}>
            <label htmlFor="search" className={StyleSearch.Title}>Buscar Filmes e Series</label>
            <div className={StyleSearch.ContainerSearch}>
                <input
                    type="text"
                    placeholder="Pesquisar aqui"
                    value={searchTerm}
                    onChange={SearchContent} 
                />
            </div>
        </div>
    );
}


SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
