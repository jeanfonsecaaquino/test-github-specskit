import type { NewsDTO } from '../types/news.dto';
import mockData from './mockData.json';

export const getNews = async (): Promise<NewsDTO[]> => {
    // Simuating API latency
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData as NewsDTO[]);
        }, 500);
    });
};

export const getFeaturedNews = async (): Promise<NewsDTO[]> => {
    const allNews = await getNews();
    return allNews.filter(news => news.isFeatured);
};

export const getLatestNews = async (): Promise<NewsDTO[]> => {
    const allNews = await getNews();
    return allNews.filter(news => !news.isFeatured);
};

export const getNewsBySlug = async (slug: string): Promise<NewsDTO | undefined> => {
    const allNews = await getNews();
    return allNews.find(news => news.slug === slug);
};

export const getTopReadNews = async (): Promise<NewsDTO[]> => {
    const allNews = await getNews();
    return [...allNews]
        .sort((a, b) => b.readCount - a.readCount)
        .slice(0, 5);
};

export const searchNews = async (query: string): Promise<NewsDTO[]> => {
    const allNews = await getNews();
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    return allNews.filter(news =>
        news.title.toLowerCase().includes(searchTerm)
    );
};

export const getNewsByBadge = async (badge: string): Promise<NewsDTO[]> => {
    const allNews = await getNews();
    const targetBadge = badge.toLowerCase().trim();
    if (!targetBadge) return [];

    return allNews.filter(news =>
        news.badge?.toLowerCase() === targetBadge
    );
};
