import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Background layers */}
            <div className="hero-grid-overlay"></div>
            <div className="hero-radial-glow"></div>

            <div className="hero-content">
                {/* Animated pill tag */}
                <div className="hero-pill">
                    <span className="hero-pill-dot"></span>
                    Sri Lanka's Premium Greenhouse
                </div>

                <h1 className="hero-title">
                    Premium Greenhouse<br />
                    Produce for <em className="hero-title-accent">Local &amp; Global Markets</em>
                </h1>

                <p className="hero-subtitle">
                    Experience the freshness of Nexora Fresh. Sustainably grown salad cucumbers
                    cultivated with care in our advanced greenhouses.
                </p>

                <div className="hero-actions">
                    <Link to="/products" className="hero-btn hero-btn-primary">
                        Shop Fresh Produce <ArrowRight size={18} />
                    </Link>
                    <Link to="/about" className="hero-btn hero-btn-ghost">
                        Explore Our Greenhouse
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll-indicator">
                <span className="hero-scroll-label">Scroll</span>
                <span className="hero-scroll-line"></span>
            </div>
        </section>
    );
};

export default HeroSection;
