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
import { useState, useEffect } from "react";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ApotheosisSystem from "./pages/apotheosisView";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) return savedTheme === 'dark';
    if (window.matchMedia) return window.matchMedia('(prefers-color-scheme: dark)').matches;
    return true; 
  });

  useEffect(() => {
    localStorage.setItem('app-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <Box
        width="100%"
        px={{ initial: "3", md: "5" }}
        py={{ initial: "4", md: "6" }}
        style={{ boxSizing: "border-box" }}
      >
        <NavigationMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} />  
        <ScrollToTop />
        <div className="ux-main">
          <Routes>
            <Route path='/' element={<HomeBase darkMode={isDarkMode} />}/>
            <Route path='documentation' element={<Documentation darkMode={isDarkMode}/>}/>
            <Route path='ai-components' element={<AIComponents darkMode={isDarkMode}/>}/>
            <Route path='neu-components' element={<NeuComponents darkMode={isDarkMode}/>}/>
            <Route path='neu-design-system' element={<ApotheosisSystem darkMode={isDarkMode}/>}/>
            <Route path='neu-laboratory' element={<NeuLaboratory darkMode={isDarkMode}/>}/>
            <Route path='raison-detre' element={<RaisonDetre/>}/>
            <Route path='getting-started' element={<GettingStarted darkMode={isDarkMode}/>}/>
            <Route path='faqs' element={<FAQs/>}/>
            <Route path='apotheosis-mcp' element={<ApotheosisMCP/>}/>
            <Route path='agentic-ai' element={<AgenticAI/>}/>
            <Route path='pantheon' element={<Pantheon/>}/>
            <Route path="*" element={<NotFound darkMode={isDarkMode} />} />
          </Routes>
        </div>
        <NeuFooter/>
      </Box> 
    </>
  )
}

export default App;