import React from 'react';

const Accordion: React.FC = () => {
    return (
         <div>
            <div className="border border-gray-300 p-4 cursor-pointer mb-2"> Vessels </div>
            <div className="border border-gray-300 p-4 cursor-pointer mb-2"> Other References </div>
            <div className="border border-gray-300 p-4 cursor-pointer mb-2"> Shipment Status History </div>
            <div className="border border-gray-300 p-4 cursor-pointer"> Contact Information </div>
        </div>
    );
};

export default Accordion;