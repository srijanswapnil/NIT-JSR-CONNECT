import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
