import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchNews } from '../../services/newsService';
import type { NewsDTO } from '../../types/news.dto';
import NewsCard from '../NewsGrid/NewsCard';
import './SearchBar.css';

const SearchResultsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<NewsDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            const data = await searchNews(query);
            setResults(data);
            setLoading(false);
        };
        fetchResults();
    }, [query]);

    return (
        <div className="search-results-container">
            <div className="search-results-header">
                <h2>Resultados para: <strong>{query}</strong></h2>
                <p>{results.length} notícias encontradas</p>
            </div>

            {loading ? (
                <div className="loading">Buscando notícias...</div>
            ) : results.length > 0 ? (
                <div className="news-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {results.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <h3>Ops! Nenhum resultado encontrado.</h3>
                    <p>Tente buscar por termos mais genéricos ou verifique a ortografia.</p>
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;
