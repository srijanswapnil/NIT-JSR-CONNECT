import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MapPage = () => {
  const [mapInstance, setMapInstance] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [selectedMarkerName, setSelectedMarkerName] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [commentUserName, setCommentUserName] = useState('');

  const isLoggedIn = true;

  const predefinedLocations = [
    {
      name: 'NIT Jamshedpur',
      lat: 22.7766,
      lng: 86.1437,
      description: 'Main Campus',
    },
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

  useEffect(() => {
    const map = L.map('map').setView([22.7766, 86.1437], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    predefinedLocations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng]).addTo(map);
      marker.bindPopup(`<b>${loc.name}</b><br>${loc.description}`);
      marker.on('click', () => {
        setClickedLocation(null);
        setSelectedMarkerName(loc.name);
      });
    });

    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      setClickedLocation({ lat, lng });
      setSelectedMarkerName(null);
    });

    setMapInstance(map);

    return () => map.remove();
  }, []);

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;

    const key = selectedMarkerName
      ? `marker:${selectedMarkerName}`
      : `click:${clickedLocation.lat.toFixed(4)},${clickedLocation.lng.toFixed(4)}`;

    const newEntry = {
      username: commentUserName || 'Anonymous',
      text: newComment,
      timestamp: new Date().toLocaleString(),
      avatar: 'https://via.placeholder.com/40', // Placeholder avatar
    };

    setComments((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), newEntry],
    }));

    setNewComment('');
    setCommentUserName('');
  };

  const renderCommentsSection = () => {
    let title = '';
    let key = '';

    if (selectedMarkerName) {
      title = `Comments for: ${selectedMarkerName}`;
      key = `marker:${selectedMarkerName}`;
    } else if (clickedLocation) {
      title = `Comments at: (${clickedLocation.lat.toFixed(4)}, ${clickedLocation.lng.toFixed(4)})`;
      key = `click:${clickedLocation.lat.toFixed(4)},${clickedLocation.lng.toFixed(4)}`;
    } else return null;

    return (
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold text-purple-600 mb-4">{title}</h3>

        <div className="max-h-64 overflow-y-auto space-y-3 mb-4 pr-2">
          {(comments[key] || []).map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex items-start space-x-3">
              <img src={c.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-purple-600">{c.username}</p>
                  <span className="text-gray-500 text-sm">{c.timestamp}</span>
                </div>
                <p className="text-gray-800 mt-1">{c.text}</p>
                {/* Placeholder for attachment (e.g., PDF icon) */}
                {i % 2 === 0 && (
                  <div className="mt-2 flex items-center text-red-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h7v5h5v11H6z"/>
                    </svg>
                    Customer KYC
                  </div>
                )}
                <button className="text-gray-500 hover:text-gray-700 text-sm mt-1">...</button>
              </div>
            </div>
          ))}
          {(comments[key]?.length || 0) === 0 && (
            <p className="text-gray-500 italic">No comments yet. Be the first!</p>
          )}
        </div>

        {isLoggedIn ? (
          <div className="bg-gray-100 p-2 rounded-lg flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 bg-white text-gray-800 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Publish
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L17 10.828V15m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
              </svg>
            </button>
          </div>
        ) : (
          <p className="text-gray-500 italic">Please log in to comment.</p>
        )}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="m-4 flex justify-center">
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-4 text-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            FUN Campus Map
          </h2>
          <div
            id="map"
            className="rounded-xl border border-gray-300"
            style={{ height: '500px', width: '100%' }}
          ></div>
          {renderCommentsSection()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;