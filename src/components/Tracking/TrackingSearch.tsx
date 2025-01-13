import React, { useState } from 'react';
import { X, Menu, BadgeHelp } from 'lucide-react';


const TrackingSearch = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedValue, setSelectedValue] = useState(''); // State for select value
    
    const handleToggle = () => {
        setIsEnabled(!isEnabled);
    };
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
      };

    return (
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="flex justify-between items-center lg:px-8 p-4 bg-white border-b border-gray-200">
          <h2 className="text-xl font-bold">SCHENKER</h2>
          
          
          <nav className="hidden md:flex gap-4">
            <div className=" lg:flex items-center">
                <BadgeHelp className="w-5 h-5" strokeWidth="1.3"/>
                <a href="#" className="text-base font-medium text-black hover:text-teal-600">Help</a>
            </div>
            <a href="#" className="text-base font-medium text-black hover:text-teal-600">Register</a>
            <a href="#" className="text-base font-medium text-black hover:text-teal-600">Login</a>
          </nav>
          <button
            className="md:hidden text-black hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} strokeWidth={0.5} /> : <Menu size={30} strokeWidth={0.5} />}
          </button>
        </header>
  
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="relative md:hidden bg-white border-b border-gray-200 p-4 z-50 h-[100vh] justify-between">
            <div className='space-y-3'>
                <a href="#" className="block text-base font-medium text-black hover:text-teal-600">Register</a>
                <a href="#" className="block text-base font-medium text-black hover:text-teal-600">Login</a>
            </div>
            <div className="absolute bottom-3 border-t pt-4">
              <a href="#" className="block mb-2 text-base font-medium text-black hover:underline">GTC</a>
              <a href="#" className="block mb-2 text-base font-medium text-black hover:underline">Legal</a>
              <a href="#" className="block mb-2 text-base font-medium text-black hover:underline">Privacy</a>
              <a href="#" className="block text-base font-medium text-black hover:underline">Support</a>
              <a href="#" className="block text-base font-medium mt-5 text-black hover:underline">United States of America - English (US)</a>            </div>
          </div>
        )}
  
        {/* Main Content */}
        <div className="flex flex-grow"> {/* Example height */}
            <div className="hidden lg:block w-1/2 bg-gradient-to-b from-green-800 to-green-400"> {/* lg:block, not lg:flex */}
                <div className="h-full"></div> {/* Force height to 100% of parent */}
            </div>
            {/* Right Panel */}
            <div className="flex-1 flex flex-col justify-center p-6 bg-white">
                <div className="mb-6 flex-col space-y-10">
                    <input
                        type="text"
                        id="reference"
                        placeholder="Reference Number*"
                        className="w-[90%] p-4 border bg-gray-100 border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-teal-300"
                    />
                    <div className="">
                        <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={isEnabled}
                                onChange={handleToggle}
                                />
                                <div className="w-11 h-6  bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-600">
                                Looking for a specific reference?
                                </span>
                            </label>
                        </div>
                        {/* Conditionally render the input */}
                        {isEnabled && (
                        <select
                            value={selectedValue}
                            onChange={handleSelectChange}
                            className="w-[55%] mt-6 p-4 border bg-gray-100  border-gray-300 text-gray-400 rounded-none focus:outline-none focus:ring-1 focus:ring-teal-300"
                        >
                            <option value="">Select a reference type</option>
                            <option value="SST Number">SST Number</option>
                            <option value="Consignment No. / Waybill No">Consignment No. / Waybill No.</option>
                            <option value="Shipper's Reference Number">Shipper's Reference Number</option>
                            <option value="Package ID">Package ID</option>
                            <option value="Consignees Reference Number">Consignees Reference Number</option>
                            <option value="House Air Waybill">House Air Waybill</option>
                            <option value="Booking ID">Booking ID</option>
                            <option value="House BL">House BL</option>
                            <option value="Container Number">Container Number</option>
                            <option value="ATOL">ATOL</option>
                            <option value="Movement Reference Number">Movement Reference Number</option>
                            <option value="Sales Order Number">Sales Order Number</option>
                            <option value="Asset ID">Asset ID</option>
                            <option value="Job ID">Job ID</option>
                            {/* Add more options as needed */}
                        </select>
                        )}
                        <button className="mt-6 px-8 font-bold py-4 fixed right-24 bg-teal-600 text-white rounded-md hover:bg-teal-700">
                            Search
                        </button>
                    </div>
                </div>
                <button className="fixed h-28 w-10 -right-1 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-teal-600 hover:text-white text-teal-600 rounded-xs hover:bg-teal-600 flex items-center justify-center">
                    <span className="font-normal -rotate-90">Feedback</span>
                </button>
            </div>
        </div>
        <footer className="border-t flex text-base  font-medium items-center w-full text-black px-5 lg:px-20 py-3">
            <div className="hidden md:flex w-full justify-between items-center"> {/* Key change: w-full and justify-between on the SAME div */}
                <div className="flex gap-2">
                <a href="#" className="hover:underline">GTC</a>
                <span>|</span>
                <a href="#" className="hover:underline">Legal</a>
                <span>|</span>
                <a href="#" className="hover:underline">Privacy</a>
                <span>|</span>
                <a href="#" className="hover:underline">Support</a>
                </div>
                <span className="text-sm text-black">United States of America - English (US)</span>
            </div>
            <div className="flex flex-col md:hidden gap-2 mt-4 text-sm text-black">
                <a href="#" className="hover:underline">GTC</a>
                <a href="#" className="hover:underline">Legal</a>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Support</a>
            </div>
            
        </footer>
      </div>
    );
};

export default TrackingSearch;
