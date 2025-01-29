import React from 'react';
import DbSchenkertTimo from '../../../Assets/DbSchenker-employee-story-timo-image.webp'
import DbSchenkerMaryAnne from '../../../Assets/DbSchenker-mary-ann-portrait-outside.webp'
import DbSchenkerKhotso from '../../../Assets/Dbschenker-khotso-with-notebook.webp'
import RodDbWorker from "../../../Assets/dbSchenker-rob-3-global-en-.webp";
import DbSchenkerFallback from "../../../Assets/missing-image-fallback-svg-data.svg";
import MariamDbWorker from "../../../Assets/dbShecnker-employee-story-quote-image.webp";
import DbMiguel from "../../../Assets/dbSchenker-miguel-image.webp";
import DbMarta from "../../../Assets/dbSchenker-marta-image.webp";
import DbEva from "../../../Assets/dbSchenker-eva-image.webp";
import DbJulius from "../../../Assets/dbSchenker-julius-image.webp";
import Benefitspoe1 from "../../../Assets/dbSchenker-benefits-pos3.webp";
import Benefitspoe2 from "../../../Assets/dbSchenker-benefits-pos4.webp";
import Benefitspoe3 from "../../../Assets/dbSchenker-benefits-pos2.webp";
import Benefitspoe4 from "../../../Assets/dbschenker-career-benefits-mind-body-balance.webp";

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

export interface CareerTabData {
    id: number;
    title: string;
    image: string;
    headline : string;
    description: string;
    signature: string;
}

export const tabData: CareerTabData[] = [
  {
    id: 1,
    title: "Making an impact",
    image: RodDbWorker,
    headline: "Rob knows no boundaries or limitations",
    description: "He’s excited by opportunities to drive change that impacts the company as a whole.",
    signature: "Rob, Continuous Improvement Project Manager OpEx BeNeLux | DB SCHENKER",
  },
  {
    id: 2,
    title: "Developing my skills",
    image: DbSchenkerFallback,
    headline: "Mariam is making history",
    description: "She’s continually growing her skills and breaking ground for women in her region.",
    signature: "Mariam, Forklift Driver | DB SCHENKER",
  },
  {
    id: 3,
    title: "Greener future",
    image: MariamDbWorker,
    headline: "Natalia is passionate about green projects",
    description: "She pioneered sustainability initiatives in her own country and inspired others to follow suit.",
    signature: "Natalia, Head of Procurement | Romania DB SCHENKER",
  },
  {
    id: 4,
    title: "Finding work-life balance",
    image: DbSchenkerFallback,
    headline: "Frank enjoys the freedom of the highway",
    description: "He appreciates the flexibility and variety as he drives around 140,000 km a year.",
    signature: "Frank, Truck Driver | DB SCHENKER",
  },
];

export interface CareerEmployeeData {
    id: number;
    title: string;
    image: string;
    description: string;
}

export const employeeData : CareerEmployeeData[] = [
  {
    id: 1,
    image: DbMiguel,
    title: "Miguel",
    description: "I want to work on a variety of tasks with up-to-date tools.",
  },
  {
    id: 2,
    image: DbMarta,
    title: "Marta",
    description: "I enjoy a friendly and positive working environment.",
  },
  {
    id: 3,
    image: DbEva,
    title: "Eva",
    description: "Family is important to me so I look for work-life balance.",
  },
  {
    id: 4,
    image: DbJulius,
    title: "Julius",
    description: "Teamwork! You can only make a difference working together.",
  },
];

export interface CareerBenefitData {
    id: number;
    title: React.ReactNode;
    image: string;
    description: string;
}

export const benefitData : CareerBenefitData[] = [
  {
    id: 1,
    image: Benefitspoe1,
    title: 
    (
        <>
            Is a career with purpose <br/> important to you?
        </>
    ),
    description: "We’re working on the future of sustainable logistics – come and join us!",
  },
  {
    id: 2,
    image: Benefitspoe2,
    title: 
    (
        <>
            Is diversity and inclusion <br/> important to you?
        </>
    ),
    description: "We welcome people from all backgrounds to move with us.",
  },
  {
    id: 3,
    image: Benefitspoe3,
    title:(
        <>
            Is a strong team <br/> important to you?
        </>
    ),
    description: "Join a global network of colleagues and support is never far away.",
  },
  {
    id: 4,
    image: Benefitspoe4,
    title:(
        <>
        Are added incentives <br/> important to you?
        </>
    ),
    description: "Our range of benefits will make your career more rewarding.",
  },
];

export interface CareerIndexData { 
    id: number;
    title: string;
    description: string;
    color: string;
}

export const indexData : CareerIndexData[] = [
    {
        id: 1,
        color: "bg-green-600",
        title: "Contributing to a greener future",
        description:
            "Join our innovative team and we can accelerate the transformation to a more sustainable tomorrow together.",
    },
    {
        id: 2,
        color: "bg-purple-900",
        title: "Finding work-life balance",
        description:
            "Many of our positions give you the flexibility to shape your own schedule so you can work in a way that supports your life.",
    },
    {
        id: 3,
        color: "bg-teal-700",
        title: "Developing your skills",
        description:
            "You never stop growing, and with our range of development opportunities, neither will your career potential.",
    },
    {
        id: 4,
        color: "bg-orange-600",
        title: "Making an impact",
        description:
            "At DB SCHENKER, you're encouraged to speak up, voice your opinion, and influence decision-making.",
    },
]
