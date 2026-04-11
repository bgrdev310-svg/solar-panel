import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            position: 'relative',
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)', // Break out of container to be full width
            marginTop: '80px',
            background: '#0a0b0d', // Very dark background
            borderTop: '1px solid rgba(0, 212, 255, 0.15)', // Subtle cyan top border
            color: 'var(--element-dim)',
            padding: '60px 40px 40px 40px',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Subtle glow on the top border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
            }} />

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '40px'
            }}>
                {/* Brand & Tagline */}
                <div style={{ flex: '1 1 300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #00D4FF 0%, #007a8c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="19.36" x2="19.78" y2="20.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        </div>
                        <span className="michroma-title" style={{ fontSize: '20px', letterSpacing: '1px', color: '#fff' }}>SOLAR PANEL</span>
                    </div>
                    <p style={{ lineHeight: 1.6, maxWidth: '300px', margin: 0 }}>
                        Professional solar installation and sustainable energy solutions tailored for Texas homes.
                    </p>
                </div>

                {/* Quick Links */}
                <div style={{ flex: '1 1 150px' }}>
                    <h4 style={{ color: 'var(--element-light)', fontSize: '16px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Navigation</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/services" className="footer-link">Our Services</Link></li>
                        <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div style={{ flex: '1 1 150px' }}>
                    <h4 style={{ color: 'var(--element-light)', fontSize: '16px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Services</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#" className="footer-link">Roof Engineering</a></li>
                        <li><a href="#" className="footer-link">Panel Installation</a></li>
                        <li><a href="#" className="footer-link">Battery Storage</a></li>
                        <li><a href="#" className="footer-link">Smart Monitoring</a></li>
                        <li><a href="#" className="footer-link">Maintenance</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div style={{ flex: '1 1 200px' }}>
                    <h4 style={{ color: 'var(--element-light)', fontSize: '16px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Connect</h4>
                    <p style={{ marginBottom: '8px' }}>Dallas, Austin, Houston</p>
                    <p style={{ marginBottom: '20px' }}>contact@solarpanel.tx</p>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '60px auto 0 auto',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                fontSize: '14px'
            }}>
                <p>&copy; {new Date().getFullYear()} Solar Panel TX. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                </div>
            </div>

            <style>{`
                .footer-link {
                    color: var(--element-dim);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                    padding-bottom: 2px;
                }
                .footer-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #00D4FF;
                    box-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                .footer-link:hover {
                    color: #fff;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                }
                .footer-link:hover::after {
                    transform: scaleX(1);
                }
                .social-icon {
                    color: var(--element-dim);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.02);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: 1px solid rgba(255,255,255,0.05);
                    position: relative;
                    overflow: hidden;
                }
                .social-icon::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(0, 212, 255, 0.4) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .social-icon svg {
                    position: relative;
                    z-index: 1;
                    transition: transform 0.3s ease;
                }
                .social-icon:hover {
                    color: #fff;
                    border-color: rgba(0, 212, 255, 0.4);
                    box-shadow: 0 10px 20px -5px rgba(0, 212, 255, 0.3), inset 0 0 15px rgba(0, 212, 255, 0.1);
                    transform: translateY(-4px);
                }
                .social-icon:hover::before {
                    opacity: 1;
                }
                .social-icon:hover svg {
                    transform: scale(1.1);
                }
            `}</style>
        </footer>
    );
};

export default React.memo(Footer);
