import { useState } from "react";
import CodeSnippet from "./codeSnippet";

const InstallSection = () => {
     const [isNPM, setIsNPM] = useState<boolean>(true);
    const toggleView = (tab: number) => {
        if(tab == 1) setIsNPM( true );
        else if (tab == 2) setIsNPM( false );
    }

    return(
        <>
        <div>
            <div style={{display: 'flex'}}>
                <div style={{marginLeft: '23px'}} className={`neu-btn neu-btn__primary ${isNPM ? 'neu-btn-active' : ''}`} onClick={() => toggleView(1)}><p style={{fontWeight: 600, letterSpacing: '0.09em'}}><i className="fa-brands fa-npm"></i> NPM</p></div>
                <div style={{width: '269px', marginLeft: '23px'}} className={`neu-btn neu-btn__primary ${!isNPM ? 'neu-btn-active' : ''}`} onClick={() => toggleView(2)}><p style={{fontWeight: 600, letterSpacing: '0.09em'}}><i className="fa-solid fa-keyboard"></i> PANTHEON CLI</p></div>
            </div>
            <div>
                {isNPM ? 
                <>
                <p className="install-heading">NPM</p>
                <p className="install-subheading">Prerequisites</p>
                <p className="install-text"><i className="fa-brands fa-node-js"></i> NodeJS (20.x.x+ recommended)</p>
                <p className="install-subheading">Installation</p>
                <p className="install-text">To install Apotheosis UX in your project, enter the following command in terminal:</p>
                <CodeSnippet/>

                <p className="install-subheading">Importing TypeScript modules</p>
                <p className="install-text">Import the entire library or just respective modules:</p>

                <p className="install-subheading">Importing CSS file</p>
                <p className="install-text">Import Apotheosis UX stylesheet using the following syntax:</p>

                <p className="install-subheading">Add Font Awesome and Custom Typography font</p>
                <p className="install-text">Embed the following code into the <em>head</em> tag in your HTML file:</p>
                </> 
                : 
                <>
                    <p className="install-heading">PANTHEON CLI</p>
                    <p className="install-subheading">In Development</p>
                    <p className="install-text">PANTHEON CLI is a convenient command-line interface for Apotheosis UX. It enables options such as:</p>
                    <ul>
                        <li className="install-text"><i className="fa-solid fa-circle-check"></i> Install Apotheosis UX package using single command</li>
                        <li className="install-text"><i className="fa-solid fa-circle-check"></i> Quick updates via CLI command</li>
                        <li className="install-text"><i className="fa-solid fa-circle-check"></i> Frontend & Backend Agentic project starter templates (N8N Wrapper & more)&nbsp;
                        <i className="fa-brands fa-react"></i> <i className="fa-brands fa-js"></i> <i className="fa-brands fa-java"></i> <i className="fa-brands fa-python"></i></li>
                        <li className="install-text"><i className="fa-solid fa-circle-check"></i> Monorepository access</li>
                    </ul>
                </>}
            </div>
          </div>
          <div style={{ height: '300px' }}>
            
          </div>
        </>
    )
}

export default InstallSection;