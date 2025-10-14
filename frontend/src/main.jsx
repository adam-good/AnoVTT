import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

console.log("Test from Main.jsx");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Test from main.jsx</h1>
  </React.StrictMode>
);

