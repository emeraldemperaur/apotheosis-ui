import React, { useState, useEffect, useRef, type MouseEvent } from 'react';
import FallingSquares from '../components/FallingSquares';
import { DesktopFrame, IphoneFrame } from '../components/DeviceFrames';
import '../styles/neuLaboratory.scss';
import ChatTerminal from '../components/ChatTerminal';

interface NeuLaboratoryProps {
    darkMode: boolean;
}

const rotatingWords = ['LLM workflows', 'generative models', 'agentic systems', 'latent spaces'];

const features = [
    { icon: 'bx-layer', title: 'In-component rendering', desc: 'Stream UI elements directly into the DOM as tokens arrive, reducing perceived latency.' },
    { icon: 'bx-bolt-circle', title: 'Cold-start reduction', desc: 'Pre-warmed glassmorphic containers cache CSS computations for instant visibility.' },
    { icon: 'bx-network-chart', title: 'State synchronization', desc: 'Automatically sync frontend UI states with complex multi-agent backend loops.' },
    { icon: 'bx-shield-quarter', title: 'Boundary protection', desc: 'Isolate generated code execution safely within nested iframe boundaries.' },
    { icon: 'bx-expand-alt', title: 'Dynamic layout scaling', desc: 'Automatically adjusts grid and flex bounds based on real-time payload sizes.' },
    { icon: 'bx-task', title: 'Post-generation tasks', desc: 'Keep interactive elements alive after generation to handle user refinement and logging.' }
];

const faqs = [
    { q: 'How does Neucorporeal handle heavy DOM mutations?', a: 'By utilizing React 18 concurrent features and our custom virtualization engine, heavy generative mutations are offloaded to background fibers, keeping the glassmorphic animations running at a smooth 60fps.' },
    { q: 'Can I use these components with Next.js App Router?', a: 'Yes, all Neu components are marked with "use client" directives where necessary and support seamless integration with React Server Components.' },
    { q: 'What is the performance impact of the background blurs?', a: 'We restrict backdrop-filters to strict bounding boxes and hardware-accelerate all Z-axis transforms via the GPU, ensuring negligible impact on modern devices.' },
    { q: 'Do the device frames support interactive iframes?', a: 'Absolutely. The Desktop and iPhone frames act as standard block-level wrappers. Any iframe placed inside will retain full interactivity and pointer events.' }
];

const NeuLaboratory: React.FC<NeuLaboratoryProps> = ({ darkMode }) => {
    const [wordIndex, setWordIndex] = useState(0);
    
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    
    const [desktopRot, setDesktopRot] = useState(60);
    const [mobileRot, setMobileRot] = useState(60);
    const [tiltStyles, setTiltStyles] = useState<{ [key: number]: string }>({});
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [heroTextTilt, setHeroTextTilt] = useState<string>('');
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prev => (prev + 1) % rotatingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            
            if (desktopRef.current) {
                const dRect = desktopRef.current.getBoundingClientRect();
                let dProg = (windowHeight - dRect.top) / (windowHeight * 0.65);
                dProg = Math.max(0, Math.min(1, dProg));
                setDesktopRot(65 - (dProg * 65));
            }

            if (mobileRef.current) {
                const mRect = mobileRef.current.getBoundingClientRect();
                let mProg = (windowHeight - mRect.top) / (windowHeight * 0.65);
                mProg = Math.max(0, Math.min(1, mProg));
                setMobileRot(65 - (mProg * 65));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: number) => {
        setHoveredId(id);
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
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

    const handleMouseLeave = (id: number) => {
        setHoveredId(null);
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
    };

    const handleHeroMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        setHeroTextTilt(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    };

    const handleHeroMouseLeave = () => {
        setHeroTextTilt('');
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className={`neu-lab-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            <div className="fixed-ambient-bg">
                <FallingSquares color={darkMode ? 'rgba(128, 0, 32, 0.4)' : 'rgba(9, 9, 11, 0.15)'} maxSquares={300} />
            </div>

            <section className="lab-hero">
                <div className="lab-hero-content">
                    <h1 className="dynamic-heading">
                        Turn your <br/>
                        <span 
                            className="rotating-text-wrapper"
                            onMouseMove={handleHeroMouseMove}
                            onMouseLeave={handleHeroMouseLeave}
                            style={{ transform: heroTextTilt || undefined }}
                        >
                            <span key={wordIndex} className="rotating-text animate-slide-up">
                                {rotatingWords[wordIndex]}
                            </span>
                        </span><br/>
                        into your digital front door.
                    </h1>
                    <p className="hero-subtext">
                        Deploy optimized, responsive interfaces that invite users to stay a while. Enhance interaction, drive conversions, and improve your overall generative presence.
                    </p>
                </div>
            </section>

            <nav className="lab-ribbon">
                <div className="ribbon-inner">
                    <div className="ribbon-node" onClick={() => scrollToSection('desktop-showcase')}>
                        <i className="bx bx-desktop"></i><span>UHD Desktop</span>
                    </div>
                    <div className="ribbon-node" onClick={() => scrollToSection('mobile-showcase')}>
                        <i className="bx bx-mobile-alt"></i><span>Mobile Responsive</span>
                    </div>
                </div>
            </nav>

            <section id="desktop-showcase" className="showcase-section">
                <div className="showcase-header">
                    <h2>UHD Desktop</h2>
                    <p>Fluid neucorporeal UI components for dynamic web applications optimized for high-pixel-density widescreen monitors.</p>
                </div>
                <div className="perspective-container">
                    <div 
                        className="tabletop" 
                        ref={desktopRef}
                        style={{ transform: `rotate3d(1, 0, 0, ${desktopRot}deg)` }}
                    >
                        <div className="table-surface"></div>
                        <div className="device-stand standalone-desktop">
                            <DesktopFrame>
                                <ChatTerminal darkMode={darkMode}/>
                            </DesktopFrame>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mobile-showcase" className="showcase-section">
                <div className="showcase-header">
                    <h2>Mobile</h2>
                    <p>Responsive UI engine renders adaptive grids and touch-first mechanics designed for viewport constraints.</p>
                </div>
                <div className="perspective-container">
                    <div 
                        className="tabletop" 
                        ref={mobileRef}
                        style={{ transform: `rotate3d(1, 0, 0, ${mobileRot}deg)` }}
                    >
                        <div className="table-surface"></div>
                        <div className="device-stand standalone-mobile">
                            <IphoneFrame>
                                <iframe 
                                    src="https://example.com" 
                                    title="Mobile UI Preview"
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                />
                            </IphoneFrame>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="features-header">
                    <h2>Optimized rendering for agentic applications</h2>
                </div>
                <div className="features-grid">
                    {features.map((feat, idx) => (
                        <div 
                            key={idx} 
                            className={`feature-card ${hoveredId === idx ? 'is-interacting' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, idx)}
                            onMouseLeave={() => handleMouseLeave(idx)}
                            style={{ transform: tiltStyles[idx] || undefined }}
                        >
                            <div className="feat-icon"><i className={`bx ${feat.icon}`}></i> {feat.title}</div>
                            <p className="feat-desc">{feat.desc}</p>
                            <div className="feat-border"></div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="faq-section">
                <div className="faq-layout">
                    <div className="faq-left">
                        <h2>Frequently<br/>asked questions</h2>
                    </div>
                    <div className="faq-right">
                        {faqs.map((faq, idx) => (
                            <div 
                                key={idx} 
                                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            >
                                <div className="faq-question">
                                    <span className="faq-num">0{idx + 1}</span>
                                    {faq.q}
                                    <i className="bx bx-chevron-down toggle-icon"></i>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default NeuLaboratory;