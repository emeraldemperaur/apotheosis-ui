import ChromaticEmbed from '../components/ChromaticEmbed';
import '../styles/main.scss';
import '../styles/documentationView.scss';

interface DocumentationProps {
    darkMode: boolean;
}

const Documentation = ({ darkMode }: DocumentationProps) => {
    const storybookBaseUrl = "https://6a6577d6e5e62a5a0aa378c4-ywxuhnmbrr.chromatic.com/";

    return(
        <main className={`enterprise-layout relative ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="ambient-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="content-wrapper docs-page-container relative z-10">
                
                <section className="docs-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px', color: darkMode ? '#800020' : '#000000' }}>
                        Documentation<br/><span className="text-muted" style={{ color: 'var(--text-muted)' }}>& API Reference</span>
                    </h1>
                    <p className="docs-lead-text">
                        Explore the complete Apotheosis component ecosystem. Interact with rendered UI controls, review strict TypeScript interfaces, and validate design system constraints directly within our embedded Storybook playground.
                    </p>
                </section>

                <section className="docs-embed-section">
                    <div className="embed-window">
                        
                        <div className="window-header">
                            <div className="window-controls">
                                <span className="dot r"></span>
                                <span className="dot y"></span>
                                <span className="dot g"></span>
                            </div>
                            <div className="window-title">
                                <i className="bx bx-book-open"></i> apotheosis-storybook-client
                            </div>
                            <div className="window-actions">
                                <a 
                                    href={storybookBaseUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="external-link" 
                                    title="Open Storybook in new tab"
                                >
                                    Open Externally <i className="bx bx-link-external"></i>
                                </a>
                            </div>
                        </div>

                        <div className="embed-content">
                            <ChromaticEmbed src={storybookBaseUrl} darkMode={darkMode} />
                        </div>
                        
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Documentation;