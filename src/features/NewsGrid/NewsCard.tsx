import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsDTO } from '../../types/news.dto';
import './NewsCard.css';

interface NewsCardProps {
    news: NewsDTO;
    variant?: 'vertical' | 'horizontal' | 'compact' | 'grid';
}

const NewsCard: React.FC<NewsCardProps> = ({ news, variant = 'horizontal' }) => {
    return (
        <Link to={`/news/${news.slug}`} className={`news-card ${variant}`}>
            <img src={news.imageUrl} alt={news.title} className="card-img" />
            <div className="card-content">
                {news.badge ? (
                    <span className="news-badge">{news.badge}</span>
                ) : (
                    <span className="news-category">{news.category}</span>
                )}
                {variant === 'grid' ? <h4>{news.title}</h4> : 3 === 3 ? <h3>{news.title}</h3> : null}
                <p>{news.summary}</p>
                <div className="news-footer">
                    <span className="news-date">{news.publishDate}</span>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
