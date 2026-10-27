import React, { useState } from 'react';
import FallingSquares from '../components/FallingSquares';
import EnterpriseCTA from '../components/EnterpriseCTA';
import '../styles/neuComponents.scss';

interface NeuComponentsProps {
    darkMode: boolean;
}

const categories = [
    {
        id: 'ui-controls',
        title: 'UI Controls',
        icon: 'bx-slider-alt',
        description: 'Context-aware toggles, sliders, and inputs designed for real-time model state mutations.',
        items: [
            { name: 'NeuToggle', desc: 'Boolean switch with generative feedback.' },
            { name: 'Command Palette', desc: 'Omnibar for agentic prompt execution.' },
            { name: 'Draggable Node', desc: 'Canvas element for visual orchestration.' }
        ]
    },
    {
        id: 'multimedia',
        title: 'Multimedia',
        icon: 'bx-images',
        description: 'High-fidelity renderers for dynamic image, audio, and video artifact streaming.',
        items: [
            { name: 'Artifact Viewer', desc: 'Inline renderer for generated media.' },
            { name: 'Waveform Sync', desc: 'Real-time TTS audio visualizer.' },
            { name: 'Lens Inspector', desc: 'Deep zoom for high-res latent outputs.' }
        ]
    },
    {
        id: 'data-visualization',
        title: 'Data Visualization',
        icon: 'bx-pie-chart-alt-2',
        description: 'Reactive charts and diagrams that auto-hydrate from streaming JSON chunks.',
        items: [
            { name: 'Tensor Flowchart', desc: 'Node-based logic visualizer.' },
            { name: 'Live Metrics', desc: 'Telemetry dashboard for token usage.' },
            { name: 'Vector Map', desc: '3D scatter plot of embedded space.' }
        ]
    },
    {
        id: 'data-tabulation',
        title: 'Data Tabulation',
        icon: 'bx-table',
        description: 'Enterprise-grade data grids built for massive vector database pagination.',
        items: [
            { name: 'Semantic Grid', desc: 'Table with built-in text embeddings search.' },
            { name: 'Dynamic Columns', desc: 'Auto-resizing columns based on LLM schema.' },
            { name: 'RAG Results', desc: 'Paginated view for retrieved context chunks.' }
        ]
    },
    {
        id: 'authentication',
        title: 'Authentication',
        icon: 'bx-lock-alt',
        description: 'Secure, ephemeral credential injection components for Human-in-the-Loop workflows.',
        items: [
            { name: 'Ephemeral Vault', desc: 'Temporary secret input for API keys.' },
            { name: 'Biometric Gate', desc: 'WebAuthn prompt for sensitive actions.' },
            { name: 'Role Switcher', desc: 'RBAC context toggle for testing boundaries.' }
        ]
    },
    {
        id: 'backend-blueprints',
        title: 'Backend Blueprints',
        icon: 'bx-server',
        description: 'Scalable, event-driven backend architectures for orchestrating complex LLM pipelines and agentic state management.',
        items: [
            { name: 'State Synchronizer', desc: 'Real-time WebSocket state synchronization for distributed agents.' },
            { name: 'Vector Pipeline', desc: 'Automated chunking and embedding ingestion workflows.' },
            { name: 'Agentic Router', desc: 'Semantic routing layers for dynamic multi-agent orchestration.' }
        ]
    }
];

const NeuComponents: React.FC<NeuComponentsProps> = ({ darkMode }) => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className={`neu-components-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            {/* Hero Section */}
            <div className="hero-section">
                <div className="ambient-background">
                    <div className="grid-overlay"></div>
                </div>
                <div className="hero-canvas-container" style={{ opacity: 0.6 }}>
                    <div className="canvas-mask">
                        <FallingSquares 
                            color={darkMode ? 'rgba(128, 0, 32, 0.4)' : 'rgba(9, 9, 11, 0.15)'} 
                            maxSquares={400} 
                        />
                    </div>
                </div>
                <div className="hero-content">
                    <span className="hero-badge">Neucorporeal Library</span>
                    <h1 className="hero-title">Interfaces built for agents.</h1>
                    <p className="hero-description">
                        Explore our comprehensive suite of glassmorphic, state-driven React components designed specifically for Generative AI applications.
                    </p>
                </div>
            </div>

            {/* Navigation Ribbon */}
            <div className="icon-ribbon">
                <div className="ribbon-container">
                    {categories.map(cat => (
                        <div key={cat.id} className="ribbon-item" onClick={() => scrollToSection(cat.id)}>
                            <i className={`bx ${cat.icon}`}></i>
                            <span>{cat.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alternating Category Sections */}
            <div className="categories-wrapper">
                {categories.map((category, index) => {
                    // Alternate themes: Even index = Dark/Burgundy, Odd index = Light/Base
                    const isDarkSection = index % 2 === 0;
                    
                    return (
                        <section 
                            key={category.id} 
                            id={category.id} 
                            className={`category-section ${isDarkSection ? 'theme-alt' : 'theme-base'}`}
                        >
                            <div className="section-content">
                                <div className="section-header">
                                    <h2>{category.title}</h2>
                                    <p>{category.description}</p>
                                </div>

                                <div className="showcase-grid">
                                    {category.items.map((item, itemIdx) => {
                                        const cardId = `${category.id}-${itemIdx}`;
                                        return (
                                            <div 
                                                key={itemIdx}
                                                className="neu-glass-card"
                                                onMouseEnter={() => setHoveredCard(cardId)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                            >
                                                <div className="card-glass-panel">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.desc}</p>
                                                    
                                                    <div className="mock-visual">
                                                        <i className={`bx ${category.icon}`}></i>
                                                    </div>
                                                </div>
                                                <div className="card-border"></div>
                                                {hoveredCard === cardId && <div className="card-glow"></div>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Reusable Enterprise CTA */}
            <EnterpriseCTA 
                darkMode={darkMode}
                heading="The enterprise platform for shipping agents and apps"
                description="Build, deploy, secure, and govern AI agents and modern web applications on a platform designed for enterprise scale, performance, and reliability."
                primaryButtonText="Get a demo"
                secondaryButtonText="Explore the product"
                primaryAction={() => console.log('Demo requested')}
                secondaryAction={() => console.log('Explore clicked')}
            />

        </main>
    );
};

export default NeuComponents;