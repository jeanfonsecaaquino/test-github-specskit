import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import NewsPage from './NewsPage';
import * as newsService from '../../services/newsService';

// Mock the service
vi.mock('../../services/newsService');

const mockNews = {
    id: '1',
    slug: 'test-slug',
    title: 'Test Title',
    summary: 'Test Summary',
    category: 'Test Category',
    imageUrl: 'test-image.jpg',
    publishDate: '2026-02-16',
    fullContent: ['Paragraph 1', 'Paragraph 2']
};

describe('NewsPage', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('renders loading state initially', async () => {
        vi.mocked(newsService.getNewsBySlug).mockReturnValue(new Promise(() => { })); // Never resolves

        render(
            <MemoryRouter initialEntries={['/news/test-slug']}>
                <Routes>
                    <Route path="/news/:slug" element={<NewsPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/Carregando notícia/i)).toBeInTheDocument();
    });

    it('renders news content when slug exists', async () => {
        vi.mocked(newsService.getNewsBySlug).mockResolvedValue(mockNews as any);

        render(
            <MemoryRouter initialEntries={['/news/test-slug']}>
                <Routes>
                    <Route path="/news/:slug" element={<NewsPage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Test Title')).toBeInTheDocument();
            expect(screen.getByText('Test Category')).toBeInTheDocument();
            expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
            expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
        });

        const img = screen.getByAltText('Test Title');
        expect(img).toHaveAttribute('src', 'test-image.jpg');
    });

    it('renders not found state when slug does not exist', async () => {
        vi.mocked(newsService.getNewsBySlug).mockResolvedValue(undefined);

        render(
            <MemoryRouter initialEntries={['/news/non-existent']}>
                <Routes>
                    <Route path="/news/:slug" element={<NewsPage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText(/Notícia não encontrada/i)).toBeInTheDocument();
            expect(screen.getByText(/Voltar para a Home/i)).toBeInTheDocument();
        });
    });
});
