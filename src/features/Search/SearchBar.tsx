import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
        }
    };

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="O que você está procurando hoje?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Buscar
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
