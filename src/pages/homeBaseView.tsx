import NeuCallToAction from '../components/neuCallToAction';
import SloganRibbon from '../components/sloganRibbon';
import devLogo from '../assets/agentic-icon.png';
import '../styles/main.scss';
import AgenticRibbon from '../components/agenticRibbon';
const HomeBase = () => {
    return(
        <>
        <SloganRibbon title="Elevate the modern user experience" content="A neumorphic design system & component library optimized for rapid development, extensibility and accessibilty"/> 
        <NeuCallToAction version={2} imgSrc={devLogo} heading='AI Components' subheading='Ultramodern components for AI based applications' 
        content='A collection of stunning components made with attention to the smallest details. Forms, cards, buttons, and hundreds of others'
        routePath='ai-components'
        buttonText='Discover' buttonVersion={1}/>
        <NeuCallToAction version={1} imgSrc={devLogo} heading='Neucorporeal Components' subheading='Ultramodern components for AI based applications' 
        content='A collection of stunning components made with attention to the smallest details. Forms, cards, buttons, and hundreds of others'
        routePath='neu-components'
        buttonText='Discover' buttonVersion={1}/>
        <NeuCallToAction version={2} imgSrc={devLogo} heading='Model Context Protocol (Agentic) Components' subheading='Ultramodern components for AI based applications' 
        content='A collection of stunning components made with attention to the smallest details. Forms, cards, buttons, and hundreds of others'
        routePath='agentic-ai'
        buttonText='Discover' buttonVersion={1}/>
        <NeuCallToAction version={1} imgSrc={devLogo} heading='Theme friendly' subheading='Light:Dark modes and bespoke themes' 
        content='A collection of stunning components made with attention to the smallest details. Forms, cards, buttons, and hundreds of others'
        routePath='documentation'
        buttonText='Discover' buttonVersion={0}/>
        <NeuCallToAction version={2} imgSrc={devLogo} heading='TypeScript enhanced code quality' subheading='Ultramodern components for AI based applications' 
        content='A collection of stunning components made with attention to the smallest details. Forms, cards, buttons, and hundreds of others'
        routePath='ai-components'
        buttonText='documentation' buttonVersion={0}/>
        <AgenticRibbon />
        <br/>
        <br/>
        
        </>
    )
}

export default HomeBase;