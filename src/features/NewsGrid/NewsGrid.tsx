import React from 'react';
import type { NewsDTO } from '../../types/news.dto';
import NewsCard from './NewsCard';
import './NewsGrid.css';

interface NewsGridProps {
    newsItems: NewsDTO[];
    title: string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ newsItems, title }) => {
    return (
        <div className="news-grid-section">
            <h2 className="section-title">{title}</h2>
            <div className="bottom-grid">
                {newsItems.map((news) => (
                    <div key={news.id} className="grid-item-wrapper">
                        <NewsCard news={news} variant="grid" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsGrid;
