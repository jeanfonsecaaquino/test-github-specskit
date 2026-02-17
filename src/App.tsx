import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NewsCarousel from './features/NewsCarousel/NewsCarousel';
import NewsGrid from './features/NewsGrid/NewsGrid';
import NewsCard from './features/NewsGrid/NewsCard';
import NewsPage from './features/NewsDetail/NewsPage';
import MostReadSection from './features/MostRead/MostReadSection';
import SearchBar from './features/Search/SearchBar';
import SearchResultsPage from './features/Search/SearchResultsPage';
import BadgeResultsPage from './features/BadgeFilter/BadgeResultsPage';
import { useLocation } from 'react-router-dom';
import { getFeaturedNews, getLatestNews } from './services/newsService';
import type { NewsDTO } from './types/news.dto';
import './index.css';

const App: React.FC = () => {
  const location = useLocation();
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
      {!location.pathname.startsWith('/category/') && <SearchBar />}

      <main className="container">
        <Routes>
          <Route path="/" element={
            <section className="hero-section">
              <NewsCarousel newsItems={featuredNews} />

              <div className="secondary-grid">
                {latestNews.slice(0, 2).map((news) => (
                  <NewsCard key={news.id} news={news} variant="horizontal" />
                ))}
              </div>
            </section>
          } />

          <Route path="/news/:slug" element={<NewsPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/category/:badge" element={<BadgeResultsPage />} />

          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <h2>Página não encontrada</h2>
              <a href="/">Voltar para a Home</a>
            </div>
          } />
        </Routes>

        <Routes>
          <Route path="/" element={
            <div className="home-content-grid">
              <NewsGrid newsItems={latestNews} title="GazetaNews Destaques" />
              <MostReadSection />
            </div>
          } />
        </Routes>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} GazetaNews. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
