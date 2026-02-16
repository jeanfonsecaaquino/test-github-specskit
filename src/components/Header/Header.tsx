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
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Principais</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Economia</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Tecnologia</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Internacional</a></li>
                    </ul>
                    <div className="user-action">Minha Conta</div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
