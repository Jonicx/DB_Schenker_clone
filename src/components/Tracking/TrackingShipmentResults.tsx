import React, { useState, useEffect } from 'react';
import { Package, Building2, ChevronDown, ChevronUp,MoveLeft } from 'lucide-react';
import { shipments, type Shipment, type ShipmentStatus } from '../../data/shipments';
import { getStatusDisplay,  formatDate, getStatusIndex } from '../../utils/shipmentUtils';
import { useParams, useNavigate } from 'react-router-dom';

function TrackingShipmentResults() {
  const { shipmentId } = useParams();
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [openSections, setOpenSections] = useState({
    shipmentDetails: true,
    vessels: false,
    otherReferences: false,
    statusHistory: false,
    contactInfo: false,
  });
  const navigate = useNavigate();


  useEffect(() => {
    setShipment(shipments[shipmentId]);
  }, [shipmentId]);


  const statusIcons = {
    BOOKED: (
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="5rem" 
        height="5rem" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="0.8" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="lucide lucide-heart-handshake">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
        <path d="m18 15-2-2"/>
        <path d="m15 18-2-2" />
      </svg>
    ),
    IN_TRANSPORTATION: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5rem"
        height="5rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor" /* Use currentColor for dynamic styling */
        stroke-width="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-ship"
      >
        <path d="M12 10.189V14" />
        <path d="M12 2v3"/>
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
      </svg>
    ),
    DEPARTED_FROM_ORIGIN: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="5rem" 
        height="5rem" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="0.8" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="lucide lucide-plane-takeoff">
        <path d="M16 21h20 3v1 17l-2-4 1.1-.55a2" stroke="red"/>
        <path d="M2 22h20"/>
        <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/>
      </svg>
    ),
    ARRIVED_AT_DESTINATION: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="5rem" 
        height="5rem" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="0.8" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="lucide lucide-plane-landing">
        <path d="M1 21h8 " stroke="red"/>
        <path d="M2 22h20"/>
        <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"/></svg>
    ),
    DELIVERED: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="5rem" 
        height="5rem" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="0.8" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="lucide lucide-package-check">
        <path d="m16 16 2 2 4-4"/>
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
        <path d="m7.5 4.27 9 5.15"/>
        <polyline points="3.29 7 12 12 20.71 7"/>
        <line x1="12" x2="12" y1="22" y2="12"/>
      </svg>
    ),
  };
  
  

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      shipmentDetails: section === 'shipmentDetails' ? !prev.shipmentDetails : false,
      [section]: !prev[section],
    }));
  };

  if (!shipment) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Loading...</div>;
  }

  const statusIndex = getStatusIndex(shipment.status);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm p-4" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4" >
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)} // Navigate to the previous page
              className="p-2 rounded-full"
              aria-label="Go back"
            >
              <MoveLeft className="h-7 w-7 text-gray-600" />
            </button>
            <span className="text-gray-500 text-sm sm:text-base">STT Number:&nbsp;&nbsp; {shipment.id}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M2 21.1932C2.68524 22.2443 3.57104 22.2443 4.27299 21.1932C6.52985 17.7408 8.67954 23.6764 10.273 21.2321C12.703 17.5694 14.4508 23.9218 16.273 21.1932C18.6492 17.5582 20.1295 23.5776 22 21.5842" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
              />
              <path d="M3.57228 17L2.07481 12.6457C1.80373 11.8574 2.30283 11 3.03273 11H20.8582C23.9522 11 19.9943 17 17.9966 17" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
              />
              <path d="M18 11L15.201 7.50122C14.4419 6.55236 13.2926 6 12.0775 6H8C6.89543 6 6 6.89543 6 8V11" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
              />
              <path d="M10 6V3C10 2.44772 9.55228 2 9 2H8" 
                stroke="red" 
                stroke-width="1" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
              />
            </svg>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Package className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Building2 className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-3">
          {/* Delivery Status Section */}
          <div className="bg-white rounded-lg sm:p-6">
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-light text-gray-900">Hello!</h1>
              <p className="text-xl font-semibold">
                Your shipment is currently <span className="text-[#005f6a]">{getStatusDisplay(shipment.status).toLowerCase()}</span>.
              </p>

              <div className="relative flex overflow-x-auto gap-4">
                {/* Status Boxes */}
                {['BOOKED', 'IN_TRANSPORTATION', 'DEPARTED_FROM_ORIGIN', 'ARRIVED_AT_DESTINATION', 'DELIVERED'].map((status, index) => (
                  <div
                    key={status}
                    className={`flex flex-col items-center justify-center border-2 rounded-md p-4 min-w-[120px] lg:max-w-[140px] ${
                      index < statusIndex
                        ? 'border-gray-500 text-gray-500' // Passed statuses: black icons and text
                        : index === statusIndex
                        ? 'border-[#005f6a] text-[#005f6a]' // Active status styling
                        : 'border-gray-200 text-gray-200' // Future statuses: gray box, icon, and text
                    }`}
                  >
                    <div className={`mb-0 ${index < statusIndex ? 'text-black' : ''}`}>
                      {statusIcons[status] /* Render icon dynamically */}
                    </div>
                    <span
                      className={`text-sm text-center ${
                        index === statusIndex ? 'font-bold' : ''
                      }`}
                    >
                      {getStatusDisplay(status as ShipmentStatus)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipment Details Section */}
          <div className="bg-white rounded-lg shadow-sm border border-teal-600">
            <button
              onClick={() => toggleSection('shipmentDetails')}
              className="w-full px-6 py-4 flex items-center justify-between text-left border-b border-gray-200"
            >
              <span className="text-lg font-medium">Shipment Details</span>
              {openSections.shipmentDetails ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openSections.shipmentDetails && (
              <div className="px-6 pb-6">
                {/* Departure and Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-80 border-b border-gray-200 pb-6 mt-5">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        width="1.25rem" 
                        height="1.25rem" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="1.2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        className="lucide lucide-ship text-black">
                        <path d="M12 10.189V14"/>
                        <path d="M12 2v3"/>
                        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
                        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" stroke='red'/>
                        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                      </svg>
                    </div>
                    <div className="flex-col items-center">
                      <p className="font-light text-sm text-gray-700">Departure</p>
                      <p className="font-medium text-sm text-gray-800">{shipment.departure.name}</p>
                    </div>
                    <div className="flex-col items-center">
                      <p className="font-light text-sm text-gray-700">Scheduled Departure</p>
                      <p className="font-medium text-sm text-gray-800">{formatDate(shipment.departure.scheduledTime)}</p>
                    </div>
                    <div className="flex-col items-center">
                      <p className="font-light text-sm text-gray-700">Revised Departure</p>
                      {shipment.departure.revisedTime && (
                        <p className="font-medium text-sm text-gray-800">{formatDate(shipment.departure.revisedTime)}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1.25rem" 
                        height="1.25rem" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="1.2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        className="lucide lucide-map-pinned text-black">
                        <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/>
                        <circle cx="12" cy="8" r="2" stroke='red'/>
                        <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>
                      </svg>
                    </div>
                    <div className='flex-col items-center'>
                      <p className="font-light text-sm text-gray-700">Destination</p>
                      <p className="font-medium text-sm text-gray-800">{shipment.destination.name}</p>
                    </div>
                    <div className='flex-col items-center'>
                      <p className="font-light text-sm text-gray-700">Scheduled Arrival</p>
                      <p className="font-medium text-sm text-gray-800">{formatDate(shipment.destination.scheduledTime)}</p>
                    </div>
                    <div className='flex-col items-center'>
                      <p className="font-light text-sm text-gray-700">Revised Arrival</p>
                      {shipment.destination.revisedTime && (
                        <p className="font-medium text-sm text-gray-800">{formatDate(shipment.destination.revisedTime)}</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* Shipment Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="1.40rem" 
                      height="1.40rem" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="black" 
                      stroke-width="1" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      className="lucide lucide-boxes text-black">
                      <path 
                      d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/>
                      <path d="m7 16.5-4.74-2.85"/>
                      <path d="m7 16.5 5-3" />
                      <path d="M7 16.5v5.17"/>
                      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/>
                      <path d="m17 16.5-5-3" />
                      <path d="m17 16.5 4.74-2.85"/>
                      <path d="M17 16.5v5.17"/>
                      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" stroke='red'/>
                      <path d="M12 8 7.26 5.15" stroke='red'/>
                      <path d="m12 8 4.74-2.85" stroke='red'/>
                      <path d="M12 13.5V8" stroke='red'/>
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600">Number of Pieces</p>
                      <p className="font-medium text-gray-800">{shipment.pieces}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-4">
                    
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="1.40rem" 
                      height="1.40rem" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="black" 
                      stroke-width="1" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      className="lucide lucide-weight">
                      <circle cx="12" cy="5" r="3" stroke='red'/>
                      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/>
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600">Total Weight</p>
                      <p className="font-medium text-gray-800">
                        {shipment.weight.value} {shipment.weight.unit}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="1.40rem" 
                      height="1.40rem" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="black" 
                      stroke-width="1" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      className="lucide lucide-cuboid">
                      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"/>
                      <path d="M10 22v-8L2.25 9.15"/>
                      <path d="m10 14 11.77-6.87" stroke='red'/>
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600">Total Volume</p>
                      <p className="font-medium text-gray-800">
                        {shipment.volume.value} {shipment.volume.unit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Vessels Section */}
          <div className="bg-white rounded-lg shadow-sm border border-teal-600">
            <button
              onClick={() => toggleSection('vessels')}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-medium">Vessels</span>
              {openSections.vessels ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openSections.vessels && (
              <div className="px-6 pb-6">
                {shipment.vessels.map((vessel, index) => (
                  <div key={index} className="border-b last:border-b-0 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">{vessel.name}</h3>
                      <span className="text-gray-600">Voyage: {vessel.voyage}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Departure</p>
                        <p className="font-medium">{vessel.departurePort}</p>
                        <p className="text-sm text-gray-500">{formatDate(vessel.departureDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Arrival</p>
                        <p className="font-medium">{vessel.arrivalPort}</p>
                        <p className="text-sm text-gray-500">{formatDate(vessel.arrivalDate)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other References Section */}
          <div className="bg-white rounded-lg shadow-sm border border-teal-600">
            <button
              onClick={() => toggleSection('otherReferences')}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-medium">Other References</span>
              {openSections.otherReferences ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openSections.otherReferences && (
              <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {shipment.references.bookingNumber && (
                  <div>
                    <p className="text-sm text-gray-600">Booking Number</p>
                    <p className="font-medium">{shipment.references.bookingNumber}</p>
                  </div>
                )}
                {shipment.references.customerReference && (
                  <div>
                    <p className="text-sm text-gray-600">Customer Reference</p>
                    <p className="font-medium">{shipment.references.customerReference}</p>
                  </div>
                )}
                {shipment.references.billOfLading && (
                  <div>
                    <p className="text-sm text-gray-600">Bill of Lading</p>
                    <p className="font-medium">{shipment.references.billOfLading}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Shipment Status History Section */}
          <div className="bg-white rounded-lg shadow-sm border border-teal-600">
            <button
              onClick={() => toggleSection('statusHistory')}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-medium">Shipment Status History</span>
              {openSections.statusHistory ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openSections.statusHistory && (
              <div className="px-6 pb-6">
                <div className="space-y-6">
                  {shipment.statusHistory.map((status, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-blue-600">
                      <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-blue-600"></div>
                      <div className="space-y-1">
                        <p className="font-medium">{getStatusDisplay(status.status)}</p>
                        <p className="text-sm text-gray-600">{formatDate(status.timestamp)}</p>
                        {status.location && (
                          <p className="text-sm text-gray-500">{status.location}</p>
                        )}
                        {status.comment && (
                          <p className="text-sm text-gray-500">{status.comment}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-lg shadow-sm border border-teal-600">
            <button
              onClick={() => toggleSection('contactInfo')}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-medium">Contact Information</span>
              {openSections.contactInfo ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openSections.contactInfo && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {shipment.contacts.map((contact, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-medium text-lg">{contact.type.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}</h3>
                      <div className="space-y-2">
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-sm text-gray-600">{contact.phone}</p>
                        <p className="text-sm text-gray-600">{contact.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="w-full lg:w-[200px] bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="h-[300px] lg:h-full lg:min-h-[600px] bg-blue-50 relative">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Map visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center">
                <span className="text-xl">2</span>
              </button>
              <button className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center">
                <span className="text-xl">6</span>
              </button>
              <button className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center">
                <span className="text-xl">7</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TrackingShipmentResults;
