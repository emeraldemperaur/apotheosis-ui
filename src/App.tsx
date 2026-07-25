import "@radix-ui/themes/styles.css";
import './App.css';
import { Box } from "@radix-ui/themes";
import { Route, Routes } from "react-router-dom";
import HomeBase from './pages/homeBaseView';
import Documentation from './pages/documentationView';
import NeuLaboratory from './pages/neuLaboratoryView';
import RaisonDetre from './pages/raisonDetreView';
import GettingStarted from './pages/installationView';
import FAQs from './pages/faqsView';
import AIComponents from './pages/aiComponentView';
import NeuComponents from './pages/neuComponentsView';
import AgenticAI from './pages/agenticAIView';
import Pantheon from './pages/pantheonView';
import NavigationMenu from "./components/navMenu";
import NeuFooter from "./components/neuFooter";
import ApotheosisMCP from "./pages/mcpServerView";

function App() {

  return (
    <>
      <Box
    width="100%"
    px={{ initial: "3", md: "5" }}
    py={{ initial: "4", md: "6" }}
    style={{ boxSizing: "border-box" }}
    >
    <NavigationMenu/>  
    <div className="ux-main">
     <Routes>
        <Route path='/' element={<HomeBase/>}/>
        <Route path='documentation' element={<Documentation/>}/>
        <Route path='neu-laboratory' element={<NeuLaboratory/>}/>
        <Route path='raison-detre' element={<RaisonDetre/>}/>
        <Route path='getting-started' element={<GettingStarted/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='ai-components' element={<AIComponents/>}/>
        <Route path='neu-components' element={<NeuComponents/>}/>
        <Route path='apotheosis-mcp' element={<ApotheosisMCP/>}/>
        <Route path='agentic-ai' element={<AgenticAI/>}/>
        <Route path='pantheon' element={<Pantheon/>}/>
      </Routes>
      </div>
      <NeuFooter/>
    </Box> 
    </>
  )
}

export default App
