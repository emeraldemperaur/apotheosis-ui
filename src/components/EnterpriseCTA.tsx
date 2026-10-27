import React from 'react';

interface EnterpriseCTAProps {
    darkMode: boolean;
    heading: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    primaryAction?: () => void;
    secondaryAction?: () => void;
}

const EnterpriseCTA: React.FC<EnterpriseCTAProps> = ({
    darkMode,
    heading,
    description,
    primaryButtonText,
    secondaryButtonText,
    primaryAction,
    secondaryAction
}) => {
    return (
        <section 
            className="enterprise-cta-section"
            style={{ backgroundColor: darkMode ? '#0a0a0c' : '#000000' }}
        >
            <div className="cta-container">
                <div className="cta-left">
                    <h2 className="cta-heading">{heading}</h2>
                </div>
                <div className="cta-right">
                    <p className="cta-description">{description}</p>
                    <div className="cta-actions">
                        <button className="btn-primary" onClick={primaryAction}>
                            {primaryButtonText}
                        </button>
                        <button className="btn-secondary" onClick={secondaryAction}>
                            {secondaryButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseCTA;