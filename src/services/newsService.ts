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
