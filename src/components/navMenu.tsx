import '../styles/main.scss';
import { NavLink, useLocation } from 'react-router-dom';
import terminalIcon from '../assets/console-icon.png';
import aiChipIcon from '../assets/aichip-icon.png';
import aiChipIconDark from '../assets/ai-chip-icon-dark.png';
import aiIcon from '../assets/cpu-icon.png';
import cubeIcon from '../assets/neu-components-icon.png';
import mediaIcon from '../assets/media-icon.png';
import mediaIconDark from '../assets/media-icon-dark.png';
import controlsIcon from '../assets/touch-control-icon.png';
import controlsIconDark from '../assets/touch-control-icon-dark.png';
import dataVisualIcon from '../assets/data-vizual-icon.png';
import dataVisualIconDark from '../assets/data-visual-icon-dark.png';
import authIcon from '../assets/biometric-auth-icon.png';
import authIconDark from '../assets/biometric-auth-icon-dark.png';
import designIcon from '../assets/paintbrush-icon.png';
import { useEffect, useRef, useState } from 'react';
import TesseractIcon from '../components/TesseractIcon';

interface NavigationMenuProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const NavigationMenu = ({ isDarkMode, toggleTheme }: NavigationMenuProps) => {
    const location = useLocation();
    const [isDocumentation, setIsDocumentation] = useState<[boolean, string]>([false, '']);
    const [isLaboratory, setIsLaboratory] = useState<[boolean, string]>([false, '']);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const documentationRef = useRef<HTMLDivElement | null>(null);
    const laboratoryRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);

    const docsPaths = ['/documentation', '/getting-started', '/ai-components', '/neu-components', '/neu-design-system'];
    const labPaths = ['/neu-laboratory', '/pantheon'];

    const isDocsActive = docsPaths.some(path => location.pathname.includes(path));
    const isLabActive = labPaths.some(path => location.pathname.includes(path));

    const toggleDocumentation = () => {
        if (isLaboratory[0]) setIsLaboratory([false, '']);
        setIsDocumentation([!isDocumentation[0], isDocumentation[1] === 'active' ? '' : 'active']);
    }

    const toggleLaboratory = () => {
        if (isDocumentation[0]) setIsDocumentation([false, '']);
        setIsLaboratory([!isLaboratory[0], isLaboratory[1] === 'active' ? '' : 'active']);
    }

    const closeDropDowns = () => { 
        setIsDocumentation([false, '']); 
        setIsLaboratory([false, '']); 
        setIsMobileMenuOpen(false); 
    }

    const showDropDown = (index: number) => { 
        if(index === 1){ 
            setIsLaboratory([false, '']);
            setIsDocumentation([true, 'active']);
        }
        else if (index === 2){ 
            setIsDocumentation([false, '']);
            setIsLaboratory([true, 'active']);
        }
     }

    const toggleHamburger = () => { 
        setIsMobileMenuOpen(!isMobileMenuOpen); 
    }

    const handleExoClick = (event: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            closeDropDowns();
        }
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    useEffect(() => {
        document.addEventListener("mousedown", handleExoClick);
        document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeDropDowns() }});

        return () => {
            document.removeEventListener("mousedown", handleExoClick);
        }
    });

    return(
        <>        
        <header ref={headerRef} style={{position: 'fixed', zIndex: 4, width: '100%'}} className={isDarkMode ? "nav-glass-dark" : "nav-glass-light"} id="nav-menu" aria-label="navigation bar">
            <div className="ux-container">
                <div className="nav-start">
                <NavLink className="logo" to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <TesseractIcon 
                        width={40} 
                        height={40} 
                        color={isDarkMode ? '#ffffff' : '#09090b'} 
                        speed={1} 
                    />
                    <div className="menu-logo">Apotheosis UX</div> 
                </NavLink>
                <nav className={`ux-menu ${isMobileMenuOpen ? 'show' : ''}`}>
                    <ul className="ux-menu-bar">
                    <li>
                        <NavLink to="documentation">
                            {({ isActive }) => (
                                <button
                                    style={(isActive || isDocsActive) ? { color: '#800020'} : {}}
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
                                </button>
                            )}
                        </NavLink>
                        <div id="dropdown1" className={`ux-dropdown ${isDocumentation[1]}`} ref={documentationRef}>
                        <ul role="menu">
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="getting-started" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={terminalIcon} className="icon" alt=""/>
                                <div>
                                <span className="ux-dropdown-link-title">Getting Started</span>
                                <p>Elevate your UI with Neumorphic components</p>
                                </div>
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="ai-components" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={aiIcon} className="icon" alt=""/>
                                <div>
                                <span className="ux-dropdown-link-title">AI Components</span>
                                <p>Building blocks for AI/RAG user experiences</p>
                                </div>
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={cubeIcon} className="icon" alt=""/>
                                <div>
                                <span className="ux-dropdown-link-title">Neucorporeal Components</span>
                                <p>Skeuomorphic components for elevated user experiences</p>
                                </div>
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-design-system" onClick={() => closeDropDowns()}>
                                <img style={{width: '40px', height: '40px'}} src={designIcon} className="icon" alt=""/>
                                <div>
                                <span className="ux-dropdown-link-title">Apotheosis Design System</span>
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
                                <img style={{width: '34px', height: '34px'}} src={isDarkMode ? aiChipIconDark : aiChipIcon} alt=""/>
                                AI/RAG
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#ui-controls" onClick={() => closeDropDowns()}>
                                <img style={{width: '30px', height: '30px'}} src={isDarkMode ? controlsIconDark : controlsIcon} alt=""/>
                                UI Controls
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#multimedia" onClick={() => closeDropDowns()}>
                                <img style={{width: '30px', height: '30px'}} src={isDarkMode ? mediaIconDark : mediaIcon} alt=""/>
                                Multimedia
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#data" onClick={() => closeDropDowns()}>
                                <img style={{width: '25px', height: '25px'}} src={isDarkMode ? dataVisualIconDark : dataVisualIcon} alt=""/>
                                Data
                            </NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-components#authentication" onClick={() => closeDropDowns()}>
                                <img style={{width: '25px', height: '25px'}} src={isDarkMode ? authIconDark : authIcon} alt=""/>
                                Authentication&nbsp;
                            </NavLink>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to="neu-laboratory">
                            {({ isActive }) => (
                                <button
                                    style={(isActive || isLabActive) ? { color: '#800020'} : {}}
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
                                </button>
                            )}
                        </NavLink>
                        <div id="dropdown2" className={`ux-dropdown ${isLaboratory[1]}`} ref={laboratoryRef}>
                        <ul role="menu">
                            <li>
                            <span className="ux-dropdown-link-title">Apotheosis Design System</span>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-laboratory#desktop-showcase" onClick={() => closeDropDowns()}>Desktop Deism</NavLink>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="neu-laboratory#mobile-showcase" onClick={() => closeDropDowns()}>Mobile Múses</NavLink>
                            </li>
                        </ul>
                        <ul role="menu">
                            <li>
                            <span className="ux-dropdown-link-title">Learn</span>
                            </li>
                            <li role="menuitem">
                            <NavLink className="ux-dropdown-link" to="pantheon" onClick={() => closeDropDowns()}>Pantheon Playground</NavLink>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to="apotheosis-mcp">
                            {({ isActive }) => (
                                <button 
                                    style={isActive ? { color: '#800020'} : {}}
                                    className="ux-nav-link ux-dropdown-btn" 
                                    aria-haspopup="true" 
                                    aria-expanded="false" 
                                    aria-label="apotheosis-mcp" 
                                    onClick={() => closeDropDowns()}
                                >
                                    Apotheosis MCP
                                </button>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="raison-detre">
                            {({ isActive }) => (
                                <button 
                                    style={isActive ? { color: '#800020'} : {}}
                                    className="ux-nav-link ux-dropdown-btn" 
                                    aria-haspopup="true" 
                                    aria-expanded="false" 
                                    aria-label="raison-detre" 
                                    onClick={() => closeDropDowns()}
                                >
                                    Raison D'être
                                </button>
                            )}
                        </NavLink>
                    </li>
                    </ul>
                </nav>
                </div>
                <div className="nav-end">
                <div className="right-container">
                    <button className="ux-nav-link ux-dropdown-btn" aria-haspopup="true" aria-expanded="false" aria-label="github" onClick={() => closeDropDowns()}>
                               <a href="https://www.github.com/emeraldemperaur/apotheosis-ui" target='_blank' rel="noreferrer"><i className="ux-menu-icons fa-brands fa-github"></i></a>
                    </button>
                    <button className="ux-nav-link ux-dropdown-btn" aria-haspopup="true" aria-expanded="false" aria-label="toggle theme" onClick={() => { toggleTheme(); closeDropDowns(); }}>
                    <a style={{ cursor: 'pointer' }}><i className={`ux-menu-icons fa-regular ${isDarkMode ? 'fa-lightbulb' : 'fa-moon'}`}></i></a>
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
