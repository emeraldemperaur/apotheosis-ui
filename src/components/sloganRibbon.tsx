import '../styles/sloganRibbon.scss';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SloganRibbon = ({badge, title, content, darkMode}: {badge?: string, title: string, content: React.ReactNode, darkMode?: boolean}) => {
    const [revealRef, isVisible] = useScrollReveal(0.1);

    return(
        <section className='slogan-hero' ref={revealRef}>
            <div className='hero-content'>
                {badge && (
                    <div className={`hero-badge ${isVisible ? 'fade-in-up' : ''}`} 
                         style={{ animationDelay: '0.1s', opacity: isVisible ? 1 : 0 }}>
                        <span className="badge-glow"></span>
                        <span className="badge-text">{badge}</span>
                    </div>
                )}
                <h1 className={`slogan-title ${isVisible ? 'fade-in-up' : ''}`} 
                    style={{ animationDelay: '0.2s', opacity: isVisible ? 1 : 0 }}>
                    {title}
                </h1>
                <p className={`slogan-subtitle ${isVisible ? 'fade-in-up' : ''}`} 
                   style={{ animationDelay: '0.3s', opacity: isVisible ? 1 : 0, color: darkMode ? '#800020' : '#800020', fontFamily: "Barlow", fontWeight: darkMode ? 300 : 300, letterSpacing: '0.01em' }}>
                    {content}
                </p>
            </div>
        </section>
    )
}

export default SloganRibbon;