import React, { useState } from "react";
import CodeSnippet from "./codeSnippet";
import nodeLogo from '../assets/node-icon.png';

interface InstallSectionProps {
    darkMode: boolean;
}

type TabMode = 'npm' | 'mcp-local' | 'mcp-remote';

const InstallSection: React.FC<InstallSectionProps> = ({ darkMode }) => {
    const [activeTab, setActiveTab] = useState<TabMode>('npm');

    const tabStyle = (isActive: boolean) => ({
        padding: '12px 24px', 
        border: 'none', 
        background: isActive ? 'var(--primary-accent)' : 'transparent',
        color: isActive ? '#ffffff' : 'var(--text-muted)',
        fontWeight: isActive ? 600 : 500,
        borderRadius: '99px',
        transition: 'all 0.3s ease', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        cursor: 'pointer'
    });

    return(
        <div style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{ 
                display: 'flex', 
                gap: '8px', 
                background: 'var(--glass-bg)', 
                padding: '8px', 
                borderRadius: '99px', 
                border: 'var(--border)',
                boxShadow: 'var(--shadow)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                marginBottom: '48px',
                flexWrap: 'wrap',
                fontFamily: "Barlow",
                justifyContent: 'center',
                letterSpacing: '0.09em'
            }}>
                <button onClick={() => setActiveTab('npm')} style={tabStyle(activeTab === 'npm')}>
                    <i className="fa-brands fa-npm" style={{ fontSize: '1.2rem' }}></i> NPM Package
                </button>
                <button onClick={() => setActiveTab('mcp-local')} style={tabStyle(activeTab === 'mcp-local')}>
                    <i className="fa-solid fa-laptop-medical" style={{ fontSize: '1.2rem' }}></i> MCP (Local)
                </button>
                <button onClick={() => setActiveTab('mcp-remote')} style={tabStyle(activeTab === 'mcp-remote')}>
                    <i className="bx bx-cloud" style={{ fontSize: '1.2rem' }}></i> MCP (Remote)
                </button>
            </div>

            <div style={{ width: '100%', maxWidth: '1111px', color: 'var(--text-main)' }}>
                
                {activeTab === 'npm' && (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, color: darkMode ? '#0a0a0cbf' : '#000000', textAlign: 'left' }}>Apotheosis UX Component Library</h3>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
                            <p style={{ color: darkMode ? '#0a0a0cbf' : '#000000', fontSize: '1.05rem', margin: 0 }}>Prerequisite: </p>
                            <img title="NodeJS" src={nodeLogo} alt="NodeJS" style={{ height: '20px', objectFit: 'contain' }} />
                            <span style={{ fontSize: '0.75rem', verticalAlign: 'super', color: darkMode ? '#0a0a0cbf' : '#000000', marginTop: '-10px' }}>20.x.x+ recommended</span>
                        </div>
                        
                        <p style={{ marginBottom: '16px', fontSize: '1.1rem', color: darkMode ? '#0a0a0cbf' : '#000000', textAlign: 'left'  }}>Install the core package into your React or Next.js environment:</p>
                        <CodeSnippet darkMode={darkMode} code="npm install @apotheosis/ux-components" />

                        <div style={{ marginTop: '48px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: darkMode ? '#0a0a0cbf' : '#000000', textAlign: 'left'  }}>Global Stylesheet Integration</h4>
                            <p style={{ color: darkMode ? '#0a0a0cbf' : '#000000', marginBottom: '24px', fontSize: '1.05rem', textAlign: 'left'  }}>Import the foundational CSS variables into your root application file (e.g., <code>App.tsx</code> or <code>layout.tsx</code>).</p>
                            <CodeSnippet darkMode={darkMode} code="import '@apotheosis/ux-components/dist/styles.css';" />
                        </div>
                    </div>
                )}

                {activeTab === 'mcp-local' && (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, textAlign: 'left', color: darkMode ? '#0a0a0cbf' : '#000000'  }}>Apotheosis MCP Server (stdio)</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.6, textAlign: 'left'  }}>
                            Configure your LLM desktop client (e.g., Claude Desktop, Cursor) to run the Apotheosis Context Server locally using standard input/output streams.
                        </p>
                        
                        <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--text-main)' }}>Configuration JSON</h4>
                        <CodeSnippet 
                            darkMode={darkMode}
                            code={`{
  "mcpServers": {
    "apotheosis-context": {
      "command": "npx",
      "args": ["-y", "@apotheosis/mcp-server"]
    }
  }
}`} 
                        />
                    </div>
                )}

                {activeTab === 'mcp-remote' && (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, textAlign: 'left', color: darkMode ? '#0a0a0cbf' : '#000000' }}>Apotheosis MCP Server (SSE)</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.6, textAlign: 'left'  }}>
                            Connect your application to a remotely hosted Model Context Protocol server using Server-Sent Events over HTTP for cloud-based Agentic workflows.
                        </p>
                        
                        <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--text-main)'}}>Client Integration</h4>
                        <CodeSnippet 
                            darkMode={darkMode}
                            code={`import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const transport = new SSEClientTransport(
  new URL("https://mcp.apotheosis.dev/sse")
);

const client = new Client({ name: "my-agent", version: "1.0.0" });
await client.connect(transport);`} 
                        />
                    </div>
                )}

            </div>
        </div>
    )
}

export default InstallSection;