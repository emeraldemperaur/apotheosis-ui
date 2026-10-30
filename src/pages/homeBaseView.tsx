import NeuCallToAction from '../components/neuCallToAction';
import SloganRibbon from '../components/sloganRibbon';
import devLogo from '../assets/agentic-icon.png';
import '../styles/main.scss';
import AgenticRibbon from '../components/agenticRibbon';
import FallingSquares from '../components/FallingSquares';

const HomeBase = ({ darkMode }: { darkMode: boolean }) => {
    return(
        <main className="enterprise-layout relative">
            <div className="ambient-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-canvas-container">
                <div className="canvas-mask">
                    <FallingSquares 
                        darkMode={darkMode}
                        color={darkMode ? '#80002080' : 'rgba(9, 9, 11, 0.15)'} 
                        maxSquares={500} 
                    />
                </div>
            </div>

            <div className="content-wrapper relative z-10 pt-16">
                <SloganRibbon 
                    darkMode={darkMode}
                    badge="Introducing Apotheosis MCP"
                    title="Elevate the modern user experience with tactile depth" 
                    content={
                        <>
                            <span className="morphic-wrapper">
                                <span>Neumorphic</span>
                                <span>Glassmorphic</span>
                            </span>
                            {" component library & model context protocol server optimized for rapid agentic development"}
                        </>
                    }
                />
                
                <div className="cta-stack">
                    <NeuCallToAction darkMode={darkMode} version={2} imgSrc={devLogo} heading='AI Components' subheading='Build Context-Aware Interfaces' 
                    content='Connect language models and backend services directly to the DOM. Purpose-built for Generative AI use cases, these components natively handle real-time streaming, dynamic content generation, and autonomous workflows right out of the box.'
                    routePath='ai-components'
                    buttonText='Explore AI Components →' buttonVersion={1}/>

                    <NeuCallToAction darkMode={darkMode} version={1} imgSrc={devLogo} heading='Neucorporeal UI Components' subheading='Command Your Data with Precision' 
                    content='Master high-density data without compromising user experience. Built to handle massive throughput and complex state mutations, Apotheosis UX components proffer unparalleled command over enterprise-grade interfaces.'
                    routePath='neu-components'
                    buttonText='Browse UI Controls →' buttonVersion={1}/>
                </div>
            </div>

            <div className="angled-separator relative z-10">
                <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48h1440V0h-136L1250 48H190L136 0H0v48z" fill="currentColor"/>
                </svg>
            </div>

            <section className="dark-section showcase-section relative z-10">
                <div className="content-wrapper">
                    <div className="section-header">
                        <span className="accent-text">UI Architecture</span>
                        <h2>UI that keeps evolving</h2>
                        <p>Ever feel like Generative AI requirements change with the season?<br/>Apotheosis keeps up with the latest streaming, state mutation, and contextual best practices.</p>
                        <a href="/neu-components" className="explore-link">Explore UI components <span>▶</span></a>
                    </div>

                    <div className="showcase-grid">
                        <div className="showcase-card tall hover-reveal">
                            <div className="card-visual dummy-graph"></div>
                            <div className="card-text">
                                <h3>Contextual State Management</h3>
                                <p>Each component's internal state is fully synchronized with your LLM context window automatically during runtime.</p>
                            </div>
                        </div>
                        <div className="showcase-card hover-reveal">
                            <div className="card-visual dummy-terminal"></div>
                            <div className="card-text">
                                <h3>Fraud & Abuse Prevention</h3>
                                <p>Reduce prompt injection and free tier abuse by natively blocking high-risk execution paths directly in the UI layer.</p>
                            </div>
                        </div>
                        <div className="showcase-card hover-reveal">
                            <div className="card-visual dummy-nodes"></div>
                            <div className="card-text">
                                <h3>Autonomous Workflows</h3>
                                <p>Fast and reliable workflow execution with built-in recursive error handling.</p>
                            </div>
                        </div>
                        <div className="showcase-card hover-reveal">
                            <div className="card-visual dummy-streaming"></div>
                            <div className="card-text">
                                <h3>Real-time Streaming</h3>
                                <p>Natively handle real-time data streaming and asynchronous component hydration without blocking UI rendering.</p>
                            </div>
                        </div>
                        <div className="showcase-card tall hover-reveal">
                            <div className="card-visual dummy-avatar"></div>
                            <div className="card-text">
                                <h3>Smart Neumorphism</h3>
                                <p>Improve user conversion rates with adaptive depth mechanics.</p>
                            </div>
                        </div>
                        
                        <div className="showcase-card wide hover-reveal">
                            <div className="card-visual dummy-typescript"></div>
                            <div className="card-text">
                                <h3>Bulletproof Type Safety</h3>
                                <p>Engineered with strict TypeScript and rich contextual JSDocs to deliver flawless autocomplete, deep AI comprehension, and absolute confidence in production.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark-section ecosystem-section relative z-10">
                <div className="angled-separator bottom-cut">
                    <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h1440v48h-136L1250 0H190L136 48H0V0z" fill="currentColor"/>
                    </svg>
                </div>

                <div className="content-wrapper ecosystem-grid">
                    <div className="ecosystem-column">
                        <span className="accent-text">Frameworks</span>
                        <h3>Build with SDKs for<br/>modern AI frameworks</h3>
                        <p>Apotheosis keeps developer experience front-and-center by providing helpful SDKs for most modern LLM orchestration tools.</p>
                        <a href="/frameworks" className="explore-link">All frameworks <span>▶</span></a>
                        
                        <div className="logo-grid">
                            <div className="logo-cell"><i className="bx bxl-react"></i></div>
                            <div className="logo-cell"><i className="bx bxl-vuejs"></i></div>
                            <div className="logo-cell"><i className="bx bxl-angular"></i></div>
                            <div className="logo-cell"><i className="bx bxl-nodejs"></i></div>
                            <div className="logo-cell"><i className="bx bxl-python"></i></div>
                            <div className="logo-cell"><i className="bx bxl-go-lang"></i></div>
                        </div>
                    </div>

                    <div className="ecosystem-column">
                        <span className="accent-text">Integrations</span>
                        <h3>Integrate with<br/>the models you love</h3>
                        <p>Leverage Apotheosis MCP as the architectural context engine and integrate with the AI models you already depend on.</p>
                        <a href="/integrations" className="explore-link">All integrations <span>▶</span></a>
                        
                        <div className="logo-grid">
                            <div className="logo-cell"><span>OpenAI</span></div>
                            <div className="logo-cell"><span>Anthropic</span></div>
                            <div className="logo-cell"><span>Cohere</span></div>
                            <div className="logo-cell"><span>Mistral</span></div>
                            <div className="logo-cell"><span>Llama</span></div>
                            <div className="logo-cell"><span>HuggingFace</span></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="angled-separator bottom-cut relative z-10" style={{ transform: 'rotateX(180deg) translateY(1px)' }}>
                <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h1440v48h-136L1250 0H190L136 48H0V0z" fill="currentColor"/>
                </svg>
            </div>

            <section className="constellation-section relative z-10">
                <div className="content-wrapper">
                    <header className="constellation-header">
                        <h2>Inject Enterprise Context into your AI</h2>
                        <p>When available, <span className="highlight">100% of generated code</span> aligns with your design system right out of the box.</p>
                    </header>

                    <div className="constellation-wrapper">
                        <div className="constellation-underglow"></div>
                        
                        <ul className="constellation-list desktop-arc">
                            <li style={{ transform: 'translate(0, -81px)', opacity: 0.6 }}><div className="constellation-icon"><i className="bx bxl-figma"></i></div></li>
                            <li style={{ transform: 'translate(0, -53px)', opacity: 0.85 }}><div className="constellation-icon"><i className="bx bxl-nodejs"></i></div></li>
                            <li style={{ transform: 'translate(0, -32px)', opacity: 0.95 }}><div className="constellation-icon"><i className="bx bxl-angular"></i></div></li>
                            <li style={{ transform: 'translate(0, -16px)' }}><div className="constellation-icon"><i className="bx bxl-vuejs"></i></div></li>
                            <li style={{ transform: 'translate(0, -6px)' }}><div className="constellation-icon"><i className="bx bxl-react"></i></div></li>

                            <li style={{ transform: 'translate(0, 0)' }}>
                                <div className="constellation-pill">
                                    <i className="bx bx-chip"></i>
                                    <span>Buy MCP License Key</span>
                                </div>
                            </li>

                            <li style={{ transform: 'translate(0, -6px)' }}><div className="constellation-icon"><i className="bx bxl-python"></i></div></li>
                            <li style={{ transform: 'translate(0, -16px)' }}><div className="constellation-icon"><i className="bx bxl-go-lang"></i></div></li>
                            <li style={{ transform: 'translate(0, -32px)', opacity: 0.95 }}><div className="constellation-icon"><i className="bx bxl-docker"></i></div></li>
                            <li style={{ transform: 'translate(0, -53px)', opacity: 0.85 }}><div className="constellation-icon"><i className="bx bxl-aws"></i></div></li>
                            <li style={{ transform: 'translate(0, -81px)', opacity: 0.6 }}><div className="constellation-icon"><i className="bx bxl-github"></i></div></li>
                        </ul>

                        <div className="mobile-stack">
                            <div className="constellation-pill">
                                <i className="bx bx-chip"></i>
                                <span>Buy MCP License Key</span>
                            </div>
                            <div className="mobile-icon-grid">
                                <div className="constellation-icon"><i className="bx bxl-react"></i></div>
                                <div className="constellation-icon"><i className="bx bxl-python"></i></div>
                                <div className="constellation-icon"><i className="bx bxl-nodejs"></i></div>
                                <div className="constellation-icon"><i className="bx bxl-docker"></i></div>
                                <div className="constellation-icon"><i className="bx bxl-aws"></i></div>
                                <div className="constellation-icon"><i className="bx bxl-github"></i></div>
                            </div>
                        </div>
                    </div>

                    <ul className="constellation-features">
                        <li>
                            <h4><i className="bx bx-bolt-circle"></i> Generate faster with Context</h4>
                            <p>MCP architecture averages 5.2x faster deployment cycles than standard RAG configurations.</p>
                        </li>
                        <li>
                            <h4><i className="bx bx-plug"></i> Zero-config integration</h4>
                            <p>Apotheosis handles the edge cases of local tooling, so your agents get instant access.</p>
                        </li>
                        <li>
                            <h4><i className="bx bx-customize"></i> Pick your UI controls</h4>
                            <p>Supports a growing range of tactile UI components built for enterprise RAG workflows.</p>
                        </li>
                        <li>
                            <h4><i className="bx bx-link"></i> Automatic component linking</h4>
                            <p>If an agent invokes a multi-variant UI state, the backend data models are automatically linked.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="content-wrapper relative z-10" style={{ marginBottom: '80px' }}>
                <AgenticRibbon darkMode={darkMode} />
            </div>
        </main>
    )
}

export default HomeBase;