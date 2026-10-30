import React, { useState, useEffect, useRef, type MouseEvent } from 'react';
import FallingSquares from '../components/FallingSquares';
import { DesktopFrame } from '../components/DeviceFrames';
import generatedUI from '../assets/agentic-icon.png'; 
import '../styles/pantheonView.scss';

interface PantheonProps {
    darkMode?: boolean;
}

const rotatingWords = ['enterprise dashboards', 'agentic workflows', 'generative UIs', 'RAG interfaces'];

const presetPrompts = [
    "Generate a responsive SaaS billing dashboard with a dark mode toggle and a Stripe payment modal.",
    "Scaffold an interactive RAG chat interface with file attachment actions and context injection.",
    "Build a high-density enterprise data table with extensible columns and native pagination."
];

const Pantheon: React.FC<PantheonProps> = ({ darkMode = true }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [prompt, setPrompt] = useState('');
    const [appState, setAppState] = useState<'idle' | 'generating' | 'generated'>('idle');
    const [tiltStyles, setTiltStyles] = useState<{ [key: string]: string }>({});
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [isCodeFocused, setIsCodeFocused] = useState(false);
    const outputStageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prev => (prev + 1) % rotatingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLElement>, id: string) => {
        setHoveredId(id);
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
        }));
    };

    const handleMouseLeave = (id: string) => {
        setHoveredId(null);
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
    };

    const handlePresetClick = (selectedPrompt: string) => {
        if (appState === 'generating') return;
        setPrompt(selectedPrompt);
        setAppState('idle'); 
        setIsCodeFocused(false);
    };

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        
        setAppState('generating');
        
        setTimeout(() => {
            setAppState('generated');
            setTimeout(() => {
                outputStageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }, 2500);
    };

    return(
        <main className={`pantheon-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            <div className="fixed-ambient-bg">
                <div className="grid-overlay"></div>
                <FallingSquares color={darkMode ? 'rgba(128, 0, 32, 0.3)' : 'rgba(9, 9, 11, 0.1)'} maxSquares={350} />
                <div className="noise-overlay"></div>
            </div>

            <div className="pantheon-content-layer">
                
                <section className="pantheon-hero-section">
                    <h1 className="dynamic-heading">
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
                        at the speed of thought.
                    </h1>
                    <p className="hero-subtext">
                        Experience the deterministic power of Apotheosis MCP. Select an optimized intent blueprint below to instantly scaffold enterprise-grade pixel-perfect interfaces simultaneously.
                    </p>
                </section>

                <section className="pantheon-playground">
                    <div className="console-wrapper">
                        
                        <div className="preset-prompts-grid">
                            {presetPrompts.map((preset, idx) => {
                                const presetId = `preset-${idx}`;
                                return (
                                    <button 
                                        key={idx} 
                                        className={`glass-preset-card ${prompt === preset ? 'active' : ''} ${hoveredId === presetId ? 'is-interacting' : ''}`}
                                        onClick={() => handlePresetClick(preset)}
                                        disabled={appState === 'generating'}
                                        onMouseMove={(e) => handleMouseMove(e, presetId)}
                                        onMouseLeave={() => handleMouseLeave(presetId)}
                                        style={{ transform: tiltStyles[presetId] || undefined }}
                                    >
                                        <i className="bx bx-bolt-circle preset-icon"></i>
                                        <span>{preset}</span>
                                        <div className="glass-border"></div>
                                    </button>
                                );
                            })}
                        </div>

                        <form 
                            onSubmit={handleGenerate} 
                            className={`glass-chat-form ${appState === 'generating' ? 'locked' : ''} ${hoveredId === 'chat-form' ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, 'chat-form')}
                            onMouseLeave={() => handleMouseLeave('chat-form')}
                            style={{ transform: tiltStyles['chat-form'] || undefined }}
                        >
                            <div className="input-header">
                                <span className="model-id"><i className="bx bx-chip"></i> Pantheon Architect Model</span>
                                <span className="version-badge">v2.4.0</span>
                            </div>
                            
                            <textarea 
                                className="chat-textarea" 
                                placeholder="Select an optimized blueprint above to begin generating..."
                                value={prompt}
                                readOnly
                                rows={3}
                            ></textarea>
                            
                            <div className="input-footer">
                                <div className="action-buttons">
                                    <button type="button" className="icon-btn" title="Attach Context" disabled><i className="bx bx-paperclip"></i></button>
                                    <button type="button" className="icon-btn" title="Inject Web Link" disabled><i className="bx bx-globe"></i></button>
                                </div>
                                <button type="submit" className="submit-btn" disabled={!prompt.trim() || appState === 'generating'}>
                                    {appState === 'generating' ? <i className="bx bx-loader-alt bx-spin"></i> : <i className="bx bx-up-arrow-alt"></i>}
                                </button>
                            </div>
                            <div className="glass-border"></div>
                        </form>
                    </div>

                    {appState === 'generating' && (
                        <div className="generating-indicator">
                            <div className="pulse-loader">
                                <div></div><div></div><div></div>
                            </div>
                            <p>Synthesizing context and scaffolding structural components...</p>
                        </div>
                    )}

                    {appState === 'generated' && (
                        <div className="output-3d-stage fade-in" ref={outputStageRef}>
                            <div className="tabletop-static">
                                
                                <div className="table-surface"></div>

                                <div 
                                    className={`device-stand standalone-desktop interactive-macbook ${isCodeFocused ? 'dimmed' : ''}`}
                                    onClick={() => setIsCodeFocused(true)}
                                >
                                    <div 
                                        className={`render-pane-wrapper ${hoveredId === 'render-pane' ? 'is-interacting' : ''}`}
                                        onMouseMove={(e) => handleMouseMove(e, 'render-pane')}
                                        onMouseLeave={() => handleMouseLeave('render-pane')}
                                        style={{ transform: tiltStyles['render-pane'] || undefined }}
                                    >
                                        <DesktopFrame className="pantheon-desktop-override">
                                            <img src={generatedUI} alt="Generated UI Output" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </DesktopFrame>
                                        
                                        {!isCodeFocused && (
                                            <div className="click-hint">
                                                <i className="bx bx-code-alt"></i> Click to view source code
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={`floating-code-overlay ${isCodeFocused ? 'visible' : ''}`}>
                                <div 
                                    className={`glass-pane code-pane ${hoveredId === 'code-pane' ? 'is-interacting' : ''}`}
                                    onMouseMove={(e) => handleMouseMove(e, 'code-pane')}
                                    onMouseLeave={() => handleMouseLeave('code-pane')}
                                    style={{ transform: tiltStyles['code-pane'] || undefined }}
                                >
                                    <div className="pane-header">
                                        <span className="file-name"><i className="bx bxl-react"></i> GeneratedView.tsx</span>
                                        <div className="header-actions">
                                            <button className="icon-btn copy-btn"><i className="bx bx-copy"></i></button>
                                            <button className="icon-btn close-btn" onClick={(e) => { e.stopPropagation(); setIsCodeFocused(false); }}><i className="bx bx-x"></i></button>
                                        </div>
                                    </div>
                                    <div className="pane-content code-content" style={{color: darkMode ? '#ffffff' : '#800020'}}>
                                        <pre>
                                            <code style={{color: darkMode ? '#ffffff' : '#000000'}}>
{`import React from 'react';
import { Container, Row, Column } from '@neucorp/layout';
import { DataGrid } from '@neucorp/data';
import { BottomModal } from '@neucorp/modals';

export const GeneratedView = () => {
  return (
    <Container variant="glassmorphic">
      <Row>
        <Column span={12}>
          <h2>Enterprise Interface</h2>
          <DataGrid 
            columns={['ID', 'Status', 'Metrics']} 
            data={mockData} 
          />
        </Column>
      </Row>
      <BottomModal 
        id="action-modal" 
        positiveAction="Confirm"
      />
    </Container>
  );
};`}
                                            </code>
                                        </pre>
                                    </div>
                                    <div className="glass-border"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}

export default Pantheon;