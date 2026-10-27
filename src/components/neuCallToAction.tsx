import { useRef, useState, type MouseEvent } from 'react';
import '../styles/neuCallToAction.scss';
import NeuButton from './neuButton';
import { useScrollReveal } from '../hooks/useScrollReveal'; 

const NeuCallToAction = ({version, heading, subheading, content, imgSrc, routePath, buttonText, buttonVersion, darkMode}: 
    {version : number, heading: string, subheading: string, content: string, imgSrc: any, 
    routePath: string, buttonText: string, buttonVersion: number, darkMode: boolean}) => {

    const isFlipped = version === 2;
    const [revealRef, isVisible] = useScrollReveal(0.15); 
    
    // --- 3D Tilt Logic ---
    const cardRef = useRef<HTMLDivElement>(null);
    const [tiltStyle, setTiltStyle] = useState<string>('');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        setIsHovered(true);
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Find cursor position relative to the card's center
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation degrees (max 10 degrees of tilt)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        setTiltStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Reset to default on leave
        setTiltStyle(`perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    };

    return(
        <div 
            ref={revealRef} 
            className={`cta-enterprise-block ${isFlipped ? 'flipped' : ''} ${isVisible ? 'fade-in-up' : ''}`}
            style={{ opacity: isVisible ? 1 : 0 }} 
        >
            <div className="cta-text-column">
                <div className="subheading-wrapper">
                    <div className="decorative-line"></div>
                    <h3 className='cta-subheading'>{subheading}</h3>
                </div>
                <h2 className='cta-heading' style={{color: darkMode ? '#0a0a0cbf' : '#000000'}}>{heading}</h2>
                <p className='cta-content'>{content}</p>
                <div className="cta-action">
                    <NeuButton buttonVersion={buttonVersion} buttonText={buttonText} routePath={routePath} />
                </div>
            </div>
            
            <div className="cta-visual-column">
                <div 
                    ref={cardRef}
                    className={`tactile-image-container ${isHovered ? 'is-interacting' : ''}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ transform: tiltStyle || undefined }}
                >
                    <div className="tactile-glass-panel">
                        <img className="product-image" src={imgSrc} alt={heading} />
                    </div>
                    {/* The shadow will move slightly as the card tilts for realism */}
                    <div className="tactile-shadow"></div>
                </div>
            </div>
        </div>
    )
}

export default NeuCallToAction;