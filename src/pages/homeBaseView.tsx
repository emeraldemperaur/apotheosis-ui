import NeuCallToAction from '../components/neuCallToAction';
import SloganRibbon from '../components/sloganRibbon';
import devLogo from '../assets/agentic-icon.png';
import '../styles/main.scss';
import AgenticRibbon from '../components/agenticRibbon';
const HomeBase = () => {
    return(
        <>
        <SloganRibbon title="Elevate the modern user experience with tactile depth" content="Neumorphic component library & model context protocol server optimized for rapid agentic development"/> 
        <NeuCallToAction version={2} imgSrc={devLogo} heading='AI Components' subheading='Build Context-Aware Interfaces' 
        content='Connect language models and backend services directly to the DOM. Purpose-built for Generative AI use cases, these components natively handle real-time streaming, dynamic content generation, and autonomous workflows right out of the box.'
        routePath='ai-components'
        buttonText='Explore AI Components →' buttonVersion={1}/>
        <NeuCallToAction version={1} imgSrc={devLogo} heading='Neucorporeal UI Components' subheading='Command Your Data with Precision' 
        content='Master high-density data without compromising user experience. Built to handle massive throughput and complex state mutations, Apotheosis UX components proffer unparalleled command over enterprise-grade interfaces.'
        routePath='neu-components'
        buttonText='Browse Neucorporeal UI Controls →' buttonVersion={1}/>
        <NeuCallToAction version={2} imgSrc={devLogo} heading='Model Context Protocol (Agentic) Server' subheading='Ultramodern components for AI based applications' 
        content='Supercharge your development workflow. By injecting enterprise-grade architectural context directly into your local LLM tooling, our MCP server ensures flawless, production-ready code generation.'
        routePath='apotheosis-mcp'
        buttonText='Setup MCP Server →' buttonVersion={1}/>
        <NeuCallToAction version={1} imgSrc={devLogo} heading='Theme Friendly, Multi-Variant Design' subheading='Fluid, Context-Aware Neumorphism' 
        content='Deliver stunning visual depth without sacrificing accessibility. Apotheosis features a smart Neumorphic design engine that dynamically adapts to its surroundings—automatically adjusting shadows, lighting, and contrast to perfectly blend with any underlying background environment.'
        routePath='documentation'
        buttonText='Discover' buttonVersion={0}/>
        <NeuCallToAction version={2} imgSrc={devLogo} heading='TypeScript enhanced code quality' subheading='Bulletproof Architecture with Strict TypeScript' 
        content='Engineered with strict TypeScript and rich contextual JSDocs to deliver flawless autocomplete, deep AI comprehension, and absolute confidence in production.'
        routePath='ai-components'
        buttonText='documentation' buttonVersion={0}/>
        <AgenticRibbon />
        <br/>
        <br/>
        
        </>
    )
}

export default HomeBase;