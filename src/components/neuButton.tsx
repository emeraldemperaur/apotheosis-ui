import '../styles/neuButton.scss';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface NeuButtonProps {
    buttonVersion: number;
    buttonText: string;
    routePath: string;
    style?: React.CSSProperties;
}

const NeuButton = ({ buttonVersion, buttonText, routePath, style }: NeuButtonProps) => {
    const navigator = useNavigate();

    if (buttonVersion === 0) {
        return null;
    }

    return (
        <div 
            style={style} 
            className="neu-btn neu-btn__primary" 
            onClick={() => navigator(routePath)}
            role="button" 
            tabIndex={0}
        >
            <p>{buttonText}</p>
        </div>
    );
};

export default NeuButton;