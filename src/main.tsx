import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/DB_Schenker_clone">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);