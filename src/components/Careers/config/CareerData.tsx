import React from 'react';
import DbSchenkertTimo from '../../../Assets/DbSchenker-employee-story-timo-image.webp'
import DbSchenkerMaryAnne from '../../../Assets/DbSchenker-mary-ann-portrait-outside.webp'
import DbSchenkerKhotso from '../../../Assets/Dbschenker-khotso-with-notebook.webp'

export interface CareerData {
    id: number;
    title: string;
    description: React.ReactNode; // Updated to support JSX
    image: string;
    subheading: string;
    link: string;
    bgColor: string;
    button: string;
}

export const careerData: CareerData[] = [
    {
        id: 1,
        title: 'Timo is here to make an impact',
        subheading: 'Careers, What matters to you',
        image: DbSchenkertTimo,
        description: (
            <>
               He has big aspirations, so he wants to tackle significant challenges every day to develop his skills and leave his mark on the world. Logistics are the backbone of the global economy, so a career at DB SCHENKER gives him influence on an international scale.Timo is here to make an impact
            </>
        ),
        link: 'More about Timo ',
        button: 'DB Schenker',
        bgColor: 'bg-blue-600',
    },
    {
        id: 2,
        title: 'Mary-Anne has a drive to achieve her goals',
        image: DbSchenkerMaryAnne,
        subheading: 'Careers, What matters to you',
        description: (
            <>
                She believes life is about choices and you need to make things happen for yourself if you want to succeed. She hasn't had a typical career path but working at DB SCHENKER means she's been able to follow her ambition each step of the way.
            </>
        ),
        link: 'More about Mary-Anne ',
        button: 'DB Schenker',
        bgColor: 'bg-blue-600',
    },
    {
        id: 3,
        title: 'Khotso is excited by opportunities for career growth',
        subheading: 'Careers, What matters to you',
        image: DbSchenkerKhotso,
        description: (
            <>
                In 2016, he kick-started his journey by entering our DB SCHENKER Campus MEA in South Africa. It created a bridge from school to work and it was there that discovered his passion and skill for Customs. Now there's no limit to his vision for the future.
            </>
        ),
        link: 'More about Khotso ',
        button: 'DB Schenker',
        bgColor: 'bg-blue-600',
    },
];
