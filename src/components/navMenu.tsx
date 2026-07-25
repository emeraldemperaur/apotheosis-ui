import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import terminalIcon from '../assets/console-icon.png';
import aiChipIcon from '../assets/aichip-icon.png';
import agenticIcon from '../assets/agentic-icon.png';
import cubeIcon from '../assets/neu-components-icon.png';
import mediaIcon from '../assets/media-icon.png';
import controlsIcon from '../assets/touch-control-icon.png';
import mcpIcon from '../assets/mcp-icon.png';
import web3Icon from '../assets/ethereum-icon.png';
import { useEffect, useRef, useState } from 'react';





const NavigationMenu = () => {
    const [isDocumentation, setIsDocumentation] = useState<[boolean, string]>([false, '']);
    const [isLaboratory, setIsLaboratory] = useState<[boolean, string]>([false, '']);
    const documentationRef = useRef<HTMLDivElement | null>(null);
    const laboratoryRef = useRef<HTMLDivElement | null>(null);

    const toggleDocumentation = () => {
        if (isLaboratory[0]) setIsLaboratory([false, '']);
        setIsDocumentation([isDocumentation[0] ? false : true, isDocumentation[1] == 'active' ? '' : 'active']);
    }

    const toggleLaboratory = () => {
        if (isDocumentation[0]) setIsDocumentation([false, '']);
        setIsLaboratory([isLaboratory[0] ? false : true, isLaboratory[1] == 'active' ? '' : 'active']);
    }

    const closeDropDowns = () => { setIsDocumentation([false, '']); setIsLaboratory([false, '']); }

    const showDropDown = (index: number) => { 
        if(index == 1){ 
            setIsLaboratory([false, '']);
            setIsDocumentation([true, 'active']);
        }
        else if (index == 2){ 
            setIsDocumentation([false, '']);
            setIsLaboratory([true, 'active']);
        }
     }

    const toggleHamburger = () => { document.querySelector(".menu")?.classList.toggle("show"); }

    const handleExoClick = (event: MouseEvent) => {
        if (documentationRef.current && !documentationRef.current.contains(event.target as Node)) {
            closeDropDowns();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleExoClick);
        document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeDropDowns() }});

        return () => {
            document.removeEventListener("mousedown", handleExoClick);
        }
    });

    return(
        <>        
        
        <header style={{position: 'fixed', zIndex: 4, width: '100%', background: '#ffffff'}} id="nav-menu" aria-label="navigation bar">
            <div className="ux-container">
                <div className="nav-start">
                <NavLink className="logo" to="/">
                    <div className="menu-logo">Apotheosis UX</div> 
                </NavLink>
                <nav className="ux-menu">
                    <ul className="ux-menu-bar">
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: '#660033'} : {}} to="documentation">
                        <button
                        onMouseOver={() => showDropDown(1)}
                        onClick={() => toggleDocumentation()}
                        className="ux-nav-link ux-dropdown-btn"
                        data-dropdown="dropdown1"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="browse"
                        id='dropdown-menu-one'
                        >
                         Documentation
                        <i className="bx bx-chevron-down" aria-hidden="true"></i>
                        </button></NavLink>
                        <div id="dropdown1" className={`ux-dropdown ${isDocumentation[1]}`} ref={documentationRef}>
                        <ul role="menu">
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="getting-started" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={terminalIcon} className="icon" />
                                <div>
                                <span className="ux-dropdown-link-title">Getting Started</span>
                                <p>Elevate your UI with Neumorphic components</p>
                                </div>
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="ai-components" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={aiChipIcon} className="icon" />
                                <div>
                                <span className="ux-dropdown-link-title">AI Components</span>
                                <p>Building blocks for AI/RAG user experiences</p>
                                </div>
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={cubeIcon} className="icon" />
                                <div>
                                <span className="ux-dropdown-link-title">Neucorporeal Components</span>
                                <p>Skeuomorphic components for elevated user experiences</p>
                                </div>
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="agentic-ai" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={agenticIcon} className="icon" />
                                <div>
                                <span className="ux-dropdown-link-title">Model Context Protocol & AI Agents</span>
                                <p>Reconnoitre and develop interfaces with Agentic AIs</p>
                                </div>
                            </NavLink>
                            </li>
                        </ul>

                        <ul role="menu">
                            <li className="ux-dropdown-title">
                            <span className="ux-dropdown-link-title">Browse by Category</span>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="ai-components" onClick={() => closeDropDowns()}>
                                <img style={{width: '34px', height: '34px'}} src={aiChipIcon} />
                                AI/RAG
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#ui-controls" onClick={() => closeDropDowns()}>
                                <img style={{width: '30px', height: '30px'}} src={controlsIcon} />
                                UI Controls
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#multimedia" onClick={() => closeDropDowns()}>
                                <img style={{width: '30px', height: '30px'}} src={mediaIcon} />
                                Multimedia
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="agentic-ai" onClick={() => closeDropDowns()}>
                                <img style={{width: '25px', height: '25px'}} src={mcpIcon} />
                                Model Context Protocol
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#web3" onClick={() => closeDropDowns()}>
                                <img style={{width: '25px', height: '25px'}} src={web3Icon} />
                                Blockchain (Web3)
                            </NavLink>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: '#660033'} : {}} to="neu-laboratory">
                        <button
                        onMouseOver={() => showDropDown(2)}
                        onClick={() => toggleLaboratory()}
                        className="ux-nav-link ux-dropdown-btn"
                        data-dropdown="dropdown2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="neu-laboratory"
                        >
                        Neu Laboratory
                        <i className="bx bx-chevron-down" aria-hidden="true"></i>
                        </button></NavLink>
                        <div id="dropdown2" className={`ux-dropdown ${isLaboratory[1]}`} ref={laboratoryRef}>
                        <ul role="menu">
                            <li>
                            <span className="ux-dropdown-link-title">Apotheosis Design System</span>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-laboratory#desktop" onClick={() => closeDropDowns()}>Desktop Deism</NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-laboratory#mobile" onClick={() => closeDropDowns()}>Mobile Múses</NavLink>
                            </li>
                        </ul>
                        <ul role="menu">
                            <li>
                            <span className="ux-dropdown-link-title">Learn</span>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="pantheon" onClick={() => closeDropDowns()}>Pantheon Playground</NavLink>
                            </li>
                            <li role="menuitem">
                            <a className="ux-dropdown-link" href="https://www.neumorphism.io" target='_blank'>Neumorphism.io</a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: '#660033'} : {}} to="apotheosis-mcp">
                         <button className="ux-nav-link ux-dropdown-btn" aria-haspopup="true" aria-expanded="false" aria-label="apotheosis-mcp">
                               Apotheosis MCP
                        </button></NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: '#660033'} : {}} to="raison-detre">
                         <button className="ux-nav-link ux-dropdown-btn" aria-haspopup="true" aria-expanded="false" aria-label="raison-detre">
                               Raison D'être
                        </button></NavLink>
                    </li>
                    <li>
                        
                    </li>
                    </ul>
                </nav>
                </div>
                <div className="nav-end">
                <div className="right-container">
                    <button className="ux-nav-link ux-dropdown-btn" aria-haspopup="true" aria-expanded="false" aria-label="github">
                               <a href="https://www.github.com/emeraldemperaur/apotheosis-ui" target='_blank'><i className="ux-menu-icons fa-brands fa-github"></i></a>
                    </button>
                    <button className="ux-nav-link ux-dropdown-btn" aria-haspopup="true" aria-expanded="false" aria-label="github">
                    <a><i className="ux-menu-icons fa-regular fa-moon"></i></a>
                    </button>
                </div>

                <button
                    id="hamburger"
                    aria-label="hamburger"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => toggleHamburger()}
                >
                    <i className="bx bx-menu" aria-hidden="true"></i>
                </button>
                </div>
            </div>
        </header>
        </>
    )
}

export default NavigationMenu;