import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopReadNews } from '../../services/newsService';
import type { NewsDTO } from '../../types/news.dto';
import './MostReadSection.styles.css';

const MostReadSection: React.FC = () => {
    const [topNews, setTopNews] = useState<NewsDTO[]>([]);

    useEffect(() => {
        const fetchTopNews = async () => {
            const data = await getTopReadNews();
            setTopNews(data);
        };
        fetchTopNews();
    }, []);

    if (topNews.length === 0) return null;

    return (
        <section className="most-read-container">
            <h3>Mais Lidas</h3>
            <div className="most-read-list">
                {topNews.map((news, index) => (
                    <div key={news.id} className="most-read-item">
                        <span className="most-read-rank">{index + 1}</span>
                        <Link to={`/news/${news.slug}`} className="most-read-link">
                            {news.title}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MostReadSection;
