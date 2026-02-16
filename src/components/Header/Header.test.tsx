import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
    it('renders the GazetaNews logo', () => {
        render(<Header />);
        const logo = screen.getByAltText('GazetaNews Logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Header />);
        expect(screen.getByText('Principais')).toBeInTheDocument();
        expect(screen.getByText('Economia')).toBeInTheDocument();
    });
});
