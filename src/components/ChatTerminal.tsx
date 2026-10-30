import React, { useState, useEffect } from 'react';
import TesseractIcon from './TesseractIcon';
import modelLogo from '../assets/moonshot-icon.png'; 
import devLogo from '../assets/me-dev-logo-black.png'; 
import devLogoDark from '../assets/me-dev-logo-white.png'; 
import '../styles/chatTerminal.scss';

interface ChatTerminalProps {
    darkMode?: boolean;
    initialTab?: 'design' | 'integrate';
}

const ChatTerminal: React.FC<ChatTerminalProps> = ({ darkMode = true }) => {
    const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
    const [typingText, setTypingText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showUserBubble, setShowUserBubble] = useState(false);
    
    const fullText = "Mito, you there?";

    useEffect(() => {
        let textTimeout: ReturnType<typeof setTimeout>;
        let bubbleTimeout: ReturnType<typeof setTimeout>;
        
        if (viewMode === 'preview') {
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
            }, 8000);
            
            typeLetter(); 

            return () => {
                clearInterval(loopInterval);
                clearTimeout(textTimeout);
                clearTimeout(bubbleTimeout);
            };
        }
    }, [viewMode]);

    const isSubmitActive = isTyping || true; 

    return (
        <div className={`chat-terminal-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="terminal-glass-panel">
                
                <div className="window-header">
                    <div className="header-left">
                        <img src={modelLogo} alt="Model Icon" className="model-img" />
                        <div className="session-info">
                            <h4 style={{textAlign: 'left'}}>Prometheus</h4>
                            <span className="model-meta">Engine: <span style={{color: darkMode ? '#800020' : '#0d0772'}}>us.moonshotai.kimi-k2-5</span></span>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="icon-btn" title="Download Transcript">
                            <i className="bx bx-download"></i> Export
                        </button>
                        <div className="toggle-switch">
                            <button 
                                className={viewMode === 'code' ? 'active' : ''} 
                                onClick={() => setViewMode('code')}
                            >
                                Code
                            </button>
                            <button 
                                className={viewMode === 'preview' ? 'active' : ''} 
                                onClick={() => setViewMode('preview')}
                            >
                                View
                            </button>
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
                            
                            <div className={`chat-bubble user-bubble ${showUserBubble ? 'fade-in' : 'hidden'}`}>
                                <div className="bubble-content">
                                    <div className="bubble-meta">ME • Just now</div>
                                    <div className="bubble-text">Mito, you there?</div>
                                </div>
                                <div className="user-avatar">
                                    <img src={darkMode ? devLogoDark : devLogo} alt="User" />
                                </div>
                            </div>
                            
                            <div className={`chat-bubble system-bubble ${showUserBubble ? 'fade-in delay-1s' : 'hidden'}`}>
                                <div className="sys-avatar">
                                    <TesseractIcon width={24} height={24} color={darkMode ? "#800020" : "#0a0a0cbf"} speed={2} />
                                </div>
                                <div className="bubble-content">
                                    <div className="bubble-meta" style={{textAlign: 'left'}}>MITO AI • Just now</div>
                                    <div className="bubble-text">We're online and ready...how can I assist with your automation today?</div>
                                </div>
                            </div>

                            <div className="mock-advanced-dock">
                                <div className="dock-actions">
                                    <button className="pill-btn"><i className="bx bx-command"></i> Prompt Options <i className="bx bx-chevron-down"></i></button>
                                    <button className="icon-btn"><i className="bx bx-paperclip"></i></button>
                                    <button className="icon-btn"><i className="bx bx-link"></i></button>
                                    <button className="icon-btn"><i className="bx bx-cube-alt"></i></button>
                                    <button className="icon-btn"><i className="bx bx-microchip"></i></button>
                                </div>
                                
                                <div className="mock-chat-input">
                                    <input 
                                        type="text" 
                                        value={typingText} 
                                        placeholder={typingText ? "" : "Ask Mito AI a question..."} 
                                        readOnly 
                                    />
                                    <button className={`submit-btn ${isSubmitActive ? 'active' : ''}`}>
                                        <i className="bx bx-send"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatTerminal;