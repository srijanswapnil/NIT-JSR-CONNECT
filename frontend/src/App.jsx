// frontend/src/App.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Flex, Box, Text, Button } from '@radix-ui/themes';

const App = () => {
  return (
    <Container size="3">
      <Flex justify="between" align="center" p="3" style={{ borderBottom: '1px solid #eee' }}>
        <Text size="5" weight="bold">NIT JSR</Text>
        <Flex gap="3">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </Flex>
      </Flex>

      <Box pt="4">
        <Outlet />
      </Box>
    </Container>
  );
};

export default App;