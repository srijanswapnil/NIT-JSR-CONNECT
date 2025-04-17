import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import React from 'react';

const MapPage = () => {
  useEffect(() => {
    // Set map to NIT Jamshedpur
    const map = L.map('map').setView([22.7766, 86.1437], 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker for NIT Jamshedpur main gate (or central point)
    L.marker([22.7766, 86.1437])
      .addTo(map)
      .bindPopup('<b>NIT Jamshedpur</b><br>Main Campus');

    // Add more shops nearby (example)
    const shops = [
      {
        name: 'Stationery Shop',
        lat: 22.7770,
        lng: 86.1442,
        description: 'Inside campus gate',
      },
      {
        name: 'Chai Point',
        lat: 22.7754,
        lng: 86.1430,
        description: 'Best chai spot near LH',
      },
    ];

    shops.forEach((shop) => {
      L.marker([shop.lat, shop.lng])
        .addTo(map)
        .bindPopup(`<b>${shop.name}</b><br>${shop.description}`);
    });
  }, []);

  return (
    <>
    <Header />
    
    <div className="m-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">FUN Campus Map</h2>
        <div
          id="map"
          className="rounded-xl border border-gray-300"
          style={{ height: '500px', width: '100%' }}
        ></div>
      </div>
    </div>
    
    <Footer />
  </>
  
  );
};

export default MapPage;
