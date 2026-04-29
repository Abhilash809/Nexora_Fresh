import React, { useEffect, useState } from 'react';
import { Droplet, Sun, Leaf, Recycle, Sprout, ShieldCheck, Wind } from 'lucide-react';
import './Sustainability.css';

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activePillar, setActivePillar] = useState(null);
    const [selectedPillar, setSelectedPillar] = useState(null);

    const pillars = [
        {
            id: 1,
            title: "Water Conservation",
            description: "Drip irrigation systems reduce water usage by up to 80% compared to traditional field farming.",
            icon: <Droplet size={28} />,
            theme: "water"
        },
        {
            id: 2,
            title: "Chemical Management",
            description: "100% organic fertilizers and biological pest control ensure soil health and safety.",
            icon: <Leaf size={28} />,
            theme: "nature"
        },
        {
            id: 3,
            title: "Energy Efficiency",
            description: "Natural light optimization and smart climate control minimize our energy footprint.",
            icon: <Sun size={28} />,
            theme: "energy"
        },
        {
            id: 4,
            title: "Waste Reduction",
            description: "Zero-waste packaging and advanced composting initiatives close the loop.",
            icon: <Recycle size={28} />,
            theme: "waste"
        },
        {
            id: 5,
            title: "Soil Health",
            description: "Regenerative practices ensure our land remains nutrient-rich for generations.",
            icon: <Sprout size={28} />,
            theme: "soil"
        },
        {
            id: 6,
            title: "Ethical Sourcing",
            description: "Fair wages and safe working conditions for every member of our farming community.",
            icon: <ShieldCheck size={28} />,
            theme: "ethical"
        },
        {
            id: 7,
            title: "Carbon Footprint",
            description: "Optimized local distribution paths to minimize transit emissions and stay fresh.",
            icon: <Wind size={28} />,
            theme: "carbon"
        }
    ];

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

            {/* Section 3: Interactive Circular Wheel */}
            <section className={`sus-pillars-section theme-${selectedPillar?.theme || 'default'}`}>
                <div className="theme-overlay"></div>
                <div className="sus-container">
                    <div className="sus-wheel-wrapper">
                        <div className="sus-wheel-orbit">
                            {pillars.map((pillar, index) => {
                                const angle = (index / pillars.length) * 360;
                                return (
                                    <div 
                                        key={pillar.id} 
                                        className="sus-orbit-item-container"
                                        style={{ '--angle': `${angle}deg` }}
                                        onMouseEnter={() => setActivePillar(pillar)}
                                        onMouseLeave={() => setActivePillar(null)}
                                        onClick={() => setSelectedPillar(selectedPillar?.id === pillar.id ? null : pillar)}
                                    >
                                        <div className={`sus-orbit-item ${activePillar?.id === pillar.id ? 'active' : ''} ${selectedPillar?.id === pillar.id ? 'selected' : ''}`}>
                                            <div className="sus-orbit-icon-box">
                                                {pillar.icon}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div className={`sus-wheel-center ${activePillar || selectedPillar ? 'has-active' : ''}`}>
                            <div className="center-glow"></div>
                            {!activePillar && !selectedPillar ? (
                                <div className="center-default animate-fade-in">
                                    <span className="center-eyebrow">Nexora</span>
                                    <h3 className="center-title">Eco System</h3>
                                    <div className="center-divider"></div>
                                    <p className="center-text">Hover or Click a bubble</p>
                                </div>
                            ) : (
                                <div className="center-active animate-fade-in">
                                    <h3 className="active-pillar-title">{(activePillar || selectedPillar).title}</h3>
                                    <div className="center-divider"></div>
                                    <p className="active-pillar-desc">{(activePillar || selectedPillar).description}</p>
                                </div>
                            )}
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
