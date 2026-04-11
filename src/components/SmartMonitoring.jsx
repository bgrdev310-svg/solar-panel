import React from 'react';

const Checkmark = () => (
    <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

const PhoneMockup = () => (
    <div className="animate-float" style={{
        position: 'relative',
        width: '320px',
        height: '700px', // Increased height again to ensure NO clipping at the bottom
        margin: '0 auto',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
    }}>
        {/* Glow behind phone */}
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            zIndex: 0
        }} />

        {/* Phone Case */}
        <div className="glass-panel" style={{
            position: 'absolute',
            inset: '0',
            borderRadius: '40px',
            border: '2px solid rgba(255,255,255,0.1)',
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
            background: '#0d0e10',
            zIndex: 1,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: '28px 20px 32px 20px' // Increased bottom padding to clear the 40px border radius
        }}>
            {/* Dynamic Island Notch */}
            <div style={{
                position: 'absolute',
                top: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '30px',
                background: '#000',
                borderRadius: '20px',
                zIndex: 10
            }} />

            {/* App UI Mockup inside phone */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* High-quality profile avatar with subtle glow */}
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #00F2FF 0%, #007a8c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(0, 242, 255, 0.3)' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '11px', color: 'var(--element-dim)', fontWeight: 500, letterSpacing: '0.5px' }}>Welcome,</span>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>Homeowner</span>
                        </div>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--element-dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>

                {/* Glowing Storage Ring (84%) with Rounded Caps via SVG */}
                <div style={{
                    position: 'relative',
                    width: '180px', height: '180px', margin: '12px auto',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <svg width="180" height="180" viewBox="0 0 180 180" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)', overflow: 'visible' }}>
                        {/* Background Track */}
                        <circle cx="90" cy="90" r="82" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                        {/* Progress Glow/Shadow */}
                        <circle cx="90" cy="90" r="82" fill="none" stroke="#00F2FF" strokeWidth="10" strokeLinecap="round" strokeDasharray="515.22" strokeDashoffset="82.43" filter="blur(6px)" opacity="0.6" />
                        {/* Progress Ring */}
                        <circle cx="90" cy="90" r="82" fill="none" stroke="#00F2FF" strokeWidth="10" strokeLinecap="round" strokeDasharray="515.22" strokeDashoffset="82.43" />
                    </svg>

                    {/* Inner Content */}
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        zIndex: 1
                    }}>
                        <span style={{ fontSize: '11px', color: 'var(--element-dim)', fontWeight: 600, letterSpacing: '1px' }}>BATTERY STATUS</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', margin: '4px 0' }}>
                            <span className="michroma-title" style={{ fontSize: '42px', letterSpacing: '-1px', textShadow: '0 0 20px rgba(0, 242, 255, 0.5)', color: '#fff' }}>84</span>
                            <span style={{ fontSize: '24px', color: '#fff', marginLeft: '4px', fontFamily: "'Inter', sans-serif", fontWeight: 700, textShadow: '0 0 20px rgba(0, 242, 255, 0.5)' }}>%</span>
                        </div>
                        <span style={{ fontSize: '11px', color: '#00F2FF', fontWeight: 600, letterSpacing: '1px' }}>DISCHARGING</span>
                    </div>
                </div>

                {/* Ultra-Dark Data Card */}
                <div className="glass-panel" style={{
                    flex: 1,
                    borderRadius: '24px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    /* Ultra-dark minimalism: Deep charcoal/pitch black */
                    background: 'linear-gradient(135deg, rgba(11,11,11,0.95) 0%, rgba(0,0,0,0.98) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.02), 0 20px 40px rgba(0,0,0,0.6)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Top status bar inside panel */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#fff', fontSize: '15px', fontWeight: 600, letterSpacing: '0.5px' }}>Live Generation</span>
                        <div style={{ padding: '6px 12px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                            {/* Gold accent */}
                            <span style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 700 }}>6.2 kW</span>
                        </div>
                    </div>

                    {/* Modern 3D/Flat Isometric Solar Panel (Nano Banana Style) */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        padding: '10px 0'
                    }}>
                        {/* Core Aura Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120px',
                            height: '60px',
                            background: '#00F2FF',
                            filter: 'blur(35px)',
                            opacity: 0.25,
                            zIndex: 0
                        }} />

                        <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1, filter: 'drop-shadow(0 15px 30px rgba(0,242,255,0.2))' }}>
                            <defs>
                                <linearGradient id="panelBase" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#0a0c10" />
                                    <stop offset="100%" stopColor="#050608" />
                                </linearGradient>
                                <linearGradient id="cellGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#141a24" />
                                    <stop offset="50%" stopColor="#0B131E" />
                                    <stop offset="100%" stopColor="#080c14" />
                                </linearGradient>
                                <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#FFD700" />
                                    <stop offset="100%" stopColor="#FF8C00" />
                                </linearGradient>
                            </defs>

                            {/* Faux 3D Base/Stand */}
                            <path d="M90 95 L130 95 L140 105 L80 105 Z" fill="#050608" stroke="rgba(0, 242, 255, 0.2)" strokeWidth="1" />
                            <ellipse cx="110" cy="105" rx="40" ry="4" fill="rgba(0, 242, 255, 0.4)" filter="blur(4px)" />

                            {/* Main Panel Frame (Isometric Tilt) */}
                            <path d="M40 85 L180 85 L140 25 L80 25 Z" fill="url(#panelBase)" stroke="rgba(0, 242, 255, 0.5)" strokeWidth="2" strokeLinejoin="round" />

                            {/* Inner Solar Cells */}
                            <path d="M45 80 L175 80 L138 30 L82 30 Z" fill="url(#cellGrad)" />

                            {/* Cell Grid Lines */}
                            <g stroke="#00F2FF" strokeWidth="1.5" opacity="0.7">
                                {/* Horizontal */}
                                <line x1="63" y1="55" x2="157" y2="55" />
                                {/* Vertical / Angled */}
                                <line x1="110" y1="30" x2="110" y2="80" strokeWidth="2" opacity="0.9" /> {/* Center */}
                                <line x1="96" y1="30" x2="77" y2="80" />
                                <line x1="124" y1="30" x2="143" y2="80" />
                            </g>

                            {/* Tech Nodes/Highlights */}
                            <circle cx="110" cy="55" r="3" fill="#FFF" filter="drop-shadow(0 0 6px #00F2FF)" />
                            <circle cx="77" cy="80" r="1.5" fill="#00F2FF" />
                            <circle cx="143" cy="80" r="1.5" fill="#00F2FF" />
                            <circle cx="96" cy="30" r="1.5" fill="#00F2FF" />
                            <circle cx="124" cy="30" r="1.5" fill="#00F2FF" />

                            {/* Minimalist Digital Sun */}
                            <g transform="translate(170, 30)">
                                <circle cx="0" cy="0" r="14" fill="url(#sunGlow)" filter="drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))" />
                                {/* Rays */}
                                <line x1="0" y1="-18" x2="0" y2="-22" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="0" y1="18" x2="0" y2="22" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="-18" y1="0" x2="-22" y2="0" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="18" y1="0" x2="22" y2="0" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="-13" y1="-13" x2="-16" y2="-16" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="13" y1="13" x2="16" y2="16" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="-13" y1="13" x2="-16" y2="16" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                                <line x1="13" y1="-13" x2="16" y2="-16" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                            </g>
                        </svg>
                    </div>

                    {/* Bottom stats row (with extra padding) */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', paddingBottom: '4px', paddingLeft: '8px', paddingRight: '8px' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '11px', color: 'var(--element-dim)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.5px' }}>Grid Import</span>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600 }}>0.0 kW</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', fontSize: '11px', color: 'var(--element-dim)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.5px' }}>Home Usage</span>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600 }}>3.4 kW</span>
                        </div>
                    </div>
                </div>

                {/* Minimalist Bottom Navigation Bar - Removed as requested */}
            </div>
        </div>
    </div>
);

