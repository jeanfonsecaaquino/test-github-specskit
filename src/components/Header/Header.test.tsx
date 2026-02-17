import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
    it('renders the logo text', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getByAltText(/GazetaNews Logo/i)).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getByText('Principais')).toBeInTheDocument();
        expect(screen.getByText('Economia')).toBeInTheDocument();
    });
});
