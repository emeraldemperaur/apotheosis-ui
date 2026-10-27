import '../styles/neuFooter.scss';
import { NavLink } from 'react-router-dom';

const NeuFoot = () => {
    return(
        <div className="neu-foot-grid">
            <div className="neu-foot-column">
                <span className='neu-foot-column-title'>Useful Links</span>
                <ul>
                    <li><NavLink to='getting-started' className='neu-foot-links'>Getting Started</NavLink></li>
                    <li><NavLink to='faqs' className='neu-foot-links'>FAQs</NavLink></li>
                    <li><NavLink to='ai-components' className='neu-foot-links'>AI Components</NavLink></li>
                </ul>
            </div>
            <div className="neu-foot-column">
                <span className='neu-foot-column-title'>Resources</span>
                <ul>
                    <li><NavLink to='neu-laboratory' className='neu-foot-links'>Neu Laboratory</NavLink></li>
                    <li><NavLink to='documentation' className='neu-foot-links'>Documentation</NavLink></li>
                    <li><a href='https://github.com/emeraldemperaur/apotheosis-ui' target='_blank' rel="noreferrer" className='neu-foot-links'>GitHub</a></li>
                </ul>
            </div>
            <div className="neu-foot-column">
                <span className='neu-foot-column-title'>Technologies</span>
                <ul>
                    <li><a href='https://cursor.com/home' target='_blank' rel="noreferrer" className='neu-foot-links'>Cursor</a></li>
                    <li><a href='https://antigravity.google/' target='_blank' rel="noreferrer" className='neu-foot-links'>Antigravity</a></li>
                    <li><a href='https://x.ai/build' target='_blank' rel="noreferrer" className='neu-foot-links'>Grok Build</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NeuFoot;