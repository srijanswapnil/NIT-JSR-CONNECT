// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import MapPage from './pages/MapPage';
import StudentInsights from './pages/StudentInsights';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/map' element={<MapPage/>}/>
        <Route path='/insights' element={<StudentInsights/>}/>
      </Routes>
    </>
  );
}

export default App;