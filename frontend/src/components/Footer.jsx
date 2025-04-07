// frontend/src/components/Footer.jsx
import React from 'react';
import { Box, Text } from '@radix-ui/themes';

const Footer = () => {
  return (
    <Box as="footer" p="3" mt="5" style={{ borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <Text size="2" color="gray">&copy; {new Date().getFullYear()} NIT JSR Freshers' Hub. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
