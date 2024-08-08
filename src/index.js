import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';  // Ensure this is necessary, otherwise combine into index.css
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/frontend"> 
      <App />
    </Router>
  </React.StrictMode>
);
