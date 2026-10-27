import React from 'react';

interface AgnosticToolkitProps {
    darkMode: boolean;
}

const AgnosticToolkit: React.FC<AgnosticToolkitProps> = ({ darkMode }) => {
    return (
        <section className="agnostic-toolkit-section">
            <div className="toolkit-top">
                <h2 className="display-heading" style={{ color: darkMode ? '#0a0a0cbf' : '#000000' }}>The framework<br/>agnostic AI toolkit</h2>
                <div className="toolkit-icons" style={{ color: darkMode ? '#800020' : '#0a0a0cbf' }}>
                    <i className="bx bxl-react"></i>
                    <i className="bx bxl-vuejs"></i>
                    <i className="bx bxl-angular"></i>
                    <i className="bx bxl-nodejs"></i>
                    <i className="bx bxl-python"></i>
                    <i className="bx bxl-typescript"></i>
                </div>
            </div>

            <div className="toolkit-features">
                <div className="feature-item">
                    <span className="feature-badge" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-toggle-right"></i> Multi-provider support</span>
                    <h3 style={{ color: darkMode ? '#0a0a0cbf' : '#800020' }}>Switch providers</h3>
                    <p style={{ color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)' }}>with one line of code seamlessly.</p>
                </div>
                <div className="feature-item">
                    <span className="feature-badge" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-down-arrow-alt"></i> Streaming that just works</span>
                    <h3 style={{ color: darkMode ? '#0a0a0cbf' : '#800020' }}>Real-time responses</h3>
                    <p style={{ color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)' }}>without complex custom parsing.</p>
                </div>
                <div className="feature-item">
                    <span className="feature-badge" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-shield-check"></i> Built-in fallbacks</span>
                    <h3 style={{ color: darkMode ? '#0a0a0cbf' : '#800020' }}>Reliable production</h3>
                    <p style={{ color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)' }}>behavior and durable state by default.</p>
                </div>
                <div className="feature-item">
                    <span className="feature-badge" style={{ color: darkMode ? '#800020' : 'var(--text-muted)' }}><i className="bx bx-sitemap"></i> AI Gateway compatible</span>
                    <h3 style={{ color: darkMode ? '#0a0a0cbf' : '#800020' }}>Route to any model</h3>
                    <p style={{ color: darkMode ? '#0a0a0cbf' : 'var(--text-muted)' }}>through one unified, secure endpoint.</p>
                </div>
            </div>
        </section>
    );
};

export default AgnosticToolkit;