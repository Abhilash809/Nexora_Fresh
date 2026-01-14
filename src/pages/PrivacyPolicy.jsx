import React, { useEffect } from 'react';
import { siteConfig } from '../config';
import './Legal.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Information We Collect</h2>
                    <p>When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number.</p>
                </section>

                <section>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
                </section>

                <section>
                    <h2>3. Data Retention</h2>
                    <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
                </section>

                <section>
                    <h2>4. Contact Us</h2>
                    <p>For more information about our privacy practices, please contact us by e-mail at {siteConfig.contact.email} or by mail using the details provided below:</p>
                    <p>{siteConfig.contact.address}</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
