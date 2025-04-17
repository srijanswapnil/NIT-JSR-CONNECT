import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const location = useLocation();

  // Define routes where Footer should be hidden
  const hideFooterRoutes = ['/login','/signup'];

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <main className="flex-fill mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;