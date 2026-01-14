import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../../config';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        {siteConfig.brand.name.toUpperCase()} <span className="logo-fresh">{siteConfig.brand.highlight.toUpperCase()}</span>
                    </Link>
                    <p className="footer-desc">
                        {siteConfig.brand.description}
                    </p>
                    <div className="social-links">
                        <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href={siteConfig.social.instagram} aria-label="Instagram"><Instagram size={20} /></a>
                        <a href={siteConfig.social.twitter} aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Links Column */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/products">Fresh Produce</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/sustainability">Sustainability</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>
                            <MapPin size={18} />
                            <span>{siteConfig.contact.address}</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>{siteConfig.contact.email}</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>
                                {siteConfig.contact.phone}
                                {siteConfig.contact.phoneSecondary && <><br />{siteConfig.contact.phoneSecondary}</>}
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Legal/Export Column */}
                <div className="footer-col">
                    <h3>Export & Legal</h3>
                    <ul className="footer-links">
                        <li><Link to="/contact">Export Inquiries</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name} {siteConfig.brand.highlight}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