const SmartMonitoring = () => {
    return (
        <section className="smart-monitoring-section" style={{
            marginTop: '100px',
            marginBottom: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '120px', // Increased space between mockup and text
            padding: '0 40px'
        }}>
            {/* Left side: iPhone Mockup */}
            <div className="smart-monitoring-mockup-wrapper" style={{ flex: 1 }}>
                <PhoneMockup />
            </div>

            {/* Right side: Content */}
            <div className="smart-monitoring-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="smart-monitoring-badge" style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: '20px',
                    color: '#00D4FF',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    alignSelf: 'flex-start'
                }}>
                    THE APP
                </div>

                <h2 className="michroma-title" style={{ fontSize: '42px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2 }}>
                    SMART<br />MONITORING
                </h2>

                <p style={{ color: 'var(--element-light)', fontSize: '20px', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    Your Power, in Your Pocket.
                </p>
                <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                    Track your generation, storage, and savings in real-time from anywhere in the world. Always know exactly how your system is performing.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Checkmark />
                        <span style={{ fontSize: '16px', color: 'var(--element-light)' }}>Real-time solar production tracking</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Checkmark />
                        <span style={{ fontSize: '16px', color: 'var(--element-light)' }}>Live battery storage levels</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Checkmark />
                        <span style={{ fontSize: '16px', color: 'var(--element-light)' }}>Automated savings & ROI reports</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartMonitoring;
