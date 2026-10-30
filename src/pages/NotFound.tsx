import React from 'react';
import { NavLink } from 'react-router-dom';
import FallingSquares from '../components/FallingSquares';
import '../styles/notFound.scss';

interface NotFoundProps {
    darkMode: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ darkMode }) => {
    return (
        <main className={`enterprise-layout not-found-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="ambient-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-canvas-container not-found-canvas">
                <FallingSquares 
                    color={darkMode ? '#800020' : 'rgba(9, 9, 11, 0.15)'} 
                    maxSquares={250} 
                />
            </div>

            <div className="content-wrapper not-found-content relative z-10">
                <div className="glass-error-card">
                    <h1 className="error-code">404</h1>
                    <h2 className="error-title" style={{ color: darkMode ? '#a1a1aa' : '#09090b' }}>
                        Resource Not Found
                    </h2>
                    <p className="error-message">
                        The page you are looking for has been moved or does not exist.
                    </p>
                    <NavLink to="/" className="ux-btn return-btn">
                        Return to Home <span className="arrow">→</span>
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default NotFound;