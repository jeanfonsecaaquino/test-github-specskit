import React from 'react';
import type { NewsDTO } from '../../types/news.dto';
import './NewsCard.css';

interface NewsCardProps {
    news: NewsDTO;
    variant?: 'horizontal' | 'grid';
}

const NewsCard: React.FC<NewsCardProps> = ({ news, variant = 'horizontal' }) => {
    return (
        <div className={`news-card ${variant}`}>
            <img src={news.imageUrl} alt={news.title} className="card-img" />
            <div className="card-content">
                {variant === 'grid' ? <h4>{news.title}</h4> : <h3>{news.title}</h3>}
                <p>{news.summary}</p>
            </div>
        </div>
    );
};

export default NewsCard;
