// frontend/src/pages/Signup.jsx
import React, { useState } from 'react';
import { Button, TextField, Heading, Flex, Box, Text } from '@radix-ui/themes';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.email.endsWith('@nitjsr.ac.in')) {
      setError('Only @nitjsr.ac.in email is allowed');
      return;
    }

    // TODO: Add API call to backend
    console.log('Signing up with:', form);
  };

  return (
    <>
      <Header />
      <Box maxWidth="400px" mx="auto" p="4">
        <Heading mb="4">Sign Up</Heading>
        {error && <Text color="red">{error}</Text>}
        <form onSubmit={handleSignup}>
          <Flex direction="column" gap="3">
            <TextField.Input
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField.Input
              placeholder="Email (use @nitjsr.ac.in)"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField.Input
              placeholder="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button type="submit">Sign Up</Button>
          </Flex>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default Signup;
