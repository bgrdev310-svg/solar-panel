import React from 'react';

// Reusing Checkmark from SmartMonitoring for consistency
const Checkmark = () => (
    <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

// 3D Isometric House with Glowing Solar Roof
const IsometricHouseMockup = () => (
    <div className="animate-float house-mockup" style={{
        position: 'relative',
        width: '400px',
        height: '400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        {/* Soft Background Bloom to simulate dramatic studio lighting */}
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            zIndex: 0
        }} />

        {/* 3D Isometric House SVG */}
        <svg style={{ position: 'relative', zIndex: 1, overflow: 'visible' }} width="360" height="360" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glow Defs for solar lines */}
            <defs>
                <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="wallRight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2A2D32" />
                    <stop offset="100%" stopColor="#151618" />
                </linearGradient>
                <linearGradient id="wallLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3C4046" />
                    <stop offset="100%" stopColor="#202226" />
                </linearGradient>
            </defs>

            {/* Base Shadow */}
            <path d="M200 350L320 280V290L200 360L80 290V280L200 350Z" fill="rgba(0,0,0,0.6)" filter="blur(10px)" />

            {/* Right Wall */}
            <path d="M200 320L300 262V180L200 238V320Z" fill="url(#wallRight)" />
            {/* Left Wall */}
            <path d="M200 320L100 262V180L200 238V320Z" fill="url(#wallLeft)" />

            {/* Glowing Windows - Right Side */}
            <path d="M220 270L250 252V220L220 238V270Z" fill="#ffebd6" opacity="0.8" filter="drop-shadow(0 0 8px rgba(255, 235, 214, 0.4))" />
            <path d="M260 246L280 234V208L260 220V246Z" fill="#ffebd6" opacity="0.6" filter="drop-shadow(0 0 6px rgba(255, 235, 214, 0.3))" />

            {/* Glowing Door - Left Side */}
            <path d="M160 275L180 286V245L160 233V275Z" fill="#ffebd6" opacity="0.8" filter="drop-shadow(0 0 8px rgba(255, 235, 214, 0.4))" />
            <path d="M120 252L140 263V230L120 218V252Z" fill="#151618" /> {/* Dark window */}

            {/* Under Roof Trim */}
            <path d="M200 238L300 180V176L200 234L100 176V180L200 238Z" fill="#0f1011" />

            {/* Roof Base Left */}
            <path d="M200 234L90 170L190 110L300 174L200 234Z" fill="#0D0E10" />

            {/* Solar Panel Array Background */}
            <path d="M198 226L102 170L186 118L282 174L198 226Z" fill="#050608" />

            {/* Solar Panel Glowing Grid Lines */}
            <g filter="url(#cyanGlow)" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
                {/* Horizontal-ish Grid lines */}
                <line x1="180" y1="215" x2="265" y2="165" />
                <line x1="162" y1="205" x2="247" y2="155" />
                <line x1="144" y1="194" x2="229" y2="144" />
                <line x1="126" y1="184" x2="211" y2="134" />

                {/* Vertical-ish Grid lines */}
                <line x1="110" y1="174" x2="185" y2="128" />
                <line x1="130" y1="186" x2="205" y2="140" />
                <line x1="150" y1="198" x2="225" y2="152" />
                <line x1="170" y1="210" x2="245" y2="164" />
                <line x1="190" y1="222" x2="265" y2="176" />

                {/* Main Collector Busbars (thicker cyan lines) */}
                <line x1="130" y1="186" x2="205" y2="140" strokeWidth="3" opacity="1" />
                <line x1="170" y1="210" x2="245" y2="164" strokeWidth="3" opacity="1" />
            </g>

            {/* Top Roof Ridge Cap */}
            <path d="M190 110L310 180L300 184L180 114L190 110Z" fill="#1f2022" />
        </svg>
    </div>
);

const RoofEngineering = () => {
    return (
        <section className="roof-section" style={{
            marginTop: '100px',
            marginBottom: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            padding: '0 40px'
        }}>
            {/* Right side for zigzag layout: Content (placed first in DOM for zig zag) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
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
                    THE INSTALLATION
                </div>

                <h2 className="michroma-title" style={{ fontSize: '42px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2 }}>
                    PRECISION ROOF<br />ENGINEERING
                </h2>

                <p style={{ color: 'var(--element-light)', fontSize: '20px', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    We don't just install; we optimize.
                </p>
                <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                    Every Texas home has a unique sun-path profile that requires expert analysis. We engineer your system to maximize output based on your specific roof architecture.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <Checkmark />
                        <div>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600, display: 'block', marginBottom: '4px' }}>AI-Powered Roof Mapping</span>
                            <span style={{ fontSize: '14px', color: 'var(--element-dim)' }}>We use satellite data to find the highest-efficiency angles for your specific roof.</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <Checkmark />
                        <div>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Storm-Proof Mounting</span>
                            <span style={{ fontSize: '14px', color: 'var(--element-dim)' }}>Specialized racking systems designed to withstand 130+ MPH Texas winds.</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <Checkmark />
                        <div>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Max-Yield Placement</span>
                            <span style={{ fontSize: '14px', color: 'var(--element-dim)' }}>Strategic panel positioning to ensure your system produces power from sunrise to sunset.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left side: 3D House Mockup */}
            <div style={{ flex: 1 }}>
                <IsometricHouseMockup />
            </div>
        </section>
    );
};

export default RoofEngineering;
