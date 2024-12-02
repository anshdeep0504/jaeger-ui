import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MicroservicesArchitectureView = () => {

  // Initialize Mermaid when the component mounts
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    });

    // Render the diagram once mermaid is initialized
    const mermaidElement = document.querySelector('.mermaid');
    if (mermaidElement) {
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div>
      <h1>Microservices Architecture View</h1>
      
      {/* Add Mermaid.js diagram */}
      <div className="mermaid">
        {`
          sequenceDiagram
            participant A as Service A
            participant B as Service B
            participant C as Service C
            A->>B: Request data
            B->>C: Fetch from DB
            C-->>B: Return data
            B-->>A: Return response
        `}
      </div>

      {/* Add CSS for styling */}
      <style jsx>{`
        h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
        }
        
        .mermaid {
          max-width: 100%;
          margin: 20px 0;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #ddd;
          overflow-x: auto;
        }

        .mermaid svg {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default MicroservicesArchitectureView;
