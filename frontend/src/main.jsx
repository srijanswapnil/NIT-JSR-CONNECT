// frontend/src/main.jsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './index.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);