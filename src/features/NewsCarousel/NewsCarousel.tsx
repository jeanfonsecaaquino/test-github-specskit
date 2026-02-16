import React, { useState, useEffect } from 'react';
import type { NewsDTO } from '../../types/news.dto';
import './NewsCarousel.css';

interface NewsCarouselProps {
    newsItems: NewsDTO[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [newsItems.length]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    if (!newsItems.length) return null;

    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {newsItems.map((item) => (
                    <div key={item.id} className="carousel-slide">
                        <img src={item.imageUrl} alt={item.title} className="hero-img" />
                        <div className="hero-overlay">
                            {item.badge && <span className="badge">{item.badge}</span>}
                            <h1>{item.title}</h1>
                            <p>{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {newsItems.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsCarousel;
