import { useState } from 'react';
import '../styles/codeSnippet.scss';

const CodeSnippet = () => {
    const [isOn, setIsOn] = useState(false);
    const [copied, setCopied] = useState(<><i className="fa-regular fa-copy snippet-copy"></i></>);
    const copySnippet = () => {
        console.log("Copied code snippet...");
        copiedConfirm();
    }
    const copiedConfirm = () => {
        setCopied(<><i className="fa-solid fa-check snippet-copy"></i></>)
        setTimeout(() => {
            setCopied(<><i className="fa-regular fa-copy snippet-copy"></i></>)
        }, 3333)
    }
    return(
        <>
        <div className='snippet-card'>
            <div className='snippet-head'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a className='snippet-mode'><i className="fa-solid fa-terminal snippet-icon"></i> Terminal</a>
                    <div className='toggle-box'>
                    <label className="label">
                        <a className='snippet-label'><i className="fa-brands fa-js"></i> ESM&nbsp;&nbsp;</a> 
                    <div className="toggle">
                    <input id="stackedMode" className="toggle-state" type="checkbox" name="check" defaultChecked={isOn} onClick={()=> setIsOn(!isOn)} />
                    <div className="indicator"></div>
                    </div>
                    <div className="label-text"><a className='snippet-label'>UMD <i className="fa-brands fa-js"></i></a></div>
                    </label>
                    </div>
                    <a style={{cursor: 'pointer'}} onClick={() => copySnippet()}>{copied}</a>
                </div>
            </div>
            <hr style={{color: '#666', marginTop: '13px'}}/>
            <div className=''>
                {!isOn ? 
                <>
                ESM
                </> 
                : 
                <>
                UMD
                </>}
                <br style={{marginTop: '169px'}}/>
            </div>
        </div>
        </>
    )

}

export default CodeSnippet;