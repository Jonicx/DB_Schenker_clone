import { ShipmentStatus } from '../data/shipments';

export const getStatusIndex = (status: ShipmentStatus): number => {
  const statusOrder: ShipmentStatus[] = [
    'BOOKED',
    'IN_TRANSPORTATION',
    'DEPARTED_FROM_ORIGIN',
    'ARRIVED_AT_DESTINATION',
    'DELIVERED'
  ];
  return statusOrder.indexOf(status);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export const getStatusDisplay = (status: ShipmentStatus): string => {
  return status.toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getProgressPercentage = (currentStatus: ShipmentStatus): number => {
  const statusIndex = getStatusIndex(currentStatus);
  const totalStatuses = 5; // Total number of possible statuses
  return ((statusIndex + 1) / totalStatuses) * 100;
};