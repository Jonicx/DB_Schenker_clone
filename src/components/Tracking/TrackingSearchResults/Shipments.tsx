import React from 'react';
import Header from './Header';
import ProgressTracker from './ProgressTracker';
import ShipmentDetails from './ShipmentDetails';
import Accordion from './Accordion';
import MapComponent from './MapComponent';


interface ShipmentsProps {
    apiKey: string;
}


const Shipments: React.FC<ShipmentsProps> = ({apiKey}) => {

    return (
        <div className="flex w-full">
            <div className="w-3/5 p-10">
                <Header />
                <ProgressTracker />
                <ShipmentDetails />
                 <Accordion />
             </div>
            <MapComponent apiKey={apiKey} />
        </div>
    );
};
export default Shipments;