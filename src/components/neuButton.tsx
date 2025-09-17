import '../styles/neuButton.scss';
import { useNavigate } from 'react-router-dom';

const NeuButton = ({buttonVersion, buttonText, routePath, style} : {buttonVersion : number, buttonText: string, routePath: string, style: object}) => {
    const navigator = useNavigate();

    return(
        <>
        {buttonVersion == 0 ? 
        <>
        </>
        : 
        <>
            <div style={style} className="neu-btn neu-btn__primary" onClick={() => navigator(routePath)}><p>{buttonText}</p></div>
        </>}
        </>
    )
}

export default NeuButton;