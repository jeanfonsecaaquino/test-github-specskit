import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo">
                        <img
                            src="/src/assets/logo.png"
                            alt="GazetaNews Logo"
                            className="logo-img"
                        />
                    </Link>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Principais</Link></li>
                        <li><Link to="/category/economia" onClick={() => setIsMenuOpen(false)}>Economia</Link></li>
                        <li><Link to="/category/tecnologia" onClick={() => setIsMenuOpen(false)}>Tecnologia</Link></li>
                        <li><Link to="/category/esportes" onClick={() => setIsMenuOpen(false)}>Esportes</Link></li>
                        <li><Link to="/category/internacional" onClick={() => setIsMenuOpen(false)}>Internacional</Link></li>
                    </ul>
                    <div className="user-action">Minha Conta</div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
