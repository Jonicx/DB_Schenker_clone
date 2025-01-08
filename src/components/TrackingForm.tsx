import React, { useState } from 'react';

const TrackingForm = () => {
  const [trackingId, setTrackingId] = useState('');
  return (
    <div className="bg-white p-8 rounded-md h-auto md:h-[30rem] shadow-lg flex flex-col">
      <h2 className="text-xl font-bold">Track your shipment</h2>
      <input
        type="text"
        placeholder="ID Number"
        className="w-full p-3 rounded-md font-light placeholder:text-gray-400"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        style={{
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        }}
      />
      <div className="mt-auto flex justify-end ">
        <button className="bg-[#005F6A] text-white px-5 py-3 mb-2 rounded-full shadow-md hover:bg-[#005F6A] " style={{fontWeight:'bold'}}>
          Track
        </button>
      </div>
    </div>
  );
};

export default TrackingForm;
