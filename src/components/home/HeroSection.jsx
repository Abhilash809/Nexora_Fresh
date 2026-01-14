import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content animate-fade-in">
                <h1 className="hero-title">
                    Premium Greenhouse Produce for <br />
                    <span className="text-highlight">Local & Global Markets</span>
                </h1>
                <p className="hero-subtitle">
                    Experience the freshness of Nexora Fresh. Sustainably grown salad cucumbers
                    cultivated with care in our advanced greenhouses.
                </p>
                <div className="hero-actions">
                    <Link to="/products">
                        <Button variant="primary" size="lg">
                            Shop Fresh Produce <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="outline" size="lg" className="btn-hero-outline">
                            Explore Our Greenhouse
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
