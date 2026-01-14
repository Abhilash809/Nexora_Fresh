import React from 'react';
import { Sprout, Globe, Award, ShieldCheck } from 'lucide-react';
import './FeaturesSection.css';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <div className={`feature-card animate-fade-in ${delay}`}>
        <div className="feature-icon">
            <Icon size={32} />
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
    </div>
);

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Nexora Fresh?</h2>
                    <p className="section-subtitle">
                        Cultivating excellence through sustainable greenhouse practices and quality control.
                    </p>
                </div>

                <div className="features-grid">
                    <FeatureCard
                        icon={Sprout}
                        title="Greenhouse Grown"
                        description="Our produce is grown in controlled environments ensuring year-round consistency and premium quality."
                        delay="delay-100"
                    />
                    <FeatureCard
                        icon={Award}
                        title="Premium Quality"
                        description="Hand-picked and carefully inspected to meet the highest visual and taste standards."
                        delay="delay-200"
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Export Ready"
                        description="Meeting international standards for packaging and freshness to serve global markets."
                        delay="delay-300"
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Sustainable"
                        description="Water-efficient systems and chemical-free growing methods for a healthier planet."
                        delay=""
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
