import React from 'react';
import '../styles/getStartedTemplates.scss';

interface GetStartedTemplatesProps {
    darkMode: boolean;
}

const templates = [
    {
        title: "Agentic Copilot Widget",
        description: "A drop-in conversational interface that streams generative UI components directly into the chat.",
        mock: (
            <div className="mock-chat">
                <div className="mock-bubble user">Analyze Q3 metrics</div>
                <div className="mock-bubble system">
                    <div className="mock-chart">
                        <div className="bar" style={{ height: '40%' }}></div>
                        <div className="bar" style={{ height: '70%' }}></div>
                        <div className="bar" style={{ height: '55%' }}></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Semantic Data Grid",
        description: "Enterprise table template with built-in vector search and dynamic column hydration.",
        mock: (
            <div className="mock-grid">
                <div className="mock-row header"><span>ID</span><span>Vector</span></div>
                <div className="mock-row"><span>0x1A</span><div className="mock-line"></div></div>
                <div className="mock-row"><span>0x2B</span><div className="mock-line"></div></div>
                <div className="mock-row"><span>0x3C</span><div className="mock-line short"></div></div>
            </div>
        )
    },
    {
        title: "Artifact Sandbox",
        description: "An isolated execution environment for securely rendering LLM-generated code.",
        mock: (
            <div className="mock-editor">
                <div className="mock-tabs"><span className="active">App.tsx</span><span>View</span></div>
                <div className="mock-code">
                    <div className="code-line pink">import React...</div>
                    <div className="code-line indent">return (</div>
                    <div className="code-line indent-2 blue">&lt;Dashboard /&gt;</div>
                    <div className="code-line indent">)</div>
                </div>
            </div>
        )
    }
];

const GetStartedTemplates: React.FC<GetStartedTemplatesProps> = ({ darkMode }) => {
    return (
        <section className={`get-started-templates ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="templates-layout">
                
                <div className="templates-left">
                    <h2>Get started</h2>
                    <p>See the Apotheosis Neucorporeal SDK in action with one of our production-ready templates.</p>
                    <button className="btn-all-examples">All examples</button>
                </div>

                <div className="templates-right">
                    {templates.map((template, idx) => (
                        <div className="template-card" key={idx}>
                            <div className="template-visual">
                                {template.mock}
                            </div>
                            <div className="template-content">
                                <h4>{template.title}</h4>
                                <p>{template.description}</p>
                            </div>
                            <div className="template-border"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GetStartedTemplates;