import '../styles/neuFooter.scss';
import devLogoWhite from '../assets/me-dev-logo-white.png';
import { getCopyrightYear } from '../utils/chronometer';
import NeuFoot from './neuFoot';
import { NavLink } from 'react-router-dom';


const NeuFooter = () => {
    const devUrl = 'https://www.mekaegwim.ca/';
   
    return(
        <>
        
            <footer><NeuFoot/></footer>
            <div className="neu-sole-box">
                <div className='neu-sole'>
                    <span>© {getCopyrightYear()} </span>&nbsp; | &nbsp;<NavLink id="dev-link" to={devUrl} target='_blank'>BUILD by&nbsp;</NavLink><span><NavLink to={devUrl} target='_blank'><img src={devLogoWhite} height='38px' width='38px'/></NavLink></span>
                </div>
            </div>
        
        </>
    )
}



export default NeuFooter;