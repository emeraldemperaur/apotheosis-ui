import React, { useState, useEffect, type MouseEvent } from 'react';
import FallingSquares from '../components/FallingSquares';
import GnosisOrb from '../components/GnosisOrb';
import '../styles/raisonDetre.scss';

interface RaisonDetreProps {
    darkMode?: boolean;
}

const rotatingWords = ['Next-Gen Interfaces', 'Zero-Trust Systems', 'Agentic Workflows', 'Generative Design'];

const RaisonDetre: React.FC<RaisonDetreProps> = ({ darkMode = true }) => {
    const [wordIndex, setWordIndex] = useState(0);
    
    // 3D Tilt Tracking State
    const [tiltStyles, setTiltStyles] = useState<{ [key: string]: string }>({});
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Hero Text Rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prev => (prev + 1) % rotatingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Interactive 3D Mouse Tracking
    const handleMouseMove = (e: MouseEvent<HTMLElement>, id: string) => {
        setHoveredId(id);
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }));
    };

    const handleMouseLeave = (id: string) => {
        setHoveredId(null);
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
    };

    return (
        <main className={`raison-detre-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            {/* Ambient Background with Falling Squares & Grid */}
            <div className="fixed-ambient-bg">
                <div className="grid-overlay"></div>
                <FallingSquares 
                    color={darkMode ? 'rgba(128, 0, 32, 0.3)' : 'rgba(9, 9, 11, 0.1)'} 
                    maxSquares={350} 
                />
                <div className="noise-overlay"></div>
            </div>

            <div className="rd-content-layer">
                
                {/* Left-Aligned Hero Section */}
                <section className="rd-hero-section">
                    <h1 className="dynamic-heading">
                        Architecting <br/>
                        <span 
                            className={`rotating-text-wrapper ${hoveredId === 'hero-text' ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, 'hero-text')}
                            onMouseLeave={() => handleMouseLeave('hero-text')}
                            style={{ transform: tiltStyles['hero-text'] || undefined }}
                        >
                            <span key={wordIndex} className="rotating-text animate-slide-up">
                                {rotatingWords[wordIndex]}
                            </span>
                        </span>
                    </h1>
                    <p className="rd-lead-text">
                        At the intersection of deterministic engineering and generative AI.
                    </p>
                </section>

                {/* Full-Width Glassmorphic Philosophy Ribbon */}
                <section 
                    className={`rd-philosophy-ribbon ${hoveredId === 'philosophy-ribbon' ? 'is-interacting' : ''}`}
                    onMouseMove={(e) => handleMouseMove(e, 'philosophy-ribbon')}
                    onMouseLeave={() => handleMouseLeave('philosophy-ribbon')}
                    style={{ transform: tiltStyles['philosophy-ribbon'] || undefined }}
                >
                    <div className="ribbon-inner">
                        <div className="philosophy-content">
                            <h2 className="rd-subheading">Engineering the Modern Interface</h2>
                            <p>
                                Vanguard software engineering requires a delicate balance: front-end elegance backed by strict, zero-trust backend logic. Apotheosis is built on the philosophy of developer empowerment—equipping creators with tools that elevate the digital medium without compromising on security or scalability.
                            </p>
                            <p>
                                By merging deterministic UI architecture with non-deterministic AI models, it proffers a standard for frontend components and backend infrastructure that is structurally reliable, highly extensible, and intuitively designed for the agentic web.
                            </p>
                        </div>
                        
                        <div className="philosophy-graphic">
                            <div className="pedestal-glass">
                                <GnosisOrb width="280px" height="280px" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect & Collaborate Social Grid */}
                <section className="rd-developer-section">
                    <div className="section-header">
                        <h2>Connect & Collaborate</h2>
                    </div>
                    
                    <div className="rd-social-grid">
                        {[
                            { id: 'github', name: 'GitHub', handle: '@emeraldemperaur', icon: 'bxl-github', link: 'https://github.com/emeraldemperaur' },
                            { id: 'linkedin', name: 'LinkedIn', handle: 'Meka Egwim', icon: 'bxl-linkedin', link: 'https://www.linkedin.com/in/emekaegwimdeveloper/' },
                            { id: 'instagram', name: 'Instagram', handle: '@chromito.me', icon: 'bxl-instagram', link: 'https://instagram.com/chromito.me' },
                            { id: 'email', name: 'Email', handle: 'me@mekaegwim.ca', icon: 'bx-envelope', link: 'mailto:me@mekaegwim.ca' }
                        ].map((social) => (
                            <a 
                                key={social.id}
                                href={social.link} 
                                target={social.id === 'email' ? undefined : "_blank"} 
                                rel="noopener noreferrer" 
                                className={`glass-social-card ${hoveredId === social.id ? 'is-interacting' : ''}`}
                                onMouseMove={(e) => handleMouseMove(e, social.id)}
                                onMouseLeave={() => handleMouseLeave(social.id)}
                                style={{ transform: tiltStyles[social.id] || undefined }}
                            >
                                <div className="icon-wrapper"><i className={`bx ${social.icon}`}></i></div>
                                <div className="social-info">
                                    <span className="platform">{social.name}</span>
                                    <span className="handle">{social.handle}</span>
                                </div>
                                <div className="glass-border"></div>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
};

export default RaisonDetre;