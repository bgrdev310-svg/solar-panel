import React from 'react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "How long does solar installation usually take?",
        answer: "A standard residential installation typically takes 1 to 3 days once all permits are approved. However, the entire process from consultation to turning the system on can take a few weeks due to local permitting and utility interconnection times."
    },
    {
        question: "Do solar panels work during a power outage?",
        answer: "Standard grid-tied solar systems automatically shut off during an outage for the safety of utility workers. To keep power running during a blackout, you'll need a solar battery storage system like the Tesla Powerwall integrated with your setup."
    },
    {
        question: "How much maintenance do solar panels require?",
        answer: "Very little. Solar panels are highly durable glass enclosures with no moving parts. Occasional cleaning to remove dust or debris and an annual checkup is usually all that is needed to ensure optimal performance over their 25+ year lifespan."
    },
    {
        question: "What happens on cloudy days or at night?",
        answer: "Your panels will still produce energy on cloudy days, though at a reduced rate. At night, they do not produce energy. During these times, you will seamlessly pull power from your battery storage or the traditional electrical grid."
    },
    {
        question: "Are there tax incentives for installing solar?",
        answer: "Yes! Currently, the Federal Solar Investment Tax Credit (ITC) allows you to deduct 30% of the cost of installing a solar energy system from your federal taxes. There may also be additional state and local incentives available in your area."
    },
    {
        question: "Will solar panels damage my roof?",
        answer: "No, when installed properly by professionals, solar panels actually protect the portion of the roof they cover from weather and UV damage. Our engineering team conducts a thorough roof assessment prior to installation to ensure structural integrity."
    },
    {
        question: "How do I monitor my system's performance?",
        answer: "Every installation comes with full access to our Smart Monitoring app. You can track real-time energy production, home consumption, and battery storage levels directly from your smartphone, 24/7."
    },
    {
        question: "Is financing available?",
        answer: "Absolutely. We offer competitive $0-down financing options, solar leases, and Power Purchase Agreements (PPAs) designed so that your monthly solar payment is often lower than your current utility bill."
    }
];

const FAQPage = () => {
    return (
        <section className="faq-section" style={{
            padding: '20px 40px 60px 40px', // Adjusted top padding to reduce space
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'transparent' // Inherit global background
        }}>
            <div className="faq-header" style={{ maxWidth: '1000px', width: '100%', textAlign: 'center', marginBottom: '60px' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '8px 24px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: '20px',
                    color: '#00D4FF',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '20px'
                }}>
                    KNOWLEDGE BASE
                </div>
                <h1 className="michroma-title" style={{ fontSize: '48px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2, textShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}>
                    FREQUENTLY ASKED<br />QUESTIONS
                </h1>
                <p style={{ color: 'var(--element-dim)', fontSize: '18px', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0 auto', lineHeight: 1.6 }}>
                    Everything you need to know about transitioning to clean, independent solar energy.
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                width: '100%',
                maxWidth: '1000px', // Restrict width for better text line lengths
                margin: '0 auto'
            }}>
                {faqs.map((faq, index) => (
                    <div key={index} className="premium-glass-card hover-lift faq-card" style={{
                        padding: '32px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        textAlign: 'left',
                        boxShadow: '0 10px 40px -10px rgba(0, 212, 255, 0.1), inset 0 0 20px rgba(0, 212, 255, 0.03)',
                        border: '1px solid rgba(0, 212, 255, 0.15)',
                        background: 'linear-gradient(135deg, rgba(20, 25, 30, 0.6) 0%, rgba(10, 12, 15, 0.4) 100%)'
                    }}>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '20px',
                            fontWeight: 600,
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                            <span style={{
                                color: '#00D4FF',
                                fontFamily: "'Michroma', sans-serif",
                                fontSize: '24px',
                                textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
                            }}>Q.</span>
                            {faq.question}
                        </h3>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.85)',
                            fontSize: '16px',
                            lineHeight: 1.7,
                            margin: 0,
                            fontWeight: 400,
                            paddingLeft: '40px' // Align with text
                        }}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>

            <div className="faq-footer" style={{ marginTop: '80px', textAlign: 'center' }}>
                <p style={{ color: 'var(--element-light)', fontSize: '18px', marginBottom: '24px' }}>
                    Still have questions? We're here to help.
                </p>
                <div className="faq-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button className="cta-button" style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            boxShadow: 'none'
                        }}>
                            BACK TO HOME
                        </button>
                    </Link>
                    <button className="cta-button">
                        CONTACT EXPERT
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQPage;
