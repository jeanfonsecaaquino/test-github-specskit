import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BadgeResultsPage from './BadgeResultsPage';
import * as newsService from '../../services/newsService';
import type { NewsDTO } from '../../types/news.dto';

vi.mock('../../services/newsService');

const mockNews = [
    { id: '1', title: 'Tech News 1', badge: 'tecnologia', slug: 'tech-1' },
    { id: '2', title: 'Tech News 2', badge: 'tecnologia', slug: 'tech-2' },
];

describe('BadgeResultsPage', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('renders filtered news based on badge param', async () => {
        vi.mocked(newsService.getNewsByBadge).mockResolvedValue(mockNews as NewsDTO[]);

        render(
            <MemoryRouter initialEntries={['/category/tecnologia']}>
                <Routes>
                    <Route path="/category/:badge" element={<BadgeResultsPage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Categoria:')).toBeInTheDocument();
            expect(screen.getByText('tecnologia')).toBeInTheDocument();
            expect(screen.getByText('Tech News 1')).toBeInTheDocument();
            expect(screen.getByText('Tech News 2')).toBeInTheDocument();
        });
    });

    it('shows empty state when no news found', async () => {
        vi.mocked(newsService.getNewsByBadge).mockResolvedValue([]);

        render(
            <MemoryRouter initialEntries={['/category/vazio']}>
                <Routes>
                    <Route path="/category/:badge" element={<BadgeResultsPage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Nenhum conteúdo encontrado')).toBeInTheDocument();
        });
    });
});
