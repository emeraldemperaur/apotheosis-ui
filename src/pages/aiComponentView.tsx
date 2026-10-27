import React, { useState } from 'react';
import SloganRibbon from '../components/sloganRibbon';
import FallingSquares from '../components/FallingSquares';
import NeuCallToAction from '../components/neuCallToAction';
import BuildWithConvenience from '../components/BuildWithConvenience';
import DesignIntegrateShowcase from '../components/DesignIntegrateShowcase';
import AgnosticToolkit from '../components/AgnosticToolkit';
import '../styles/main.scss';
import '../styles/aiComponents.scss';
import aiComponentShowcase from '../assets/louvre-icon.png'; 

interface AIComponentsProps {
    darkMode: boolean;
}

const AIComponents: React.FC<AIComponentsProps> = ({ darkMode }) => {
    const [hoveredAgenticRegion, setHoveredAgenticRegion] = useState<number | null>(null);

    return(
        <main className={`enterprise-layout relative ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            <div className="ambient-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-canvas-container" style={{ opacity: 0.7 }}>
                <div className="canvas-mask">
                    <FallingSquares 
                        color={darkMode ? 'rgba(128, 0, 32, 0.4)' : 'rgba(9, 9, 11, 0.15)'} 
                        maxSquares={400} 
                    />
                </div>
            </div>

            <div className="content-wrapper relative z-10" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1400px', margin: '0 auto' }}>
                
                {/* 1. Hero Section */}
                <div style={{ marginBottom: '64px', textAlign: 'center' }}>                   
                    <SloganRibbon 
                        darkMode={darkMode}
                        badge="Generative Intelligence"
                        title="Connect language models directly to the DOM" 
                        content="Purpose-built for Agentic workflows, these components natively handle real-time streaming, dynamic content generation, and autonomous state mutations right out of the box."
                    />
                </div>

                {/* 2. NeuCallToAction */}
                <section style={{ marginBottom: '120px' }}>
                    <NeuCallToAction 
                        version={2} 
                        darkMode={darkMode}
                        imgSrc={aiComponentShowcase} 
                        heading='AI Components' 
                        subheading='Build Context-Aware Interfaces' 
                        content='Connect language models and backend services directly to the DOM. Purpose-built for Generative AI use cases, these components natively handle real-time streaming, dynamic content generation, and autonomous workflows right out of the box.'
                        routePath='getting-started'
                        buttonText='Explore AI Components →' 
                        buttonVersion={1}
                    />
                </section>

                {/* 3. Build With Convenience */}
                <BuildWithConvenience darkMode={darkMode} />

                {/* 4. Design | Integrate Interactive Section */}
                <DesignIntegrateShowcase darkMode={darkMode} />

                {/* 5. Agnostic Toolkit Section */}
                <AgnosticToolkit darkMode={darkMode}/>

                {/* 6. Agentic Infrastructure */}
                <section className="agentic-infrastructure-section">
                    <div className="agentic-header">
                        <h2 style={{color: darkMode ? '#0a0a0cbf' : '#000000'}}>Agentic <span style={{color: '#800020'}}>AI</span><br/>Tenets</h2>
                        <div className="agentic-actions"></div>
                    </div>

                    <div className="agentic-interactive-zone">
                        <div className={`central-square hover-state-${hoveredAgenticRegion}`}>
                            <div className="square-core"></div>
                            
                            <div className="glow-edge edge-top"></div>
                            <div className="glow-edge edge-right"></div>
                            <div className="glow-edge edge-bottom"></div>
                            <div className="glow-edge edge-left"></div>
                            
                            <div className="square-ambient-glow"></div>
                        </div>

                        <div className="agentic-text-menu" onMouseLeave={() => setHoveredAgenticRegion(null)}>
                            <div 
                                className={`menu-item ${hoveredAgenticRegion === 1 ? 'active' : ''} ${hoveredAgenticRegion !== null && hoveredAgenticRegion !== 1 ? 'dimmed' : ''}`}
                                onMouseEnter={() => setHoveredAgenticRegion(1)}
                            >
                                <span className="title" style={{color: darkMode ? '#0a0a0cbf' : '#000000'}}>For coding agents</span>
                                <p className="description">to deploy in their native language, with complete access to standard CLI and internal API toolsets.</p>
                            </div>
                            <div 
                                className={`menu-item ${hoveredAgenticRegion === 2 ? 'active' : ''} ${hoveredAgenticRegion !== null && hoveredAgenticRegion !== 2 ? 'dimmed' : ''}`}
                                onMouseEnter={() => setHoveredAgenticRegion(2)}
                            >
                                <span className="title" style={{color: darkMode ? '#0a0a0cbf' : '#000000'}}>To ship apps and agents</span>
                                <p className="description">in securely sandboxed v8 virtual machines, backed by durable state execution.</p>
                            </div>
                            <div 
                                className={`menu-item ${hoveredAgenticRegion === 3 ? 'active' : ''} ${hoveredAgenticRegion !== null && hoveredAgenticRegion !== 3 ? 'dimmed' : ''}`}
                                onMouseEnter={() => setHoveredAgenticRegion(3)}
                            >
                                <span className="title" style={{color: darkMode ? '#0a0a0cbf' : '#000000'}}>Automated by agents</span>
                                <p className="description">who autonomously investigate errors, plan fixes, and open PRs without human intervention.</p>
                            </div>
                            <div 
                                className={`menu-item ${hoveredAgenticRegion === 4 ? 'active' : ''} ${hoveredAgenticRegion !== null && hoveredAgenticRegion !== 4 ? 'dimmed' : ''}`}
                                onMouseEnter={() => setHoveredAgenticRegion(4)}
                            >
                                <span className="title" style={{color: darkMode ? '#0a0a0cbf' : '#000000'}}>Enterprise RAG context</span>
                                <p className="description">to inject high-dimensional vector data directly into the application context window.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default AIComponents;