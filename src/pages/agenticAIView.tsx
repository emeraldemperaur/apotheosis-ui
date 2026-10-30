import React, { useState, type MouseEvent } from 'react';
import FallingSquares from '../components/FallingSquares';
import '../styles/agenticAI.scss';

interface AgenticAIProps {
    darkMode?: boolean;
}

const AgenticAI: React.FC<AgenticAIProps> = ({ darkMode = true }) => {
    const [tiltStyles, setTiltStyles] = useState<{ [key: string]: string }>({});
    const [hoveredId, setHoveredId] = useState<string | null>(null);

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
        <main className={`agentic-ai-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            <div className="fixed-ambient-bg">
                <div className="grid-overlay"></div>
                <FallingSquares 
                    color={darkMode ? 'rgba(128, 0, 32, 0.3)' : 'rgba(9, 9, 11, 0.1)'} 
                    maxSquares={350} 
                />
                <div className="noise-overlay"></div>
            </div>

            <div className="agentic-content-layer">
                
                <section className="agentic-hero-section">
                    <h1 
                        className={`dynamic-heading ${hoveredId === 'hero-text' ? 'is-interacting' : ''}`}
                        onMouseMove={(e) => handleMouseMove(e, 'hero-text')}
                        onMouseLeave={() => handleMouseLeave('hero-text')}
                        style={{ transform: tiltStyles['hero-text'] || undefined }}
                    >
                        Autonomous Orchestration<br/>
                        <span className="text-muted">& Goal-Oriented Systems</span>
                    </h1>
                    <p className="agentic-lead-text">
                        Transition from reactive chatbots to proactive reasoning engines. Agentic AI leverages advanced foundation models to autonomously plan, adapt, and execute complex, multi-step workflows with strict enterprise safeguards.
                    </p>
                </section>

                <section className="agentic-intro-ribbon">
                    <div className="ribbon-inner">
                        <div className="intro-header">
                            <i className="bx bx-brain"></i>
                            <h2>What is Agentic AI?</h2>
                        </div>
                        <div className="intro-content">
                            <p className="agentic-text">
                                Agentic artificial intelligence represents the shift from responsive, single-turn language models to autonomous systems capable of executing complex workflows to achieve overarching objectives. 
                            </p>
                            <p className="agentic-text">
                                These systems dynamically evaluate their environments, utilize external software tools, and independently correct their course without requiring human intervention at every step.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="agentic-features-section">
                    <div className="features-grid">
                        
                        <div 
                            className={`glass-feature-card ${hoveredId === 'core-architecture' ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, 'core-architecture')}
                            onMouseLeave={() => handleMouseLeave('core-architecture')}
                            style={{ transform: tiltStyles['core-architecture'] || undefined }}
                        >
                            <div className="feature-icon">
                                <i className="bx bx-layer"></i>
                            </div>
                            <h3>Core Architecture</h3>
                            <p>An AI agent functions on three primary pillars:</p>
                            <ul className="agentic-list">
                                <li><strong>The Brain:</strong> A foundation model (e.g., Amazon Nova or Cohere Command R+) provides reasoning, planning, and task breakdown capabilities.</li>
                                <li><strong>Memory:</strong> Short-term and long-term storage mechanisms track conversation history and past execution outcomes to inform future decisions.</li>
                                <li><strong>Tools:</strong> External APIs and software integrations that allow the agent to mutate data, search knowledge bases, and interact with enterprise infrastructure.</li>
                            </ul>
                            <div className="glass-border"></div>
                        </div>

                        <div 
                            className={`glass-feature-card ${hoveredId === 'enterprise-applications' ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, 'enterprise-applications')}
                            onMouseLeave={() => handleMouseLeave('enterprise-applications')}
                            style={{ transform: tiltStyles['enterprise-applications'] || undefined }}
                        >
                            <div className="feature-icon">
                                <i className="bx bx-shield-quarter"></i>
                            </div>
                            <h3>Enterprise Applications</h3>
                            <p className="justified-text">
                                By delegating multi-step tasks to bespoke agentic AI systems, enterprises can radically scale operations. Use cases span from autonomous software generation and testing, business process automation to dynamic customer support resolution and real-time cybersecurity threat mitigation.
                            </p>
                            <div className="glass-border"></div>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
};

export default AgenticAI;