import React from "react"
import DbSchenkerInsights from "../../../Assets/global-partnership-image-insights.webp";
import DbSchenkerInsights2 from "../../../Assets/db-schenker-slf-insights.webp";


export interface InsightsData {
    id: number;
    title: string;
    description: string;

}

export const insightsData: InsightsData[] = [
{    
    id: 1,
    title: "300,774",
    description: "300,774 Euros donated towards impactful reforestation (WeForest)",
},
{    
    id: 2,
    title: "13,000",
    description: ">13,000 tons of SAF purchased in 2024",
},
{    
    id: 3,
    title: "14,000",
    description: "~14,000 tons of SMB purchased in 2024",
},
{    
    id: 4,
    title: "10",
    description: "10+ million returns of electronic devices purchased to contribute to circular economy",
},
    
];

export interface InsightsIndexData {
    id: number;
    title: string;
    description: React.ReactNode; // Updated to support JSX
    image: string;
    subheading: string; 
    link: string;
    bgColor: string;
    button: string;
}

export const insightsIndexData: InsightsIndexData[] = [
    {
        id: 1,
        title: 'Transformation in transportation',
        subheading: 'Sustainable Logistics Forum',
        image: DbSchenkerInsights,
        description: (
            <>
               Join us and transform logistics towards a responsible and sustainable industry together.
            </>
        ),
        link: 'More about Timo ',
        button: 'Sustainability ESG',
        bgColor: 'bg-blue-600',
    },
    {
        id: 2,
        title: 'Better together',
        image: DbSchenkerInsights2,
        subheading: 'Global partnerships',
        description: (
            <>
                Sustainability is a global challenge that we must face together. What will the new normal in logistics look like?
            </>
        ),
        link: 'More about Mary-Anne ',
        button: 'Sustainability ESG',
        bgColor: 'bg-blue-600',
    },
];