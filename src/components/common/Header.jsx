import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';
import { siteConfig } from '../../config';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { toggleCart, getCartCount } = useCart();
    const { currency, toggleCurrency } = useCurrency();

    const location = useLocation();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const isSustainability = location.pathname === '/sustainability';
    const isContact = location.pathname === '/contact';
    const isProducts = location.pathname.startsWith('/products');
    const isTransparent = isHome || isAbout || isSustainability || isContact;
    const headerClass = `header ${scrolled ? 'scrolled' : ''} ${!isTransparent ? (isProducts ? 'products' : 'solid') : ''}`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={headerClass}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    {siteConfig.brand.name.toUpperCase()} <span className="logo-fresh">{siteConfig.brand.highlight.toUpperCase()}</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Products</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
                    <NavLink to="/sustainability" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Sustainability</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
                </nav>

                {/* Actions */}
                <div className="header-actions">
                    <button onClick={toggleCurrency} className="icon-btn currency-toggle" aria-label="Toggle Currency">
                        <span className="currency-text">{currency}</span>
                    </button>

                    <Link to="/login" className="icon-btn user-btn" aria-label="Login">
                        <User size={22} />
                    </Link>

                    <button onClick={toggleCart} className="icon-btn cart-btn" aria-label="Open Cart">
                        <ShoppingBag size={22} />
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </button>

                    <button onClick={toggleMenu} className="icon-btn mobile-menu-btn" aria-label="Toggle Menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <nav>
                    <NavLink to="/" onClick={toggleMenu} className="mobile-nav-link">Home</NavLink>
                    <NavLink to="/products" onClick={toggleMenu} className="mobile-nav-link">Products</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className="mobile-nav-link">About Us</NavLink>
                    <NavLink to="/sustainability" onClick={toggleMenu} className="mobile-nav-link">Sustainability</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className="mobile-nav-link">Contact</NavLink>
                    <NavLink to="/login" onClick={toggleMenu} className="mobile-nav-link">Login / Register</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
