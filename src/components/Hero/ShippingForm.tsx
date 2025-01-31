import React, { useState } from "react";

export function ShippingForm() {
  const [shipmentType, setShipmentType] = useState("land");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  return (
    <div className="bg-white p-4 lg:p-8 h-auto lg:h-[30rem] rounded-sm shadow-custom-dark flex flex-col mt-auto">
      {/* Shipment Type Tabs */}
      <div className="flex gap-10 xs:justify-between mb-6">
        {["land", "air", "ocean"].map((type) => (
          <button
            key={type}
            className={`pb-2 text-xl font-extrabold ${
              shipmentType === type ? "border-black text-black border-b-[3px]" : "text-black"
            }`}
            onClick={() => setShipmentType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <div className="space-y-10">
        {/* From Section */}
        <div>
          <label className="block text-xl font-bold mb-4">From</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <select
              className="w-full p-3 rounded-md bg-white font-light placeholder:text-gray-400 shadow-custom-medium focus:outline-none focus:ring-2 focus:ring-[#005F6A]"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="usa">USA</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
            </select>
            <input
              type="text"
              placeholder="Provide City and Zipcode"
              className="w-full p-3 rounded-md font-light placeholder:text-gray-400 shadow-custom-medium focus:outline-none focus:ring-2 focus:ring-[#005F6A]"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
          </div>
        </div>

        {/* To Section */}
        <div>
          <label className="block text-xl font-bold mb-4">To</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <select
              className="w-full p-3 rounded-md bg-white font-light placeholder:text-gray-400 shadow-custom-medium focus:outline-none focus:ring-2 focus:ring-[#005F6A]"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="usa">USA</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
            </select>
            <input
              type="text"
              placeholder="Provide City and Zipcode"
              className="w-full p-3 rounded-md font-light placeholder:text-gray-400 shadow-custom-medium focus:outline-none focus:ring-2 focus:ring-[#005F6A]"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            className="bg-[#005F6A] text-white px-6 font-bold py-3 rounded-full shadow-md hover:bg-[#004A55] focus:outline-none focus:ring-2 focus:ring-[#005F6A]"
          >
            Get a Spot Offer
          </button>
        </div>
      </div>
    </div>
  );
}
