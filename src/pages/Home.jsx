import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsStrip from '../components/home/StatsStrip';
import FeaturesSection from '../components/home/FeaturesSection';
// import ProductHighlights from '../components/home/ProductHighlights';

const Home = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <HeroSection />
            <StatsStrip />
            <FeaturesSection />
            {/* <ProductHighlights /> */}
        </div>
    );
};

export default Home;
