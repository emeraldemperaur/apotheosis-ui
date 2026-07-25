import '../styles/neuFooter.scss';
import { NavLink } from 'react-router-dom';

const NeuFoot = () => {
    return(
        <>
        <hr/>
        <div>
        <div className="neu-foot-row">
            <div className="neu-foot-column">
                <a className='neu-foot-column-title'>Useful Links</a>
                <ul>
                    <li><NavLink to='getting-started' className='neu-foot-links'>Getting Started</NavLink></li>
                    <li><NavLink to='faqs' className='neu-foot-links'>FAQs</NavLink></li>
                    <li><NavLink to='ai-components' className='neu-foot-links'>AI Components</NavLink></li>
                </ul>
            </div>
            <div className="neu-foot-column">
                <a className='neu-foot-column-title'>Resources</a>
                <ul>
                    <li><NavLink to='neu-laboratory' className='neu-foot-links'>Neu Laboratory</NavLink></li>
                    <li><NavLink to='documentation' className='neu-foot-links'>Documentation</NavLink></li>
                    <li><a href='https://github.com/emeraldemperaur/apotheosis-ui' target='_blank' className='neu-foot-links'>GitHub</a></li>
                </ul>
            </div>
            <div className="neu-foot-column">
                <a className='neu-foot-column-title'>Technologies</a>
                <ul>
                    <li><a href='https://cursor.com/home' target='_blank' className='neu-foot-links'>Cursor</a></li>
                    <li><a href='https://www.windsurf.com' target='_blank' className='neu-foot-links'>Windsurf</a></li>
                    <li><a href='https://www.devin.ai/' target='_blank' className='neu-foot-links'>Cognition</a></li>
                    <li><a href='https://www.replit.com' target='_blank' className='neu-foot-links'>Replit</a></li>

                </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default NeuFoot;