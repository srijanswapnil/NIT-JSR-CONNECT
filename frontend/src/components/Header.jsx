// frontend/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box } from '@radix-ui/themes';

const Header = () => {
  return (
    <Box as="header" p="3" style={{ borderBottom: '1px solid #ccc' }}>
      <Flex justify="between" align="center">
        <Text size="5" weight="bold">
          NIT JSR Freshers' Hub
        </Text>
        <Flex gap="4">
          <Link to="/">Home</Link>
          <Link to="/listing">Exchange</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
