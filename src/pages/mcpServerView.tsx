import React, { useState, useEffect, type MouseEvent } from 'react';
import FallingSquares from '../components/FallingSquares';
import '../styles/mcpServerView.scss';

interface ApotheosisMCPProps {
    darkMode?: boolean;
}

const rotatingWords = ['AI-Context', 'Zero-Trust', 'Agentic', 'Multi-Modal'];

const architecturalFeatures = [
    {
        id: 'transport-modes',
        icon: 'bx-git-compare',
        title: 'Dual Transport Modes',
        description: 'Flexibility is paramount for enterprise deployment. Apotheosis MCP supports both Standard Input/Output (stdio) for secure, local, sidecar-style agent execution, and Server-Sent Events (SSE) over HTTP for distributed, real-time cloud orchestration.'
    },
    {
        id: 'zero-trust',
        icon: 'bx-shield-quarter',
        title: 'Seamless Authentication & Zero-Trust',
        description: 'Expose your most sensitive enterprise data to LLMs without compromising security. Native support for granular Role-Based Access Control (RBAC), ephemeral OAuth2 token injection, and strict boundary validations ensures your data remains air-gapped from external model training.'
    },
    {
        id: 'generative-frontend',
        icon: 'bx-layer',
        title: 'Generative Frontend Components',
        description: 'Bridge the gap between data and display. The MCP server doesn’t just return raw JSON; it can stream structured metadata that instantly hydrates into pre-optimized, glassmorphic React components, scaffolding the UI in real-time alongside the data retrieval.'
    },
    {
        id: 'backend-templates',
        icon: 'bx-data',
        title: 'Backend MCP Templates',
        description: 'Deploy rapidly with pre-configured, modular connectors. Drop in our production-ready templates for PostgreSQL, Pinecone vector databases, and internal REST APIs to instantly map your proprietary knowledge bases to the Model Context Protocol standardized schema.'
    }
];

const ApotheosisMCP: React.FC<ApotheosisMCPProps> = ({ darkMode = true }) => {
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

    // Interactive 3D Mouse Tracking (for features and pricing)
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
            [id]: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }));
    };

    const handleMouseLeave = (id: string) => {
        setHoveredId(null);
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
    };

    return (
        <main className={`mcp-server-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            {/* Ambient Background with Falling Squares & Grid */}
            <div className="fixed-ambient-bg">
                <div className="grid-overlay"></div>
                <FallingSquares 
                    color={darkMode ? 'rgba(128, 0, 32, 0.3)' : 'rgba(9, 9, 11, 0.1)'} 
                    maxSquares={350} 
                />
                <div className="noise-overlay"></div>
            </div>

            <div className="mcp-content-layer">
                
                {/* Right-Aligned Hero Section */}
                <section className="mcp-hero-section">
                    <h1 className="dynamic-heading">
                        The Vanguard of <br/>
                        <span 
                            className={`rotating-text-wrapper ${hoveredId === 'hero-text' ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, 'hero-text')}
                            onMouseLeave={() => handleMouseLeave('hero-text')}
                            style={{ transform: tiltStyles['hero-text'] || undefined }}
                        >
                            <span key={wordIndex} className="rotating-text animate-slide-up">
                                {rotatingWords[wordIndex]}
                            </span>
                        </span><br/>
                        Integration.
                    </h1>
                </section>

                {/* Full Width Glassmorphic Intro Ribbon */}
                <section className="mcp-intro-ribbon">
                    <div className="ribbon-inner">
                        <div className="intro-header">
                            <i className="bx bx-server"></i>
                            <h2>Apotheosis Model Context Protocol</h2>
                        </div>
                        <div className="intro-content">
                            <p className="mcp-server-text">
                                Empower your autonomous AI agents to rapidly and reliably generate secure, zero-trust backend infrastructure alongside predictable, production-ready frontend code. 
                            </p>
                            <p className="mcp-server-text">
                                The Apotheosis UX Model Context Protocol (MCP) Server acts as a standardized, two-way bridge between Large Language Models (LLMs) and your enterprise data. By feeding strict, typed domain context directly into your AI tooling, it eliminates hallucinations and grounds Generative AI responses in reality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Architectural Features Grid */}
                <section className="mcp-features-section">
                    <div className="section-header">
                        <h2>Core Architectural Features</h2>
                        <p>Apotheosis MCP Server infrastructure is engineered to transform isolated AI interactions into multi-step, stateful enterprise workflows.</p>
                    </div>

                    <div className="features-grid">
                        {architecturalFeatures.map((feature) => (
                            <div 
                                key={feature.id} 
                                className={`glass-feature-card ${hoveredId === feature.id ? 'is-interacting' : ''}`}
                                onMouseMove={(e) => handleMouseMove(e, feature.id)}
                                onMouseLeave={() => handleMouseLeave(feature.id)}
                                style={{ transform: tiltStyles[feature.id] || undefined }}
                            >
                                <div className="feature-icon">
                                    <i className={`bx ${feature.icon}`}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="glass-border"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="mcp-pricing-section">
                    <div 
                        className={`glass-pricing-card ${hoveredId === 'pricing-card' ? 'is-interacting' : ''}`}
                        onMouseMove={(e) => handleMouseMove(e, 'pricing-card')}
                        onMouseLeave={() => handleMouseLeave('pricing-card')}
                        style={{ transform: tiltStyles['pricing-card'] || undefined }}
                    >
                        <div className="pricing-header">
                            <span className="pricing-badge">Commercial License</span>
                            <h2>Apotheosis MCP Enterprise Key</h2>
                            <p>Unlock unrestricted access to the Apotheosis MCP server binary, premium generative templates, and future transport mode updates.</p>
                        </div>
                        <div className="pricing-cost">
                            <span className="currency">$</span>
                            <span className="amount">199</span>
                            <span className="currency">USD</span>
                        </div>
                        <p className="pricing-terms">One-time payment. Lifetime access.</p>
                        
                        <div className="pricing-action">
                            <a 
                                href="#" 
                                className={`buy-btn ${hoveredId === 'buy-btn' ? 'is-interacting' : ''}`} 
                                onClick={(e) => e.preventDefault()}
                                onMouseMove={(e) => handleMouseMove(e, 'buy-btn')}
                                onMouseLeave={() => handleMouseLeave('buy-btn')}
                                style={{ transform: tiltStyles['buy-btn'] || undefined }}
                            >
                                Buy MCP License Key <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                        <div className="glass-border"></div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default ApotheosisMCP;