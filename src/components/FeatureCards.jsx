import React from 'react';

// Common Card Container Style
const cardWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer'
};

// High-End SVG Icons with Gradients
const PremiumMapPinIcon = () => (
    <div style={{ position: 'relative', width: '56px', height: '56px' }}>
        {/* Soft Background Bloom */}
        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '40px', height: '40px', background: 'rgba(0, 212, 255, 0.1)',
            filter: 'blur(15px)', borderRadius: '50%', zIndex: 0
        }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8E9196" />
                    <stop offset="100%" stopColor="#4A4D52" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <blur stdDeviation="2" />
                </filter>
            </defs>
            <circle cx="28" cy="28" r="26" fill="url(#pin-grad)" fillOpacity="0.1" stroke="rgba(255,255,255,0.1)" />
            <path d="M28 16C22.4772 16 18 20.4772 18 26C18 33.5 28 42 28 42C28 42 38 33.5 38 26C38 20.4772 33.5228 16 28 16ZM28 31C25.2386 31 23 28.7614 23 26C23 23.2386 25.2386 21 28 21C30.7614 21 33 23.2386 33 26C33 28.7614 30.7614 31 28 31Z" fill="#DADBDE" />
        </svg>
    </div>
);

const PremiumContactIcon = () => (
    <div style={{ position: 'relative', display: 'flex', gap: '8px' }}>
        <div style={{
            width: '42px', height: '42px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
        }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        </div>
        <div style={{
            width: '42px', height: '42px', borderRadius: '12px',
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(220, 39, 67, 0.3)'
        }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        </div>
    </div>
);

const PremiumShieldIcon = () => (
    <div style={{ position: 'relative', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Intense Bloom Effect */}
        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '35px', height: '35px', background: 'rgba(0, 212, 255, 0.2)',
            filter: 'blur(20px)', borderRadius: '50%', zIndex: 0
        }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#0094CC" />
                </linearGradient>
            </defs>
            <circle cx="28" cy="28" r="26" fill="url(#shield-grad)" fillOpacity="0.05" stroke="rgba(0, 212, 255, 0.2)" />
            <path d="M28 14L18 18V28C18 34.14 22.27 39.88 28 42C33.73 39.88 38 34.14 38 28V18L28 14Z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{
            position: 'absolute',
            fontSize: '12px',
            fontWeight: 800,
            color: '#00D4FF',
            top: '52%',
            transform: 'translateY(-50%)',
            textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
        }}>25</span>
    </div>
);

const FeatureCard = ({ children, title, subtitle }) => (
    <div className="premium-card-wrapper">
        <div className="premium-glass-card" style={{
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            minHeight: '120px'
        }}>
            <div style={{ flexShrink: 0 }}>
                {children}
            </div>
            <div className="flex-col" style={{ gap: '4px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: 0, letterSpacing: '0.5px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--element-dim)', margin: 0, lineHeight: 1.5 }}>
                    {subtitle}
                </p>
            </div>
            {/* Decorative corner indicator - glowing light */}
            <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#00D4FF',
                boxShadow: '0 0 8px #00D4FF',
                opacity: 0.6
            }} />
        </div>
    </div>
);

const FeatureCards = () => {
    return (
        <div
            className="feature-cards-grid"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--gap-lg)',
                marginTop: '12px'
            }}
        >
            <FeatureCard title="Texas Proud:" subtitle={<>Dallas, Austin,<br />Houston</>}>
                <PremiumMapPinIcon />
            </FeatureCard>
            <FeatureCard title="Contact" subtitle="24/7 Availability">
                <PremiumContactIcon />
            </FeatureCard>
            <FeatureCard title="Warranty:" subtitle="25-Year Guarantee">
                <PremiumShieldIcon />
            </FeatureCard>
        </div>
    );
};

export default FeatureCards;
