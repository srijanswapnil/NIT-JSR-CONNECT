import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box } from '@radix-ui/themes';

const Header = () => {
  return (
    <Box
      as="header"
      p="3"
      className="border-b border-gray-300 bg-gray-50 sticky top-0 z-50"
    >
      <Flex justify="between" align="center" className="max-w-7xl mx-auto px-4">
        <Text size="5" weight="bold" className="text-indigo-600">
          NIT JSR Freshers' Hub
        </Text>
        <Flex gap="5" className="text-[16px] font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/listing"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Exchange
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

