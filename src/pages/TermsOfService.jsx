import React, { useEffect } from 'react';
import { siteConfig } from '../config';
import './TermsOfService.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="terms-page">
            {/* Page Header */}
            <header className="terms-header">
                <div className="terms-header-content">
                    <span className="terms-eyebrow">Legal</span>
                    <div className="gold-accent-rule"></div>
                    <h1 className="terms-title">Terms of Service</h1>
                    <p className="terms-last-updated">Last Updated: April 29, 2026</p>
                </div>
            </header>

            <div className="terms-divider-line"></div>

            {/* Main Content Area */}
            <main className="terms-main">
                <div className="terms-container">
                    {/* Left Sidebar - Table of Contents */}
                    <aside className="terms-sidebar">
                        <div className="toc-wrapper">
                            <span className="toc-label">Contents</span>
                            <div className="toc-divider"></div>
                            <nav className="toc-nav">
                                <button onClick={() => scrollToSection('section-1')} className="toc-link">1. Introduction</button>
                                <button onClick={() => scrollToSection('section-2')} className="toc-link">2. Products and Pricing</button>
                                <button onClick={() => scrollToSection('section-3')} className="toc-link">3. Shipping and Delivery</button>
                                <button onClick={() => scrollToSection('section-4')} className="toc-link">4. Contact Information</button>
                            </nav>
                        </div>
                    </aside>

                    {/* Right Column - Article Content */}
                    <article className="terms-content">
                        <section id="section-1" className="terms-section">
                            <span className="section-prefix">SECTION 01</span>
                            <h2 className="section-heading">Introduction</h2>
                            <p>Welcome to {siteConfig.brand.name}. By accessing our website and purchasing our products, you agree to be bound by these terms of service. These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
                            <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                        </section>

                        <div className="section-divider"></div>

                        <section id="section-2" className="terms-section">
                            <span className="section-prefix">SECTION 02</span>
                            <h2 className="section-heading">Products and Pricing</h2>
                            <p>We make every effort to display the colors and images of our products accurately at our greenhouse and on our digital platform. However, we cannot guarantee that your computer monitor's display of any color will be perfectly accurate to the harvest.</p>
                            <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
                            <p>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
                        </section>

                        <div className="section-divider"></div>

                        <section id="section-3" className="terms-section">
                            <span className="section-prefix">SECTION 03</span>
                            <h2 className="section-heading">Shipping and Delivery</h2>
                            <p>We deliver our fresh produce to locations within Sri Lanka. Delivery times may vary based on your specific location, seasonal harvest volume, and local logistics conditions.</p>
                            <p>Order processing usually takes 24 hours to ensure that you receive the freshest possible harvest. Once dispatched, you will receive a confirmation. We are not responsible for delays outside of our control, including extreme weather or traffic conditions.</p>
                        </section>

                        <div className="section-divider"></div>

                        <section id="section-4" className="terms-section">
                            <span className="section-prefix">SECTION 04</span>
                            <h2 className="section-heading">Contact Information</h2>
                            <p>Questions about the Terms of Service should be sent to us at our official support channel. We aim to respond to all legal and service inquiries within 2-3 business days.</p>
                            <p>Contact Email: <a href={`mailto:${siteConfig.contact.email}`} className="email-link">{siteConfig.contact.email}</a></p>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default TermsOfService;
