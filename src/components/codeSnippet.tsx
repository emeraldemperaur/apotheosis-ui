import React, { useState } from 'react';
import '../styles/codeSnippet.scss';

export interface CodeSnippetProps {
    code: string;
    darkMode?: boolean;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, darkMode = true }) => {
    const [copied, setCopied] = useState<React.ReactNode>(<><i className="bx bx-copy"></i> Copy</>);
    
    const copySnippet = () => {
        navigator.clipboard.writeText(code);
        setCopied(<><i className="bx bx-check" style={{ color: '#27c93f' }}></i> Copied</>);
        setTimeout(() => {
            setCopied(<><i className="bx bx-copy"></i> Copy</>);
        }, 2000);
    }

    return(
        <div className={`glass-snippet ${darkMode ? 'dark-snippet' : 'light-snippet'}`}>
            <div className='snippet-header'>
                <div className="mac-controls">
                    <span className="dot r"></span>
                    <span className="dot y"></span>
                    <span className="dot g"></span>
                </div>
                <div className='snippet-title'>
                    <i className="bx bx-terminal"></i> Terminal
                </div>
                <button className="snippet-copy-btn" onClick={copySnippet} aria-label="Copy code">
                    {copied}
                </button>
            </div>
            
            <div className='snippet-body'>
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}

export default CodeSnippet;