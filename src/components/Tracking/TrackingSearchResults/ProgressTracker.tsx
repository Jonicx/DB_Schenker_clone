import React from 'react';

const ProgressTracker: React.FC = () => {
    return (
        <div className="mb-5">
            <h2>Hello!</h2>
            <p className="mb-5">Your shipment is currently departed from origin port.</p>
            <div className="flex justify-between items-center mb-5">
                 <div className="w-1/5 h-3 border border-black rounded-full"></div>
                 <div className="w-1/5 h-3 border border-black rounded-full"></div>
                 <div className="w-1/5 h-3 border border-black rounded-full bg-sky-400"></div>
                 <div className="w-1/5 h-3 border border-black rounded-full"></div>
                 <div className="w-1/5 h-3 border border-black rounded-full"></div>
            </div>
        </div>
    );
};

export default ProgressTracker;