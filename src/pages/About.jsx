import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <header className="page-header about-header">
                <div className="header-content animate-fade-in">
                    <h1 className="page-title">Our Roots</h1>
                    <p className="page-subtitle">Growing the future of food, right here in Sri Lanka.</p>
                </div>
            </header>

            <section className="section-container">
                <div className="two-col-grid">
                    <div className="text-col animate-slide-right">
                        <h2>The Nexora Story</h2>
                        <p>
                            Nexora Fresh began with a simple mission: to provide the freshest, highest-quality salad cucumbers to local families.
                            What started as a small passion project has grown into a state-of-the-art greenhouse facility in Kandy,
                            blending traditional farming wisdom with modern agricultural technology.
                        </p>
                        <p>
                            We believe that truly premium produce comes from a respect for nature. That's why every cucumber we harvest is
                            a product of meticulous care, sustainable practices, and a commitment to excellence that borders on obsession.
                        </p>
                    </div>
                    <div className="image-col animate-slide-left">
                        <img src="/images/about-interior.png" alt="Greenhouse Interior" />
                    </div>
                </div>
            </section>

            <section className="section-container bg-offset">
                <div className="two-col-grid reverse">
                    <div className="text-col animate-slide-left">
                        <h2>Our Vision</h2>
                        <p>
                            We aim to put Sri Lankan premium produce on the global map. While we are proud to serve our local community,
                            Nexora Fresh is building the infrastructure and quality standards required for international export.
                        </p>
                        <p>
                            By 2027, we envision expanding our portfolio to include organic bell peppers, tomatoes, and leafy greens,
                            setting a new benchmark for "Fresh from the Island".
                        </p>
                    </div>
                    <div className="image-col animate-slide-right">
                        <img src="/images/about-export.png" alt="Fresh Produce Export" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
