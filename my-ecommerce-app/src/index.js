import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';

const rootContainer = document.getElementById('root');

createRoot(rootContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
