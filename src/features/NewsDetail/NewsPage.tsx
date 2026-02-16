import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNewsBySlug } from '../../services/newsService';
import type { NewsDTO } from '../../types/news.dto';
import './NewsPage.styles.css';

const NewsPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [news, setNews] = useState<NewsDTO | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            if (slug) {
                setLoading(true);
                const data = await getNewsBySlug(slug);
                setNews(data || null);
                setLoading(false);
            }
        };

        fetchNews();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return <div className="loading">Carregando notícia...</div>;
    }

    if (!news) {
        return (
            <div className="news-page not-found">
                <h2>Notícia não encontrada</h2>
                <p>A notícia que você está procurando não existe ou foi removida.</p>
                <Link to="/" className="back-link">Voltar para a Home</Link>
            </div>
        );
    }

    return (
        <article className="news-page">
            <header className="news-header">
                <span className="news-category">{news.category}</span>
                <h1 className="news-title">{news.title}</h1>
                <div className="news-meta">
                    <time dateTime={news.publishDate}>
                        {new Date(news.publishDate).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </time>
                </div>
            </header>

            {news.imageUrl && (
                <img src={news.imageUrl} alt={news.title} className="news-main-image" />
            )}

            <div className="news-content">
                {news.fullContent.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <footer style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <Link to="/" className="back-link">← Voltar para a Home</Link>
            </footer>
        </article>
    );
};

export default NewsPage;
