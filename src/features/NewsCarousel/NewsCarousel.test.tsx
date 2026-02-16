import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import NewsCarousel from './NewsCarousel';
import type { NewsDTO } from '../../types/news.dto';

const mockNews: NewsDTO[] = [
    {
        id: '1',
        title: 'News 1',
        summary: 'Summary 1',
        category: 'Cat 1',
        imageUrl: 'img1.jpg',
        publishDate: '2026',
        isFeatured: true,
    },
    {
        id: '2',
        title: 'News 2',
        summary: 'Summary 2',
        category: 'Cat 2',
        imageUrl: 'img2.jpg',
        publishDate: '2026',
        isFeatured: true,
    },
];

describe('NewsCarousel Component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('renders the first news item initially', () => {
        render(<NewsCarousel newsItems={mockNews} />);
        expect(screen.getByText('News 1')).toBeInTheDocument();
    });

    it('transitions to the next slide after 3 seconds', () => {
        render(<NewsCarousel newsItems={mockNews} />);

        act(() => {
            vi.advanceTimersByTime(3000);
        });

        expect(screen.getByText('News 2')).toBeInTheDocument();
    });

    it('wraps around to the first slide after the last one', () => {
        render(<NewsCarousel newsItems={mockNews} />);

        act(() => {
            vi.advanceTimersByTime(6000); // 3s + 3s
        });

        expect(screen.getByText('News 1')).toBeInTheDocument();
    });
});
