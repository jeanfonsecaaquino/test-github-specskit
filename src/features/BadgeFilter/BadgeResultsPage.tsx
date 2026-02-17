import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByBadge } from '../../services/newsService';
import type { NewsDTO } from '../../types/news.dto';
import NewsCard from '../NewsGrid/NewsCard';
import './BadgeResultsPage.styles.css';

const BadgeResultsPage: React.FC = () => {
    const { badge } = useParams<{ badge: string }>();
    const [results, setResults] = useState<NewsDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            if (badge) {
                setLoading(true);
                const data = await getNewsByBadge(badge);
                setResults(data);
                setLoading(false);
            }
        };
        fetchResults();
    }, [badge]);

    return (
        <div className="badge-results-container">
            <div className="badge-results-header">
                <h1 className="category-title">Categoria: <span>{badge}</span></h1>
                <p className="results-count">{results.length} notícias encontradas</p>
            </div>

            {loading ? (
                <div className="loading-state">Carregando notícias...</div>
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
                <div className="no-results-state">
                    <h3>Nenhum conteúdo encontrado</h3>
                    <p>Parece que ainda não temos notícias publicadas para esta categoria.</p>
                </div>
            )}
        </div>
    );
};

export default BadgeResultsPage;
