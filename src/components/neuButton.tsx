import React, { useRef, useState, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/neuButton.scss';

interface NeuButtonProps {
    buttonVersion: number;
    buttonText: string;
    routePath: string;
    style?: React.CSSProperties;
}

const NeuButton = ({ buttonVersion, buttonText, routePath, style }: NeuButtonProps) => {
    const navigator = useNavigate();
    const btnRef = useRef<HTMLButtonElement>(null);
    const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

    if (buttonVersion === 0) {
        return null;
    }

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        
        setGlareStyle({
            background: `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
            opacity: 1
        });
    };

    const handleMouseLeave = () => {
        setGlareStyle({ opacity: 0 });
    };

    return (
        <button 
            ref={btnRef}
            className={`neu-button version-${buttonVersion}`}
            style={style}
            onClick={() => navigator(routePath)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-label={buttonText}
        >
            <div className="btn-glare" style={glareStyle}></div>
            
            <span className="btn-text">{buttonText}</span>
            
            <div className="btn-border"></div>
        </button>
    );
};

export default NeuButton;