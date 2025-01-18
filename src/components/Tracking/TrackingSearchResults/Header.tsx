import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex justify-between w-full mb-5">
            <div className="text-gray-500 text-sm">STT Number</div>
            <div className="flex justify-around">
                <div className="h-5 w-5 bg-gray-500 mr-5"></div>
                <div className="h-5 w-5 bg-gray-500"></div>
            </div>
        </div>
    );
};

export default Header;