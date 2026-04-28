import React, { useEffect } from 'react';
import { Globe, Leaf, Zap } from 'lucide-react';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const DecorativeStar = ({ className }) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
        </svg>
    );

    return (
        <div className="about-page-redesign">
            {/* Section 1: Hero Banner */}
            <header className="new-about-hero">
                <div className="hero-grid-texture"></div>
                <div className="hero-content-center animate-fade-in">
                    <DecorativeStar className="star star-tl gold-star" />
                    <DecorativeStar className="star star-br gold-star" />
                    <span className="hero-eyebrow">About Us</span>
                    <h1 className="hero-headline">Our Roots</h1>
                    <p className="hero-subtext">Growing the future of food, right here in Sri Lanka.</p>
                </div>
            </header>

            {/* Section 2: Photo Strip */}
            <section className="photo-strip">
                <div className="strip-image taller"><img src="/images/about-strip-1.png" alt="Greenhouse Interior" /></div>
                <div className="strip-image shorter"><img src="/images/about-strip-2.png" alt="Premium Cucumbers" /></div>
                <div className="strip-image taller"><img src="/images/about-strip-3.png" alt="Facility Exterior" /></div>
                <div className="strip-image shorter"><img src="/images/about-strip-4.png" alt="Harvesting" /></div>
            </section>

            {/* Section 3: Mission Statement */}
            <section className="mission-section">
                <div className="mission-container">
                    <div className="mission-header">
                        <div className="gold-accent-rule"></div>
                        <h2 className="mission-title">We grow food with purpose & precision</h2>
                    </div>
                    <div className="mission-grid">
                        <div className="mission-col">
                            <p>
                                Nexora Fresh began with a simple mission: to provide the freshest, highest-quality salad cucumbers to local families. 
                                What started as a small passion project in Kandy has grown into a state-of-the-art greenhouse facility, 
                                blending traditional farming wisdom with modern agricultural technology.
                            </p>
                        </div>
                        <div className="mission-col">
                            <p>
                                We believe that truly premium produce comes from a respect for nature. Every cucumber we harvest is a product 
                                of meticulous care, sustainable practices, and a commitment to excellence. We are building the infrastructure 
                                and quality standards required to put Sri Lankan produce on the global map.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Founder/Vision Block */}
            <section className="vision-founder-section">
                <div className="vision-container">
                    <div className="vision-grid-new">
                        <div className="vision-image-col animate-slide-right">
                            <div className="founder-image-card">
                                <img src="/images/about-founder-new.png" alt="Nexora Fresh Founder" className="founder-img" />
                                <div className="founder-quote-bar">
                                    <p className="quote-text">"Growing with care, harvesting with pride"</p>
                                    <span className="founder-label">Nexora Fresh Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="vision-text-col animate-slide-left">
                            <span className="section-eyebrow-accent">Our Vision</span>
                            <h2 className="section-heading-display">We empower Sri Lankan agriculture</h2>
                            <div className="vision-body-text">
                                <p>
                                    Our goal is to revolutionize the agricultural landscape of Sri Lanka. By implementing 
                                    advanced climate-controlled environments, we ensure consistent quality regardless 
                                    of external weather patterns.
                                </p>
                                <blockquote className="vision-blockquote">
                                    "By 2027, we envision expanding our portfolio to set a new benchmark for 'Fresh from the Island'."
                                </blockquote>
                                <p>
                                    We are dedicated to sustainable growth, empowering local communities through knowledge 
                                    sharing and creating opportunities for high-standard agricultural exports.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Why Choose Nexora */}
            <section className="why-choose-section">
                <div className="hero-grid-texture opacity-20"></div>
                <div className="why-container">
                    <div className="why-header">
                        <DecorativeStar className="star star-l gold-star" />
                        <h2 className="why-title">We help Sri Lanka grow fresher and farther</h2>
                        <p className="why-subtitle">Excellence in every vine, sustainability in every drop.</p>
                        <DecorativeStar className="star star-r gold-star" />
                    </div>
                    <div className="why-grid">
                        <div className="why-col">
                            <div className="icon-circle">
                                <Zap size={24} color="#0f2e1a" />
                            </div>
                            <h3 className="why-col-title">Greenhouse Experts</h3>
                            <p className="why-col-desc">Mastering climate-controlled precision farming.</p>
                        </div>
                        <div className="why-col">
                            <div className="icon-circle">
                                <Globe size={24} color="#0f2e1a" />
                            </div>
                            <h3 className="why-col-title">Export Focused</h3>
                            <p className="why-col-desc">Meeting global standards for premium produce.</p>
                        </div>
                        <div className="why-col">
                            <div className="icon-circle">
                                <Leaf size={24} color="#0f2e1a" />
                            </div>
                            <h3 className="why-col-title">Sustainability First</h3>
                            <p className="why-col-desc">Minimal water waste and eco-friendly practices.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
