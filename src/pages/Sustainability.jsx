import React, { useEffect } from 'react';
import { Droplet, Sun, Leaf } from 'lucide-react';
import './Sustainability.css';

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sustainability-page">
            <header className="page-header sustainability-header">
                <div className="header-content animate-fade-in">
                    <h1 className="page-title">Grown for Good</h1>
                    <p className="page-subtitle">Sustainable farming isn't just a buzzword for us. It's our standard.</p>
                </div>
            </header>

            <section className="section-container">
                <div className="sus-intro">
                    <h2>Our Eco-Conscious commitment</h2>
                    <p>At Nexora Fresh, we utilize advanced greenhouse technologies to minimize our environmental footprint while maximizing quality.</p>
                </div>

                <div className="sus-card-grid">
                    <div className="sus-card">
                        <Droplet size={48} className="sus-icon" />
                        <h3>Water Conservation</h3>
                        <p>Our drip irrigation systems reduce water usage by up to 80% compared to traditional field farming. Every drop counts.</p>
                    </div>
                    <div className="sus-card">
                        <Leaf size={48} className="sus-icon" />
                        <h3>Chemical Management</h3>
                        <p>We prioritize biological pest control and organic fertilizers, ensuring our produce is safe for you and the soil.</p>
                    </div>
                    <div className="sus-card">
                        <Sun size={48} className="sus-icon" />
                        <h3>Energy Efficiency</h3>
                        <p>Our greenhouses use natural light optimization and energy-efficient climate control to reduce power consumption.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
