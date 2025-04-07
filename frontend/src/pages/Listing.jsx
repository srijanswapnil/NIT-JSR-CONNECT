// frontend/src/pages/Listing.jsx
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Flex, Button, Box } from '@radix-ui/themes';
import axios from 'axios';

const Listing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/listings');
        setItems(res.data);
      } catch (err) {
        console.error('Error fetching listings:', err);
      }
    };

    fetchListings();
  }, []);

  return (
    <Box>
      <Heading size="7" mb="4">📦 Items for Exchange / Donation</Heading>
      <Flex wrap="wrap" gap="4">
        {items.length === 0 ? (
          <Text>No items listed yet.</Text>
        ) : (
          items.map(item => (
            <Card key={item._id} style={{ width: 300 }}>
              <Heading size="4">{item.title}</Heading>
              <Text>{item.description}</Text>
              <Text size="2" color="gray">Posted by: {item.postedBy.name}</Text>
              <Button mt="2">Contact</Button>
            </Card>
          ))
        )}
      </Flex>
    </Box>
  );
};

export default Listing;
