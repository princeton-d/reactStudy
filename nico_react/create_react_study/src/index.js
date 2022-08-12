import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import MorseCode from './morse_code.jsx';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MorseCode />
  </React.StrictMode>
);
