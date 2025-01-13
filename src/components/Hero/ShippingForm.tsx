import React, { useState } from 'react';

export function ShippingForm() {
  const [shipmentType, setShipmentType] = useState('land');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  return (
    <div className="bg-white p-8 h-auto lg:h-[30rem] rounded-md shadow-lg md:col-span-1 flex flex-col mt-auto">
      <div className="flex space-x-6 mb-6 gap-4">
        <button
          className={`pb-2 ${shipmentType === 'land' ? ' border-black text-black border-b-[3px]' : ''} font-extrabold text-xl`}
          onClick={() => setShipmentType('land')}
          style={{fontWeight:'extra-bold'}}
        >
          Land
        </button>
        <button
          className={`pb-2 ${shipmentType === 'air' ? ' border-black text-black border-b-[3px]'  : ''} font-extrabold text-xl `}
          onClick={() => setShipmentType('air')}
          style={{fontWeight:'extra-bold'}}
        >
          Air
        </button>
        <button
          className={`pb-2 ${shipmentType === 'ocean' ? ' border-black text-black border-b-[3px]' : ''} font-extrabold text-xl`}
          onClick={() => setShipmentType('ocean')}
          style={{fontWeight:'extra-bold'}}
        >
          Ocean
        </button>
      </div>

      <div className="space-y-1">
        <div>
          <label className="block text-xl font-bold mb:0 lg:mb-4">From</label>
          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:gap-y-0">
            <div className="p-4 sm:mb-0 flex-grow w-full sm:w-auto">
              <select 
              className="w-full p-3 rounded-md bg-white font-light placeholder:text-gray-400 shadow-custom-dark hover:shadow-custom-medium"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              style={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                }}
              >
                <option value="">Select Location</option>
                <option value="usa">USA</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
              </select>
            </div>
            <div className="w-full flex-grow sm:w-auto p-4">
              <input
                type="text"
                placeholder="Provide City and Zipcode"
                className="w-full p-3 rounded-md font-light placeholder:text-gray-400 shadow-custom-dark hover:shadow-custom-medium"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                style={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  }}
              />
            </div>
          </div>        
        </div>

        <div>
         <label className="block text-xl font-bold mb:0 lg:mb-4">To</label>
          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:gap-y-0">
            <div className="mb-0 p-4 flex-grow w-full sm:w-auto ">
              <select
                className="w-full p-3 rounded-md bg-white font-light placeholder:text-gray-400"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                style={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  }}
              >
                <option value="">Select Location</option>
                <option value="usa">USA</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
              </select>
            </div>
            
            <div className="w-full flex-grow p-4 sm:w-auto">
              <input
                type="text"
                placeholder="Provide City and Zipcode"
                className="w-full p-3 rounded-md font-light placeholder:text-gray-400"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                style={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#005F6A] text-white px-5 py-3 rounded-full shadow-md hover:bg-[#005F6A] " style={{fontWeight:'bold'}}>
            Get a spot offer
          </button>
        </div>
      </div>
    </div>
  );
}