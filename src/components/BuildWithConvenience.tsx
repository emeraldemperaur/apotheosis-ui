import React, { useState, type MouseEvent } from 'react';

interface BuildWithConvenienceProps {
    darkMode: boolean;
}

const BuildWithConvenience: React.FC<BuildWithConvenienceProps> = ({ darkMode }) => {
    const [tiltStyles, setTiltStyles] = useState<{ [key: number]: string }>({});
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>, idx: number) => {
        setHoveredIdx(idx);
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        setTiltStyles(prev => ({
            ...prev,
            [idx]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }));
    };

    const handleMouseLeave = (idx: number) => {
        setHoveredIdx(null);
        setTiltStyles(prev => ({
            ...prev,
            [idx]: `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
    };

    const cards = [
        { title: 'Apotheosis Context', description: 'Execute native machine tools securely without managing complex API bridges manually.', command: '$ npm i @apotheosis/context' },
        { title: 'MCP Sandboxing', description: 'Run LLM-generated code in isolated v8 virtual environments at scale.', command: '$ npm i @apotheosis/sandbox' },
        { title: 'Agentic Workflows', description: 'Build long-running AI agents that can suspend, resume, and survive function timeouts.', command: '$ npm i @apotheosis/workflow' },
        { title: 'Apotheosis UI', description: 'A UI component library built to scaffold AI-native applications at enterprise speed.', command: '$ npx apotheosis-ui init' }
    ];

    return (
        <section className="build-convenience-section">
            <div className="bwc-header">
                <h2 className="display-heading" style={{ color: darkMode ? '#0a0a0cbf' : '#000000' }}>Build with convenience</h2>
                <p className="bwc-lead" style={{ color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)' }}>
                    Plug the Apotheosis SDK into an entire ecosystem designed for modern AI applications that scale.
                </p>
            </div>
            
            <div className="bwc-grid">
                {cards.map((card, idx) => (
                    <div key={idx} className="bwc-perspective-wrapper">
                        <div 
                            className={`bwc-tactile-container ${hoveredIdx === idx ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, idx)}
                            onMouseLeave={() => handleMouseLeave(idx)}
                            style={{ transform: tiltStyles[idx] || undefined }}
                        >
                            <div className="bwc-tactile-glare"></div>
                            
                            <div className="bwc-glass-panel">
                                <h3 style={{ color: darkMode ? '#0a0a0cbf' : '#000000' }}>{card.title}</h3>
                                <p style={{ color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)' }}>{card.description}</p>
                                
                                <div className="bwc-terminal">
                                    <code style={{ color: darkMode ? '#800020' : '#000000' }}>{card.command}</code>
                                    <button className="copy-btn" aria-label="Copy code">
                                        <i className="bx bx-copy" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bwc-tactile-shadow"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BuildWithConvenience;