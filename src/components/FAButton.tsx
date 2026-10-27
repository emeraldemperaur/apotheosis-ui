import React, { useRef, useState, useEffect, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import '../styles/faButton.scss';

const FAButton: React.FC<{ onClick: () => void; icon: React.ReactNode; darkMode?: boolean }> = ({ onClick, icon, darkMode = false }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [tiltStyle, setTiltStyle] = useState<string>('');
    const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;

        setTiltStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`);
        setGlareStyle({
            background: `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
            opacity: 1
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle(`rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
        setGlareStyle({ opacity: 0 });
    };

    const content = (
        <div className="fab-wrapper" style={{ zIndex: 9999 }}>
            <button 
                ref={btnRef}
                className={`floating-action-button ${darkMode ? 'dark-mode' : 'light-mode'}`} 
                onClick={onClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform: tiltStyle || undefined }}
                aria-label="Scroll to top"
            >
                <div className="fab-glare" style={glareStyle}></div>
                <span className="fab-icon">{icon}</span>
                <div className="fab-border"></div>
            </button>
        </div>
    );

    if (!mounted) return null;

    return createPortal(content, document.body);
};

export default FAButton;