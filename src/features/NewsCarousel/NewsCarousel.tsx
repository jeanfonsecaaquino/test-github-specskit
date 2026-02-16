import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { CarouselNewsDTO } from '../../types/news.dto';
import './NewsCarousel.css';

interface NewsCarouselProps {
    newsItems: CarouselNewsDTO[];
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
                {newsItems.map((item, index) => (
                    <div className={`carousel-slide ${index === currentIndex ? 'active' : ''}`} key={item.id}>
                        <img src={item.imageUrl} alt={item.title} className="hero-img" />
                        <div className="hero-overlay">
                            {item.badge && <span className="badge">{item.badge}</span>}
                            <h1>{item.title}</h1>
                            <p>{item.summary}</p>
                            <Link to={`/news/${item.slug}`} className="btn-read-more">Leia Mais</Link>
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
