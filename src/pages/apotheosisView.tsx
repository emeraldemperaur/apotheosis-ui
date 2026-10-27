import React, { useRef, useState, type MouseEvent } from 'react';
import FallingSquares from '../components/FallingSquares';
import FAButton from '../components/FAButton';
import '../styles/apotheosis.scss';

interface ApotheosisSystemProps {
    darkMode: boolean;
}

const designTenets = [
    {
        id: 'ethereal-hierarchy',
        title: 'Ethereal Hierarchy',
        icon: 'bx-layer',
        tagline: 'Z-Axis Cognitive Mapping',
        description: 'Traditional interfaces rely on harsh shadows and overlapping opaque planes to establish depth. Neucorporeal design leverages ultra-sheer translucence and dynamic blur radiuses to create an ethereal hierarchy. The deeper the blur, the further the background element, allowing users to intuitively map the Z-axis of complex agentic workflows without cognitive overload.'
    },
    {
        id: 'contextual-translucence',
        title: 'Contextual Translucence',
        icon: 'bx-water',
        tagline: 'Adaptive Glassmorphism',
        description: 'AI environments are highly dynamic. Components should absorb and reflect their environment rather than obstruct it. By utilizing 3% alpha channels combined with background-blur compositing, our UI overlays gracefully adapt to underlying artifact streams, terminal outputs, and generative media, ensuring the user always maintains visual context of the underlying system state.'
    },
    {
        id: 'tactile-affordance',
        title: 'Tactile Affordance',
        icon: 'bx-fingerprint',
        tagline: 'Neumorphic Anchoring',
        description: 'In a purely digital, generative environment, users require physical anchoring. Neumorphic highlights and inset shadows are strictly reserved for actionable interactions—buttons, toggles, and inputs. By mimicking real-world light physics and soft extrusion, we provide clear tactile affordance that grounds the user amidst fluid, unpredictable AI outputs.'
    },
    {
        id: 'generative-motion',
        title: 'Generative Motion',
        icon: 'bx-wind',
        tagline: 'State-Driven Physics',
        description: 'Pre-canned bezier curves are insufficient for AI orchestration. Animations in the Apotheosis system are driven by real-time state mutation and token streaming. Spring physics and interruptible transitions mirror the non-deterministic "thought processes" of the underlying LLMs, creating a UI that feels genuinely alive and responsive to generation latency.'
    },
    {
        id: 'ephemeral-architecture',
        title: 'Ephemeral Architecture',
        icon: 'bx-ghost',
        tagline: 'Component Dissolution',
        description: 'Interfaces should only exist exactly when needed. The Neucorporeal framework relies on components that seamlessly materialize to collect user input or render an artifact, and then dissolve gracefully into the background once the context is resolved. This reduces screen clutter and maintains focus on the active generative session.'
    }
];

const ApotheosisSystem: React.FC<ApotheosisSystemProps> = ({ darkMode }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    
    const [tiltStyles, setTiltStyles] = useState<{ [key: string]: string }>({});
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: string) => {
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

    const handleMouseLeave = (id: string) => {
        setHoveredId(null);
        setTiltStyles(prev => ({
            ...prev,
            [id]: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
    };

    const scrollToSection = (id: string) => {
        if (!scrollContainerRef.current) return;
        const element = document.getElementById(id);
        if (element) {
            const topOffset = element.offsetTop;
            scrollContainerRef.current.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };      

    return (
        <main className={`apotheosis-system-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            
            <div className="fixed-ambient-bg">
                <FallingSquares 
                    color={darkMode ? 'rgba(128, 0, 32, 0.4)' : 'rgba(9, 9, 11, 0.15)'} 
                    maxSquares={350} 
                />
            </div>

            <div className="parallax-wrapper" ref={scrollContainerRef}>
                
                <section className="sys-hero-section">
                    <div className="sys-hero-layout">
                        <div className="sys-hero-left">
                            <div className="code-badge">"use neucorporeal"</div>
                            <h1 className="hero-headline">for infinite interface adaptability</h1>
                        </div>
                        <div className="sys-hero-right">
                            <p className="hero-desc">
                                With zero configuration, intrinsic state mapping, and out of the box context observability, Apotheosis makes Generative UI easy.
                            </p>
                            <div className="hero-actions">
                                <button className="btn-get-started">Get started <i className="bx bx-top-right-arrow"></i></button>
                                <div className="npm-install-box">
                                    <span>$</span> npm install @apotheosis/system
                                    <i className="bx bx-copy copy-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <nav className="tenet-ribbon">
                    <div className="ribbon-inner">
                        {designTenets.map(tenet => (
                            <div key={`ribbon-${tenet.id}`} className="ribbon-node" onClick={() => scrollToSection(tenet.id)}>
                                <i className={`bx ${tenet.icon}`}></i>
                                <span>{tenet.title}</span>
                            </div>
                        ))}
                    </div>
                </nav>

                {designTenets.map((tenet, idx) => (
                    <React.Fragment key={tenet.id}>
                        <div className="parallax-bg-layer">
                            <h2 className="parallax-bg-text" style={{ color: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)' }}>
                                0{idx + 1}
                            </h2>
                        </div>
                        
                        <section id={tenet.id} className="parallax-fg-layer">
                            <div 
                                className={`tenet-glass-panel ${hoveredId === tenet.id ? 'is-interacting' : ''}`}
                                onMouseMove={(e) => handleMouseMove(e, tenet.id)}
                                onMouseLeave={() => handleMouseLeave(tenet.id)}
                                style={{ transform: tiltStyles[tenet.id] || undefined }}
                            >
                                <div className="tenet-header">
                                    <div className="tenet-icon-wrapper">
                                        <i className={`bx ${tenet.icon}`}></i>
                                    </div>
                                    <div className="tenet-titles">
                                        <h4 className="tenet-tagline">{tenet.tagline}</h4>
                                        <h3 className="tenet-title">{tenet.title}</h3>
                                    </div>
                                </div>
                                <p className="tenet-description">{tenet.description}</p>
                                <div className="glass-border"></div>
                            </div>
                        </section>
                    </React.Fragment>
                ))}

                <div style={{ height: '20vh', width: '100%' }}></div>

            </div>
            
            <FAButton darkMode={darkMode} icon={<i className="bx bx-up-arrow-alt"></i>} onClick={scrollToTop}/>
        </main>
    );
};

export default ApotheosisSystem;