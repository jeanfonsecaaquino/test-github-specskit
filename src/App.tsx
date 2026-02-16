import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import NewsCarousel from './features/NewsCarousel/NewsCarousel';
import NewsGrid from './features/NewsGrid/NewsGrid';
import NewsCard from './features/NewsGrid/NewsCard';
import { getFeaturedNews, getLatestNews } from './services/newsService';
import type { NewsDTO } from './types/news.dto';
import './index.css';

const App: React.FC = () => {
  const [featuredNews, setFeaturedNews] = useState<NewsDTO[]>([]);
  const [latestNews, setLatestNews] = useState<NewsDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featured, latest] = await Promise.all([
          getFeaturedNews(),
          getLatestNews(),
        ]);
        setFeaturedNews(featured);
        setLatestNews(latest);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Carregando GazetaNews...</div>;
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="hero-section">
          <NewsCarousel newsItems={featuredNews} />

          <div className="secondary-grid">
            {latestNews.slice(0, 2).map((news) => (
              <NewsCard key={news.id} news={news} variant="horizontal" />
            ))}
          </div>
        </section>

        <NewsGrid newsItems={latestNews} title="GazetaNews Destaques" />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} GazetaNews. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
