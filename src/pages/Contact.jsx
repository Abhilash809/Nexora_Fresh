import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/common/Button';
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
            <header className="page-header contact-header">
                <div className="header-content animate-fade-in">
                    <h1 className="page-title">Get in Touch</h1>
                    <p className="page-subtitle">Have questions about our produce or export opportunities? We'd love to hear from you.</p>
                </div>
            </header>

            <section className="section-container">
                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Visit Us</h3>
                                <p>{siteConfig.contact.address}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email Us</h3>
                                <p>{siteConfig.contact.email}<br />{siteConfig.contact.emailExport}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Call Us</h3>
                                <p>{siteConfig.contact.phone}<br />{siteConfig.contact.phoneSecondary}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" required placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required placeholder="your@email.com" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select>
                                    <option>General Inquiry</option>
                                    <option>Wholesale / Bulk Order</option>
                                    <option>Export Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea required rows="5" placeholder="How can we help you?"></textarea>
                            </div>
                            <Button type="submit" variant="primary" className="btn-block">
                                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
