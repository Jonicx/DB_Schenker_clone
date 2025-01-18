import React, { useEffect, useRef } from 'react';

interface MapComponentProps {
    apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!apiKey) {
        console.error("Google Maps API key is missing.");
        return;
      }

      const mapScript = document.createElement("script");
      mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      mapScript.async = true;
      mapScript.defer = true;

      window.initMap = () => {
        if (mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: { lat: 34.0522, lng: -118.2437 }, // Default to Long Beach coordinates
            zoom: 10,
            mapTypeId: "roadmap",
          });

          // Example marker at the destination
            new google.maps.Marker({
              position: { lat: 33.7753 , lng: -118.1931 },
              map: map,
              title: "Long Beach"
        });

        } else {
          console.error("Map element not found.");
        }
      };
      document.body.appendChild(mapScript);
    }
        loadMap();

        return () => {
             const mapScript = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js?key=${apiKey}"]`);
                 if (mapScript){
                     mapScript.remove();
                 }
                 delete (window as any).initMap
             };

  }, [apiKey]);

    return (
        <div className="w-2/5" ref={mapRef} style={{ height: '500px' }}></div>
    );
};


export default MapComponent;