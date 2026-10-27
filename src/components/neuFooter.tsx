import '../styles/neuFooter.scss';
import devLogoWhite from '../assets/me-dev-logo-white.png';
import { getCopyrightYear } from '../utils/chronometer';
import NeuFoot from './neuFoot';
import { NavLink } from 'react-router-dom';

const NeuFooter = () => {
    const devUrl = 'https://www.mekaegwim.ca/';
    
    return(
        <footer className="neu-footer-container">
            <div className="footer-content-wrapper">
                <NeuFoot/>
            </div>
            
            <div className="neu-sole-box">
                <div className='neu-sole'>
                    <span className="copyright-text" style={{ fontFamily: "Smooch Sans", fontSize: "21px"}}>
                        © {getCopyrightYear()} Apotheosis UX
                    </span>
                    <span className="separator">|</span>
                    <span className="build-by">
                        BUILD by&nbsp;
                        <NavLink id="dev-link" to={devUrl} target='_blank' rel="noreferrer">
                            <img src={devLogoWhite} alt="Developer Logo" className="dev-logo" />
                        </NavLink>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default NeuFooter;