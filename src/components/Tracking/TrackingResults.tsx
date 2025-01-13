import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Package, X, CheckCircle2, AlertCircle, Search, Phone, Mail, MapPin } from 'lucide-react';

const TrackingResult = () => {
  const { trackingId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  
  // Valid tracking numbers that will show successful results
  const validTrackingNumbers = ['CIN220131001', 'CIN220131012', 'CIN220131044'];
  const shipmentFound = validTrackingNumbers.includes(trackingId || '');

  const handleNewSearch = () => {
    const newTrackingId = (document.getElementById('tracking-input') as HTMLInputElement)?.value;
    if (!newTrackingId?.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    setError('');
    navigate(`/tracking/${newTrackingId}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNewSearch();
    }
  };

  return (
    <div className="fixed inset-0 bg-white">
      {/* Header */}
      <header className="bg-[#005F6A] text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Package className="w-6 h-6" />
            <span className="text-xl font-bold">Shipment Tracking</span>
          </div>
          <button onClick={() => navigate('/')} className="hover:bg-[#004956] p-2 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-8rem)] bg-gray-50">
        {/* Search Bar */}
        <div className="bg-gradient-to-r from-[#005F6A] to-[#008299] py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-lg flex gap-2">
                <input
                  id="tracking-input"
                  type="text"
                  defaultValue={trackingId}
                  className={`flex-1 border-0 focus:ring-0 text-lg ${
                    error ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="Enter tracking number"
                  onKeyPress={handleKeyPress}
                  onChange={() => error && setError('')}
                />
                <button 
                  onClick={handleNewSearch}
                  className="bg-[#005F6A] text-white px-6 py-2 rounded-md hover:bg-[#004956] transition-colors flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
              {error && (
                <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Result Content */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          {!shipmentFound ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipment Not Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any shipment with the tracking number: <strong>{trackingId}</strong>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left max-w-md mx-auto">
                <h3 className="font-semibold text-gray-700 mb-2">Need Help?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-5 h-5 text-[#005F6A]" />
                    <span>Call us: 1-800-123-4567</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-5 h-5 text-[#005F6A]" />
                    <span>Email: support@shipping.com</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800">Shipment Found</h2>
                <p className="text-gray-600">Tracking Number: {trackingId}</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Shipment Status</h3>
                  <p className="text-green-600 font-medium">In Transit - On Schedule</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Estimated Delivery</h3>
                  <p className="text-gray-700">Thursday, March 21, 2024 by end of day</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Delivery Address</h3>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#005F6A] mt-1" />
                    <div>
                      <p>123 Shipping Street</p>
                      <p>Suite 456</p>
                      <p>Los Angeles, CA 90001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>© 2024 Shipping Company. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#005F6A]">Terms</a>
              <a href="#" className="hover:text-[#005F6A]">Privacy</a>
              <a href="#" className="hover:text-[#005F6A]">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrackingResult;