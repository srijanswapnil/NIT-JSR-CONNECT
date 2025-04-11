import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* You can add more routes here */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
