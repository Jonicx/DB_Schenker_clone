import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const TrackingForm = () => {
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!trackingId.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    setError('');
    navigate(`/tracking/${trackingId}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="bg-white p-8 rounded-md h-auto lg:h-[30rem] shadow-lg flex flex-col">
      <h2 className="text-xl font-bold">Track your shipment</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="ID Number"
          className={`w-full p-3 rounded-md font-light placeholder:text-gray-400 ${
            error ? 'border-red-500 focus:border-red-500' : ''
          }`}
          value={trackingId}
          onChange={(e) => {
            setTrackingId(e.target.value);
            if (error) setError('');
          }}
          onKeyPress={handleKeyPress}
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          }}
        />
        {error && (
          <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </div>
        )}
      </div>
      <div className="mt-auto flex justify-end">
        <button 
          className="bg-[#005F6A] text-white px-5 py-3 mb-2 rounded-full shadow-md hover:bg-[#004956] transition-colors" 
          style={{fontWeight:'bold'}} 
          onClick={handleSearch}
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default TrackingForm;