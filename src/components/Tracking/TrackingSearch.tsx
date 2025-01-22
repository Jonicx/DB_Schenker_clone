import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Menu, BadgeHelp, Globe } from 'lucide-react';
import { shipments } from '../../data/shipments';
import dbSchenkerSearchBg from "../../Assets/DbSchenkerSearchBg.jpg"

const TrackingSearch = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [error, setError] = useState('');
    
    const handleToggle = () => {
        setIsEnabled(!isEnabled);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!referenceNumber.trim()) {
            setError('Please enter a reference number');
            return;
        }

        // Check if the shipment exists
        if (shipments[referenceNumber]) {
            navigate(`/tracking/Results/${referenceNumber}`);
        } else {
            setError('No shipment found with this reference number');
        }
    };

    return (
      <div className="flex flex-col h-screen gap-0">
        {/* Header */}
        <header className="flex z-10 justify-between items-center lg:px-8 p-4 bg-white border-gray-200" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-xl font-bold">SCHENKER</h2>
          
          <nav className="hidden md:flex gap-3">
            <button className="hover:text-[#005f6a] hover:underline flex items-center space-x-2">
              <Globe className="w-6 h-6" strokeWidth="1.5" />
            </button>
            <div className="hover:text-[#005f6a] gap-0 flex items-center">
                <BadgeHelp className="w-5 h-5" strokeWidth="1.3"/>
                <a href="#" className="text-base font-medium text-black hover:text-[#005f6a]">Help</a>
            </div>
            <a href="#" className="text-base font-medium text-black hover:text-[#005f6a]">Register</a>
            <a href="#" className="text-base font-medium text-black hover:text-[#005f6a]">Login</a>
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
            <div className="fixed inset-0 md:hidden bg-white border-gray-200 p-4 z-50 flex flex-col justify-between h-full">
                <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-black text-2xl">
                    <X size={30} strokeWidth={0.5} />
                </button>
                <div className='space-y-3 '>
                    <a href="#" className="block text-base font-medium text-black hover:text-[#005f6a]">Register</a>
                    <a href="#" className="block text-base font-medium text-black hover:text-[#005f6a]">Login</a>
                </div>
                <div className="mt-auto border-t pt-4">
                    <a href="#" className="block mb-2 text-base font-medium text-black hover:underline">GTC</a>
                    <a href="#" className="block mb-2 text-base font-medium text-black hover:underline">Legal</a>
                    <a href="#" className="block mb-2 text-base font-medium text-black hover:underline">Privacy</a>
                    <a href="#" className="block text-base font-medium text-black hover:underline">Support</a>
                    <a href="#" className="block text-base font-medium mt-5 text-black hover:underline">United States of America - English (US)</a>
                </div>
            </div>
        )}
  
        {/* Main Content */}
        <div className="flex flex-grow h-screen gap-7">
            <div className="hidden lg:block w-1/2 h-full">
                <div 
                    className="h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${dbSchenkerSearchBg})` }}
                ></div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 flex flex-col justify-start mt-12 p-6 bg-white">
                <form onSubmit={handleSubmit} className="mb-6 flex-col space-y-9">
                    <div className='space-y-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-7 lucide lucide-search-slash text-[#005f6a]">
                            <path d="m14.5 10-7 3" stroke="red"/>
                            <circle cx="11" cy="11" r="8" stroke="currentColor"/>
                            <path d="m21 21-4.3-4.3" stroke="currentColor"/>
                        </svg>
                        <h1 className='font-extrabold text-2xl text-[#005f6a]'>Schenker Tracking</h1>
                    </div>
                    <div className="space-y-2">
                        <input
                            type="text"
                            id="reference"
                            value={referenceNumber}
                            onChange={(e) => setReferenceNumber(e.target.value)}
                            placeholder="Reference Number*"
                            className="w-[90%] p-4 border bg-gray-100 border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-[#005f6a]"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isEnabled}
                                    onChange={handleToggle}
                                />
                                <div className="w-11 h-6  bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#005f6a]"></div>
                                <span className="ml-3 text-sm font-medium text-gray-600">
                                    Looking for a specific reference?
                                </span>
                            </label>
                        </div>
                        {isEnabled && (
                            <select
                                value={selectedValue}
                                onChange={handleSelectChange}
                                className="w-[55%] mt-6 p-4 border bg-gray-100  border-gray-300 text-gray-400 rounded-none focus:outline-none focus:ring-1 focus:ring-[#005f6a]"
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
                            </select>
                        )}
                        <button 
                            type="submit"
                            className="mt-6 px-8 font-bold py-4 fixed right-24 bg-[#005f6a] text-white rounded-md hover:bg-[#005f6a]"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <button className="fixed h-28 w-10 -right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-[#005f6a] hover:text-white text-[#005f6a] rounded-xs hover:bg-[#005f6a] flex items-center justify-center">
                    <span className="font-normal -rotate-90">Feedback</span>
                </button>
            </div>
        </div>
        <footer className="flex text-base font-medium items-center w-full border-t text-black px-5 lg:px-20 py-3">
            <div className="hidden md:flex w-full justify-between items-center">
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
            <div className="flex flex-col md:hidden gap-2 mt-4 mb-3 text-sm text-black">
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