import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TrackingShipmentResults from './TrackingShipmentResults';

const ShipmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate('/');
    return null;
  }

  return <TrackingShipmentResults shipmentId={id} />;
};

export default ShipmentDetails;