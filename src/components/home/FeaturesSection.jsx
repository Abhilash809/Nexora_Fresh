import React from 'react';
import { Sprout, Globe, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FeaturesSection.css';

const features = [
    {
        num: '01',
        icon: Sprout,
        title: 'Greenhouse Grown',
        description: 'Our produce is grown in controlled environments ensuring year-round consistency and premium quality.',
    },
    {
        num: '02',
        icon: Award,
        title: 'Premium Quality',
        description: 'Hand-picked and carefully inspected to meet the highest visual and taste standards.',
    },
    {
        num: '03',
        icon: Globe,
        title: 'Export Ready',
        description: 'Meeting international standards for packaging and freshness to serve global markets.',
    },
    {
        num: '04',
        icon: ShieldCheck,
        title: 'Sustainable',
        description: 'Water-efficient systems and chemical-free growing methods for a healthier planet.',
    },
];

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                {/* Section header */}
                <div className="features-header">
                    <div className="features-header-left">
                        <span className="features-eyebrow">Why choose us</span>
                        <h2 className="features-title">Built on Quality &amp; Sustainability</h2>
                    </div>
                    <Link to="/about" className="features-link">
                        Learn more &rarr;
                    </Link>
                </div>

                {/* Feature cards grid */}
                <div className="features-grid">
                    {features.map((f) => (
                        <div className="feature-card" key={f.num}>
                            <span className="feature-num">{f.num}</span>
                            <div className="feature-icon">
                                <f.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="feature-card-title">{f.title}</h3>
                            <p className="feature-card-desc">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
