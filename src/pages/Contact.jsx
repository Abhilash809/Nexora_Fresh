import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We'll get back to you soon.");
    };

    return (
        <div className="contact-page">
            {/* Section 1: Hero Banner */}
            <header className="contact-hero">
                <div className="contact-hero-texture"></div>
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content animate-fade-in">
                    <span className="section-eyebrow-hero">Contact Us</span>
                    <h1 className="contact-hero-title">Get in Touch</h1>
                    <p className="contact-hero-subtitle">
                        Have questions about our produce or export opportunities? We'd love to hear from you.
                    </p>
                </div>
            </header>

            {/* Section 2: Contact Info + Form */}
            <section className="contact-main-section">
                <div className="contact-container">
                    <div className="contact-grid-redesign">
                        {/* Left Column: Info Card */}
                        <div className="contact-info-card animate-slide-right">
                            <h2 className="info-card-title">Contact Information</h2>
                            <div className="gold-accent-rule-contact"></div>
                            
                            <div className="contact-info-blocks">
                                <div className="info-block">
                                    <div className="info-icon-wrapper">
                                        <MapPin size={20} className="gold-icon" />
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Visit Us</span>
                                        <p className="info-detail">{siteConfig.contact.address}</p>
                                    </div>
                                </div>

                                <div className="info-block">
                                    <div className="info-icon-wrapper">
                                        <Mail size={20} className="gold-icon" />
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Email Us</span>
                                        <p className="info-detail">{siteConfig.contact.email}</p>
                                        <p className="info-detail">{siteConfig.contact.emailExport}</p>
                                    </div>
                                </div>

                                <div className="info-block">
                                    <div className="info-icon-wrapper">
                                        <Phone size={20} className="gold-icon" />
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Call Us</span>
                                        <p className="info-detail">{siteConfig.contact.phone}</p>
                                        <p className="info-detail">{siteConfig.contact.phoneSecondary}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card-footer">
                                <div className="footer-divider-thin"></div>
                                <div className="contact-social-row">
                                    <a href="#" className="contact-social-link"><Facebook size={20} /></a>
                                    <a href="#" className="contact-social-link"><Instagram size={20} /></a>
                                    <a href="#" className="contact-social-link"><Twitter size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="contact-form-card animate-slide-left">
                            <h2 className="form-card-title">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form-redesign">
                                <div className="form-row">
                                    <div className="form-group-new">
                                        <label>Name</label>
                                        <input type="text" required placeholder="Your full name" />
                                    </div>
                                    <div className="form-group-new">
                                        <label>Email</label>
                                        <input type="email" required placeholder="your@email.com" />
                                    </div>
                                </div>

                                <div className="form-group-new">
                                    <label>Subject</label>
                                    <div className="select-wrapper">
                                        <select required defaultValue="">
                                            <option value="" disabled>Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="wholesale">Wholesale / Bulk Order</option>
                                            <option value="export">Export Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group-new">
                                    <label>Message</label>
                                    <textarea required placeholder="How can we help you?" />
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Export Enquiry CTA */}
            <section className="export-cta-section">
                <div className="export-cta-container">
                    <span className="section-eyebrow-center">Global Markets</span>
                    <h2 className="export-heading">Looking to import Nexora Fresh produce?</h2>
                    <p className="export-body">
                        We export to 40+ markets worldwide. Reach out to our export team directly for pricing, 
                        certifications, and logistics.
                    </p>
                    <div className="export-actions">
                        <button className="btn-primary-sharp">Export Enquiries <ArrowRight size={18} /></button>
                        <button className="btn-ghost-sharp">Download Catalogue</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
