// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the new CSS file
import App from './App.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <App></App>

  </React.StrictMode>
);