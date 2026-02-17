import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import MostReadSection from './MostReadSection';
import * as newsService from '../../services/newsService';
import type { NewsDTO } from '../../types/news.dto';

vi.mock('../../services/newsService');

const mockTopNews = [
    { id: '1', title: 'Top News 1', slug: 'top-1', readCount: 100 },
    { id: '2', title: 'Top News 2', slug: 'top-2', readCount: 80 },
];

describe('MostReadSection', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('renders the most read section with news titles', async () => {
        vi.mocked(newsService.getTopReadNews).mockResolvedValue(mockTopNews as NewsDTO[]);

        render(
            <MemoryRouter>
                <MostReadSection />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Mais Lidas')).toBeInTheDocument();
            expect(screen.getByText('Top News 1')).toBeInTheDocument();
            expect(screen.getByText('Top News 2')).toBeInTheDocument();
            expect(screen.getByText('1')).toBeInTheDocument();
            expect(screen.getByText('2')).toBeInTheDocument();
        });
    });

    it('returns null if no news are available', async () => {
        vi.mocked(newsService.getTopReadNews).mockResolvedValue([]);

        const { container } = render(
            <MemoryRouter>
                <MostReadSection />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(container.firstChild).toBeNull();
        });
    });
});
