import React from 'react';
import InstallSection from "../components/installationSection";
import '../styles/main.scss';

interface GettingStartedProps {
    darkMode: boolean;
}

const GettingStarted: React.FC<GettingStartedProps> = ({ darkMode }) => {
    return(
        <main className={`enterprise-layout relative ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="ambient-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="content-wrapper relative z-10" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="accent-text">Deployment</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: darkMode ? '#0a0a0cbf' : '#000000' }}>Getting Started</h2>
                    <p style={{ maxWidth: '999px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
                        Initialize Apotheosis UX within your ecosystem. Choose your preferred deployment method below to integrate our component library.
                    </p>
                </div>
                
                <InstallSection darkMode={darkMode} />
                
                <section className="constellation-section relative z-10" style={{ marginTop: '120px', padding: '0' }}>
                    <div className="constellation-wrapper" style={{ marginBottom: '0', paddingTop: '0' }}>
                        <div className="constellation-underglow" style={{ opacity: 0.4 }}></div>
                        <ul className="constellation-list desktop-arc">
                            <li style={{ transform: 'translate(0, -60px)', opacity: 0.6 }}><div className="constellation-icon"><i className="bx bxl-react"></i></div></li>
                            <li style={{ transform: 'translate(0, -30px)', opacity: 0.85 }}><div className="constellation-icon"><i className="bx bxl-nodejs"></i></div></li>
                            <li style={{ transform: 'translate(0, -10px)', opacity: 0.95 }}><div className="constellation-icon"><i className="bx bx-terminal"></i></div></li>
                            
                            <li style={{ transform: 'translate(0, 0)' }}>
                                <div className="constellation-pill">
                                    <i className="bx bx-server"></i>
                                    
                                </div>
                            </li>
                            
                            <li style={{ transform: 'translate(0, -10px)', opacity: 0.95 }}><div className="constellation-icon"><i className="bx bxl-typescript"></i></div></li>
                            <li style={{ transform: 'translate(0, -30px)', opacity: 0.85 }}><div className="constellation-icon"><i className="bx bxl-python"></i></div></li>
                            <li style={{ transform: 'translate(0, -60px)', opacity: 0.6 }}><div className="constellation-icon"><i className="bx bxl-docker"></i></div></li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default GettingStarted;