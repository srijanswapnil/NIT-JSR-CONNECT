// frontend/src/pages/Signup.jsx
import React, { useState } from 'react';
import axios from '../axios'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await axios.post('/api/user', formData); // adjust URL if needed
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };
  

  return (
    <>
      <Header />
      <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Signup</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" className="form-control mb-2" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" className="form-control mb-2" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" className="form-control mb-3" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
      <Footer />
    </>
  );
};

export default Signup;
