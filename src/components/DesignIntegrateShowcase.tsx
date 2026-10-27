import React, { useState, useEffect, useRef, type MouseEvent } from 'react';
import TesseractIcon from './TesseractIcon';
import modelLogo from '../assets/moonshot-icon.png'; 
import devLogo from '../assets/me-dev-logo-black.png'; 

interface DesignIntegrateProps {
    darkMode: boolean;
}

const DesignIntegrateShowcase: React.FC<DesignIntegrateProps> = ({ darkMode }) => {
    const [activeTab, setActiveTab] = useState<'design' | 'integrate'>('design');
    const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
    
    const windowRef = useRef<HTMLDivElement>(null);
    const [tiltStyle, setTiltStyle] = useState<string>('');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!windowRef.current) return;
        setIsHovered(true);
        const win = windowRef.current;
        const rect = win.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        setTiltStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTiltStyle(`rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    };

    const [typingText, setTypingText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const fullText = "Mito, you there?";
    const [showUserBubble, setShowUserBubble] = useState(false);
    
    useEffect(() => {
        let textTimeout: ReturnType<typeof setTimeout>;
        let bubbleTimeout: ReturnType<typeof setTimeout>;
        
        if (activeTab === 'design' && viewMode === 'preview') {
            setShowUserBubble(false);
            setTypingText("");
            setIsTyping(false);
            
            let charIndex = 0;
            const typeLetter = () => {
                if (charIndex === 0) setIsTyping(true);
                if (charIndex < fullText.length) {
                    setTypingText(fullText.substring(0, charIndex + 1));
                    charIndex++;
                    textTimeout = setTimeout(typeLetter, 70); 
                } else {
                    bubbleTimeout = setTimeout(() => {
                        setTypingText("");
                        setIsTyping(false);
                        setShowUserBubble(true);
                    }, 600);
                }
            };
            
            const loopInterval = setInterval(() => {
                setShowUserBubble(false);
                setTypingText("");
                setIsTyping(false);
                charIndex = 0;
                typeLetter();
            }, 6000);
            
            typeLetter(); 

            return () => {
                clearInterval(loopInterval);
                clearTimeout(textTimeout);
                clearTimeout(bubbleTimeout);
            };
        } else {
            setShowUserBubble(true); 
            setTypingText("");
            setIsTyping(false);
        }
    }, [activeTab, viewMode]);

    const isInputActive = activeTab === 'integrate';
    const isSubmitActive = isTyping || isInputActive;

    return (
        <section className={`design-integrate-section ${activeTab === 'design' ? 'theme-transition-active' : ''}`}>
            <div className="di-layout">
                
                <div className="di-tabs-column">
                    <div 
                        className={`di-tab ${activeTab === 'design' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('design')}
                        onMouseEnter={() => setActiveTab('design')} 
                    >
                        <h3 style={{color: darkMode ? '#800020' : '#000000'}}>Design</h3>
                        <p style={{color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)'}}>A unified interface for generating structured objects, styling chat bubbles, and mapping brand themes to AI UI components seamlessly.</p>
                        {activeTab === 'design' && <button className="explore-btn">Design Guide <i className="bx bx-top-right-arrow"></i></button>}
                    </div>
                    <hr className="di-divider" style={{ borderColor: darkMode ? 'rgba(0,0,0,0.1)' : 'var(--border)' }} />
                    <div 
                        className={`di-tab ${activeTab === 'integrate' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('integrate')}
                        onMouseEnter={() => setActiveTab('integrate')} 
                    >
                        <h3 style={{color: darkMode ? '#800020' : '#000000'}}>Integrate</h3>
                        <p style={{color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)'}}>A set of framework-agnostic React hooks (useChat, useObject) for quickly wiring generative user interfaces into robust backend infrastructure.</p>
                        {activeTab === 'integrate' && <button className="explore-btn">API Reference <i className="bx bx-top-right-arrow"></i></button>}
                    </div>
                </div>

                <div className="di-window-column">
                    <div 
                        ref={windowRef}
                        className={`di-glass-wrapper ${isHovered ? 'is-interacting' : ''}`}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: tiltStyle || undefined }}
                    >
                        <div className="di-glass-panel">
                            
                            <div 
                                className="window-header" 
                                style={{ 
                                    background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)', 
                                    borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)' 
                                }}
                            >
                                <div className="header-left">
                                    <img src={modelLogo} alt="Nova" className="model-img" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                    <div className="session-info">
                                        <h4 style={{textAlign: 'left', fontFamily: 'JetBrains Mono', color: darkMode ? '#0a0a0cbf' : '#000000'}}>Prometheus</h4>
                                        <span className="model-meta" style={{color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)'}}>Engine: <span style={{color: darkMode ? '#800020' : '#0d0772', fontFamily: 'JetBrains Mono'}}>us.moonshotai.kimi-k2-5</span></span>
                                    </div>
                                </div>
                                <div className="header-actions">
                                    <button className="icon-btn" title="Download Transcript" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-download"></i> Export</button>
                                    <div className="toggle-switch" style={{ background: darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.04)' }}>
                                        <button 
                                            style={{ color: darkMode && viewMode !== 'code' ? '#800020' : (viewMode === 'code' ? '#ffffff' : 'var(--text-muted)') }} 
                                            className={viewMode === 'code' ? 'active' : ''} 
                                            onClick={() => setViewMode('code')}
                                        >Code</button>
                                        <button 
                                            style={{ color: darkMode && viewMode !== 'preview' ? '#800020' : (viewMode === 'preview' ? '#ffffff' : 'var(--text-muted)') }} 
                                            className={viewMode === 'preview' ? 'active' : ''} 
                                            onClick={() => setViewMode('preview')}
                                        >View</button>
                                    </div>
                                </div>
                            </div>

                            <div className="window-content">
                                {viewMode === 'code' ? (
                                    <pre className="code-view">
                                        <code>
{`import { useChat } from '@apotheosis/ux';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    model: 'us.amazon.nova-pro'
  });

  return (
    <TerminalSessionUI 
      messages={messages} 
      onSubmit={handleSubmit} 
    />
  );
}`}
                                        </code>
                                    </pre>
                                ) : (
                                    <div className="preview-view chat-viewport">
                                        
                                        {/* User Bubble with Avatar */}
                                        <div 
                                            className={`chat-bubble user-bubble ${showUserBubble ? 'fade-in' : 'hidden'}`}
                                            style={{ flexDirection: 'row', gap: '16px', alignItems: 'flex-end' }}
                                        >
                                            <div className="bubble-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                <div className="bubble-meta" style={{color: darkMode ? '#800020' : '#0a0a0cbf', marginBottom: '6px'}}>ME • Just now</div>
                                                <div className="bubble-text">Mito, you there?</div>
                                            </div>
                                            <div className="user-avatar" style={{
                                                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '0.75rem', fontWeight: 'bold', border: '1px solid #5a0016',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                            }}>
                                                <img height={40} width={40} src={devLogo}/>
                                            </div>
                                        </div>
                                        
                                        {activeTab === 'integrate' && (
                                            <div className="chat-bubble system-bubble fade-in delay-1s">
                                                <div className="sys-avatar" style={{ background: darkMode ? 'rgba(128,0,32,0.1)' : 'rgba(0,0,0,0.05)' }}>
                                                    <TesseractIcon width={24} height={24} color={darkMode ? "#800020" : "#0a0a0cbf"} speed={2} />
                                                </div>
                                                <div className="bubble-content" style={{ color: darkMode ? '#800020' : '#0a0a0cbf', background: darkMode ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)' }}>
                                                    <div style={{textAlign: 'left', color: darkMode ? '#800020' : '#800020'}} className="bubble-meta">MITO AI • Just now</div>
                                                    <div style={{color: darkMode ? '#800020' : '#800020'}} className="bubble-text">We're online and ready...how can I assist with your automation today?</div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="mock-advanced-dock">
                                            <div className="dock-actions">
                                                <button className="pill-btn" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-command"></i> Prompt Options <i className="bx bx-chevron-down"></i></button>
                                                <button className="icon-btn" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-paperclip"></i></button>
                                                <button className="icon-btn" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-link"></i></button>
                                                <button className="icon-btn" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-cube-alt"></i></button>
                                                <button className="icon-btn" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-microchip"></i></button>
                                            </div>
                                            
                                            <div className="mock-chat-input">
                                                <input 
                                                    style={{ color: darkMode ? '#ffffff' : '#000000', background: darkMode ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.2)', border: darkMode ? 'var(--border)' : '1px solid rgba(0,0,0,0.05)' }}
                                                    type="text" 
                                                    value={typingText} 
                                                    placeholder={typingText ? "" : "Ask Mito AI a question..."} 
                                                    disabled={!isInputActive} 
                                                />
                                                <button 
                                                    disabled={!isSubmitActive} 
                                                    className="submit-btn" 
                                                    style={{ 
                                                        background: isSubmitActive ? '#800020' : (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
                                                        color: isSubmitActive ? '#ffffff' : (darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'),
                                                        cursor: isSubmitActive ? 'pointer' : 'default',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <i className="bx bx-send"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="di-shadow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignIntegrateShowcase;