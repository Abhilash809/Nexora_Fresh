import React from 'react';
import './StatsStrip.css';

const stats = [
    { number: '12+', label: 'Years of Experience' },
    { number: '98%', label: 'Quality Rate' },
    { number: '40+', label: 'Export Markets' },
    { number: '0', label: 'Chemicals Used' },
];

const StatsStrip = () => {
    return (
        <section className="stats-strip">
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <span className="stat-number">{stat.number}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsStrip;
