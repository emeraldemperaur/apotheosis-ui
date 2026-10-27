import React from 'react';

export interface ChromaticEmbedProps {
  src: string;
  title?: string;
  hideSidebar?: boolean;
  darkMode?: boolean;
}

const ChromaticEmbed = ({ 
  src, 
  title = "Apotheosis UI Storybook Library", 
  hideSidebar = false,
  darkMode = false
}: ChromaticEmbedProps) => {
  
  const embedUrl = React.useMemo(() => {
    const url = new URL(src);
    if (hideSidebar) {
      url.searchParams.set('nav', '0');
    }
    url.searchParams.set('globals', `theme:${darkMode ? 'dark' : 'light'}`);
    return url.toString();
  }, [src, hideSidebar, darkMode]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        style={{
          flexGrow: 1,
          border: 'none',
          display: 'block',
          margin: 0,
          padding: 0,
          background: 'transparent'
        }}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
};

export default ChromaticEmbed;