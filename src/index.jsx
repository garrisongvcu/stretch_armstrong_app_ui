import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(    
    <div>
      <h1>Stretch Armstrong</h1>
      <p>This is the main application component.</p>
    </div>
  );

