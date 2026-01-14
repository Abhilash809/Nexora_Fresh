import React, { useEffect } from 'react';
import { siteConfig } from '../config';
import './Legal.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to {siteConfig.brand.name}. By accessing our website and purchasing our products, you agree to be bound by these terms of service.</p>
                </section>

                <section>
                    <h2>2. Products and Pricing</h2>
                    <p>We make every effort to display the colors and images of our products accurately. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
                    <p>Prices for our products are subject to change without notice.</p>
                </section>

                <section>
                    <h2>3. Shipping and Delivery</h2>
                    <p>We deliver to locations within Sri Lanka. Delivery times may vary based on location and order volume.</p>
                </section>

                <section>
                    <h2>4. Contact Information</h2>
                    <p>Questions about the Terms of Service should be sent to us at {siteConfig.contact.email}.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
