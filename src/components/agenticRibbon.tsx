import '../styles/agenticRibbon.scss';
import { NavLink } from 'react-router-dom';
import replitLogo from '../assets/replit-icon.png';
import windsurfLogo from '../assets/windsurf-light-icon.png';
import antigravityLogo from '../assets/antigravity-icon.png';
import cursorLogo from '../assets/cursor-icon.png';
import claudeLogo from '../assets/claude-icon.png';
import spaceXLightLogo from '../assets/grokbot-logo.png';
import spaceXDarkLogo from '../assets/spacex-light-icon.png';


const AgenticRibbon = ({ darkMode }: { darkMode: boolean }) => {
    return(
        <section className='agentic-ribbon-section'>
            <div className="agentic-header">
                <p>
                    Interested in unlocking the potential of Agentic AI?{' '}
                    <NavLink to='agentic-ai' className="learn-more-link">Learn more <span>→</span></NavLink>
                </p>
            </div>
            
            <div className="agentic-container">
                <AgenticCard imgSrc={cursorLogo} agentName='SpaceXSI' productName='Cursor' url='https://cursor.com/home'/>
                <AgenticCard imgSrc={darkMode ? windsurfLogo : windsurfLogo} agentName='Windsurf' productName='Cascade' url='https://www.windsurf.com/cascade'/>
                <AgenticCard imgSrc={antigravityLogo} agentName='Google' productName='Antigravity' url='https://antigravity.google/'/>
                <AgenticCard imgSrc={replitLogo} agentName='Replit' productName='Agent3' url='https://www.replit.com/'/>
                <AgenticCard imgSrc={darkMode ? spaceXLightLogo : spaceXDarkLogo} agentName='SpaceXSI' productName='Grok Build' url='https://x.ai/build'/>
                <AgenticCard imgSrc={claudeLogo} agentName='Anthropic' productName='Claude' url='https://claude.ai/'/>
            </div>
        </section>
    )
}

interface AgenticCardProps {
    imgSrc: string;
    agentName: string;
    productName: string;
    url: string;
}

const AgenticCard = ({ imgSrc, agentName, productName, url }: AgenticCardProps) => {
    return(
        <NavLink to={url} target='_blank' rel="noreferrer" className='agent-card-link'>
            <div className='agent-card'>
                <div className='card-content'>
                    <div className="img-wrapper">
                        <img src={imgSrc} alt={`${agentName} logo`} className="agent-logo" />
                    </div>
                    <div className="text-wrapper">
                        <p className='agent-name'>{agentName}</p>
                        <p className='product-name'>{productName}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default AgenticRibbon;