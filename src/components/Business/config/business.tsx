import React from 'react';
import dbSchenkerDigital from '../../../Assets/db-schenker-digital-services-hub-connect-02.webp';
import dbSchenkerContracts from '../../../Assets/db-schenker-digital-services-hub-connect-03.webp';
import dbSchenkerNoContacts from '../../../Assets/db-schenker-digital-services-hub-connect-04.webp';

export interface Business {
    id: number;
    title: string;
    description: React.ReactNode; // Updated to support JSX
    image: string;
    link: string;
    bgColor: string;
    button: string;
}

export const business: Business[] = [
    {
        id: 1,
        title: 'Contract in place and registered at connect?',
        image: dbSchenkerDigital,
        description: (
            <>
                Do you already have a contract and use our digital services? <br/> Login here and benefit from our most recent upgrade to <b className="font-extrabold">DB SCHENKER | connect</b>. Faster than ever before, you now have seamless entry to all your services. And if that wasn’t enough, you can also easily qet quotes and book additional shipments within one platform.
            </>
        ),
        link: 'Login',
        button: 'DB Schenker',
        bgColor: 'bg-blue-600',
    },
    {
        id: 2,
        title: 'Contract in place, but missing the benefits of connect?',
        image: dbSchenkerContracts,
        description: (
            <>
                You have a contract with us and have not yet heard about the benefits of registering at <b className="font-extrabold">DB SCHENKER | connect</b>? Well, we have good news for you. Our digital services just got better and now is the best time to benefit from seamless entry to our single platform. Register now to access all your logistics and transport services on one platform.
            </>
        ),
        link: 'Register',
        button: 'DB Schenker',
        bgColor: 'bg-blue-600',
    },
    {
        id: 3,
        title: 'No contract, but ready to ship?',
        image: dbSchenkerNoContacts,
        description: (
            <>
                Are you looking for a quick quote without any obligations? It’s as easy as ever with <b className="font-extrabold">DB SCHENKER | connect</b>.
                Select your transport mode and see your rate and options instantly. 
                <br/> 
                <br/>
                <br/> 
                You can immediately book your shipment or login to access your personalized dashboard and make your next booking or track your shipment.
            </>
        ),
        link: 'Get started',
        button: 'DB Schenker',
        bgColor: 'bg-blue-600',
    },
];
