/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/agenticRibbon.scss';
import { NavLink } from 'react-router-dom';
import replitLogo from '../assets/replit-logo.png';
import windsurfLogo from '../assets/windsurf-logo.png';
import cognitionAILogo from '../assets/cognitionai-logo.png';
import spaceXAILogo from '../assets/spacexai-logo-black.png';



const AgenticRibbon = () => {
    return(
    <>
        <div className='agentic-card'>
            <p style={{textDecoration: 'none !important'}}>Interested in unlocking the potential of Agentic AI? <NavLink to='agentic-ai' style={{textDecoration: 'unset !important'}}>Learn more</NavLink></p>
            <div className="agentic-container">
                <div className="agentic-item">
                    <AgenticCard imgSrc={spaceXAILogo} agentName='SpaceXAI' productName='Cursor' url='https://cursor.com/home'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={windsurfLogo} agentName='Windsurf' productName='Cascade' url='https://www.windsurf.com/cascade'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={cognitionAILogo} agentName='Cognition' productName='Devin' url='https://www.devin.ai/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={replitLogo} agentName='Replit' productName='Agent3' url='https://www.replit.com/'/>
                </div>
            </div>
        </div>
    </>
    )

}

const AgenticCard = ({ imgSrc, agentName, productName, url } : {imgSrc: any, agentName: string, productName: string, url: string}) => {
    return(
    <>
        <NavLink to={url} target='_blank'>
        <div className='agent-card'>
            <div className='box'>
                <img style={{height: '100px', width: '100px'}} src={imgSrc}/>
                <p className='agent-name'>{agentName}</p>
                <p className='product-name'>{productName}</p>
            </div>
        </div>
        </NavLink>
    </>
    )
}

export default AgenticRibbon;