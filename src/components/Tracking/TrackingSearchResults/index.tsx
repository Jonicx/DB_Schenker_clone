import React from "react";

const Index = () => {
  
    const googleMapsApiKey = 'YOUR_API_KEY'; // Replace with your API key

    return (
        <div className="container mx-auto">
           <Shipments apiKey={googleMapsApiKey} />
        </div>
    );
}