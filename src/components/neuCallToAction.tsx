/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/neuCallToAction.scss';
import NeuButton from './neuButton';

const NeuCallToAction = ({version, heading, subheading, content, imgSrc, routePath, buttonText, buttonVersion}: 
    {version : number, heading: string, subheading: string, content: string, imgSrc: any, 
    routePath: string, buttonText: string, buttonVersion: number}) => {

    return(
        <>
        {version == 1 ? 
        <>
        <div className="cta-container">
            <div className="cta-column text-column">
                <p className='cta-heading'>{heading}</p>
                <p className='cta-subheading'>{subheading}</p>
                <p className='cta-content'>{content}</p>
                <NeuButton buttonVersion={buttonVersion} buttonText={buttonText} routePath={routePath} style={{float: 'left', marginTop: '23px'}}/>
            </div>
            <div className="cta-column img-column">
                <img width={'500px'} height={'250px'} src={imgSrc}/>
            </div>
        </div>
        </> 
        : 
        <>
        <div className="cta-container">
            <div className="cta-column img-column">
                <img width={'500px'} height={'250px'} src={imgSrc}/>
            </div>
            <div className="cta-column text-column">
                <p className='cta-heading'>{heading}</p>
                <p className='cta-subheading'>{subheading}</p>
                <p className='cta-content'>{content}</p>
                <NeuButton buttonVersion={buttonVersion} buttonText={buttonText} routePath={routePath} style={{float: 'left', marginTop: '23px'}}/>
            </div>
        </div>
        </>}
        </>
    )
}

export default NeuCallToAction;