import React from 'react';

const ShipmentDetails: React.FC = () => {
    return (
      <div className="bg-gray-100 p-5">
        <div className="font-bold text-lg mb-5">
            Shipment Details
        </div>
        <div className="flex justify-between mb-5">
              <div className="w-2/5">
                  Departure
                  <p className="text-gray-500">Laem Chabang</p>
                  <p className="text-gray-500">Scheduled Departure: 2021.12.7, 0:00</p>
                   <p className="text-gray-500">Revised Departure: 2021.12.7, 17:59</p>
              </div>
               <div className="w-2/5">
                  Destination
                   <p className="text-gray-500">Long Beach USA</p>
                  <p className="text-gray-500">Scheduled Arrival: 2022.2.11, 14:30</p>
                   <p className="text-gray-500">Revised Arrival: 2022.1.26, 9:00</p>
              </div>
        </div>
          <div className="flex justify-between mb-5">
             <div className="w-1/4">
                  Number of Pieces
                  <p className="text-gray-500">1090</p>
              </div>
               <div className="w-1/4">
                   Total Weight
                    <p className="text-gray-500">7271.39 KGS</p>
               </div>
                <div className="w-1/4">
                  Total Volume
                  <p className="text-gray-500">63.04 CBM</p>
               </div>
          </div>
          <div className="text-gray-500 mb-5">
                  Dimensions (height, width, length)
                <p>-cm/-cm/-cm</p>
                <div className = "flex mb-5">
                    <div className = "border-black border h-[100px] w-[20px] border-b-2 rounded-b-xl ml-10">
                    </div>
                    <div className = "border-black border h-[20px] w-[20px] mt-3 ml-5">
                    </div>
                </div>
          </div>
        </div>
    );
};

export default ShipmentDetails;