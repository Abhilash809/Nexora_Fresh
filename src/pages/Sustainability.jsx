import React, { useEffect } from 'react';
import { Droplet, Sun, Leaf } from 'lucide-react';
import './Sustainability.css';

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sustainability-page">
            {/* Section 1: Hero Banner */}
            <header className="sus-hero">
                <div className="sus-hero-texture"></div>
                <div className="sus-hero-overlay"></div>
                <div className="sus-hero-content animate-fade-in">
                    <h1 className="sus-hero-title">Grown for Good</h1>
                    <p className="sus-hero-subtitle">Sustainable farming isn't just a buzzword for us. It's our standard.</p>
                </div>
            </header>

            {/* Section 2: Eco-Conscious Commitment */}
            <section className="sus-intro-section">
                <div className="sus-container">
                    <span className="section-eyebrow">Our Commitment</span>
                    <div className="gold-accent-rule"></div>
                    <h2 className="section-title">Our Eco-Conscious Commitment</h2>
                    <p className="section-subtext">
                        At Nexora Fresh, we utilize advanced greenhouse technologies to minimize our environmental footprint while maximizing quality.
                    </p>
                </div>
            </section>

            {/* Section 3: 3 Pillar Cards */}
            <section className="sus-pillars-section">
                <div className="sus-container">
                    <div className="sus-pillars-grid">
                        <div className="sus-pillar-card animate-fade-in">
                            <div className="sus-pillar-icon">
                                <Droplet size={40} />
                            </div>
                            <h3 className="sus-pillar-title">Water Conservation</h3>
                            <p className="sus-pillar-body">
                                Our drip irrigation systems reduce water usage by up to 80% compared to traditional field farming.
                            </p>
                            <div className="card-hover-border"></div>
                        </div>

                        <div className="sus-pillar-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="sus-pillar-icon">
                                <Leaf size={40} />
                            </div>
                            <h3 className="sus-pillar-title">Chemical Management</h3>
                            <p className="sus-pillar-body">
                                We prioritize biological pest control and organic fertilizers, ensuring our produce is safe for you and the soil.
                            </p>
                            <div className="card-hover-border"></div>
                        </div>

                        <div className="sus-pillar-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="sus-pillar-icon">
                                <Sun size={40} />
                            </div>
                            <h3 className="sus-pillar-title">Energy Efficiency</h3>
                            <p className="sus-pillar-body">
                                Our greenhouses use natural light optimization and energy-efficient climate control to reduce power consumption.
                            </p>
                            <div className="card-hover-border"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Stats / Impact Numbers */}
            <section className="sus-stats-section">
                <div className="sus-container">
                    <div className="sus-stats-grid">
                        <div className="sus-stat-item">
                            <span className="stat-number">80%</span>
                            <span className="stat-label">Water saved vs traditional farming</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="sus-stat-item">
                            <span className="stat-number">0</span>
                            <span className="stat-label">Synthetic chemicals used</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="sus-stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Natural light optimized greenhouses</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="sus-stat-item">
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Export markets served sustainably</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Sustainability Promise */}
            <section className="sus-promise-section">
                <div className="sus-container">
                    <div className="sus-promise-grid">
                        <div className="sus-promise-image animate-slide-right">
                            <img src="/images/sustainability-header.png" alt="Nature and Greenhouse" className="promise-img" />
                        </div>
                        <div className="sus-promise-content animate-slide-left">
                            <span className="section-eyebrow">Our Promise</span>
                            <h2 className="promise-heading">Every harvest leaves the earth better than we found it.</h2>
                            <p className="promise-body">
                                We believe in a long-term commitment to soil health, preserving natural water cycles, 
                                and maintaining chemical-free growing environments. Our methods ensure that we provide 
                                nutrition without compromising the future of our land.
                            </p>
                            <blockquote className="promise-blockquote">
                                "We don't just grow food — we grow responsibility."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
