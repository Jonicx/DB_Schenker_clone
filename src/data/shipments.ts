export type ShipmentStatus = 
  | 'BOOKED'
  | 'IN_TRANSPORTATION'
  | 'DEPARTED_FROM_ORIGIN'
  | 'ARRIVED_AT_DESTINATION'
  | 'DELIVERED';

export interface Location {
  name: string;
  scheduledTime: string;
  revisedTime?: string;
}

export interface ShipmentDimensions {
  height: number;
  width: number;
  length: number;
  unit: string;
}

export interface Vessel {
  name: string;
  voyage: string;
  departurePort: string;
  arrivalPort: string;
  departureDate: string;
  arrivalDate: string;
}

export interface Contact {
  type: 'SHIPPER' | 'CONSIGNEE' | 'NOTIFY_PARTY';
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Shipment {
  id: string;
  status: ShipmentStatus;
  departure: Location;
  destination: Location;
  pieces: number;
  weight: {
    value: number;
    unit: string;
  };
  volume: {
    value: number;
    unit: string;
  };
  dimensions: ShipmentDimensions;
  vessels: Vessel[];
  references: {
    bookingNumber?: string;
    customerReference?: string;
    billOfLading?: string;
  };
  statusHistory: {
    status: ShipmentStatus;
    timestamp: string;
    location?: string;
    comment?: string;
  }[];
  contacts: Contact[];
}

// Sample shipment data
export const shipments: Record<string, Shipment> = {
  'STT123456789': {
    id: 'STT123456789',
    status: 'DEPARTED_FROM_ORIGIN',
    departure: {
      name: 'Laem Chabang',
      scheduledTime: '2021-12-07T00:00:00Z',
      revisedTime: '2021-12-07T17:59:00Z'
    },
    destination: {
      name: 'Long Beach USA',
      scheduledTime: '2022-02-11T14:30:00Z',
      revisedTime: '2022-01-26T09:00:00Z'
    },
    pieces: 1090,
    weight: {
      value: 7271.39,
      unit: 'KGS'
    },
    volume: {
      value: 63.04,
      unit: 'CBM'
    },
    dimensions: {
      height: 170,
      width: 0,
      length: 0,
      unit: 'cm'
    },
    vessels: [
      {
        name: 'CN SCHENKER',
        voyage: 'EGV123',
        departurePort: 'Laem Chabang',
        arrivalPort: 'Wayoming',
        departureDate: '2021-12-07T17:59:00Z',
        arrivalDate: '2022-01-26T09:00:00Z'
      }
    ],
    references: {
      bookingNumber: 'BK123456',
      customerReference: 'CR789012',
      billOfLading: 'BL345678'
    },
    statusHistory: [
      {
        status: 'BOOKED',
        timestamp: '2021-11-30T10:00:00Z',
        comment: 'Booking confirmed'
      },
      {
        status: 'IN_TRANSPORTATION',
        timestamp: '2021-12-05T08:30:00Z',
        location: 'Laem Chabang',
        comment: 'Cargo received at port'
      },
      {
        status: 'DEPARTED_FROM_ORIGIN',
        timestamp: '2021-12-07T17:59:00Z',
        location: 'Laem Chabang',
        comment: 'Vessel departed'
      }
    ],
    contacts: [
      {
        type: 'SHIPPER',
        name: 'Thai Exports Co., Ltd.',
        email: 'shipping@thaiexports.com',
        phone: '+66 2 123 4567',
        address: '123 Shipping Lane, Bangkok, Thailand'
      },
      {
        type: 'CONSIGNEE',
        name: 'US Imports Inc.',
        email: 'receiving@usimports.com',
        phone: '+1 562 987 6543',
        address: '456 Harbor Blvd, Long Beach, CA 90802'
      },
      {
        type: 'NOTIFY_PARTY',
        name: 'Kudus Lerking.',
        email: 'KudusLerk@usimports.com',
        phone: '+1 775 504 6543',
        address: '9902 Luaube ST, Silly Valley, WA 19920'
      }
    ]
  },

  // Add more shipments as needed
  'STT383456783': {
    id: 'STT383456783',
    status: 'ARRIVED_AT_DESTINATION',
    departure: {
      name: 'Laem Chabang',
      scheduledTime: '2021-12-07T00:00:00Z',
      revisedTime: '2021-12-07T17:59:00Z'
    },
    destination: {
      name: 'Long Beach USA',
      scheduledTime: '2022-02-11T14:30:00Z',
      revisedTime: '2022-01-26T09:00:00Z'
    },
    pieces: 1090,
    weight: {
      value: 7271.39,
      unit: 'KGS'
    },
    volume: {
      value: 63.04,
      unit: 'CBM'
    },
    dimensions: {
      height: 170,
      width: 0,
      length: 0,
      unit: 'cm'
    },
    vessels: [
      {
        name: 'EVER GIVEN',
        voyage: 'EGV123',
        departurePort: 'Laem Chabang',
        arrivalPort: 'Long Beach',
        departureDate: '2021-12-07T17:59:00Z',
        arrivalDate: '2022-01-26T09:00:00Z'
      }
    ],
    references: {
      bookingNumber: 'BK123456',
      customerReference: 'CR789012',
      billOfLading: 'BL345678'
    },
    statusHistory: [
      {
        status: 'BOOKED',
        timestamp: '2021-11-30T10:00:00Z',
        comment: 'Booking confirmed'
      },
      {
        status: 'IN_TRANSPORTATION',
        timestamp: '2021-12-05T08:30:00Z',
        location: 'Laem Chabang',
        comment: 'Cargo received at port'
      },
      {
        status: 'DEPARTED_FROM_ORIGIN',
        timestamp: '2021-12-07T17:59:00Z',
        location: 'Laem Chabang',
        comment: 'Vessel departed'
      }
    ],
    contacts: [
      {
        type: 'SHIPPER',
        name: 'Thai Exports Co., Ltd.',
        email: 'shipping@thaiexports.com',
        phone: '+66 2 123 4567',
        address: '123 Shipping Lane, Bangkok, Thailand'
      },
      {
        type: 'CONSIGNEE',
        name: 'US Imports Inc.',
        email: 'receiving@usimports.com',
        phone: '+1 562 987 6543',
        address: '456 Harbor Blvd, Long Beach, CA 90802'
      }
    ]
  },
  
  // Add more shipments as needed
};