import React from "react";

export interface Job {
    id: number;
    state: string;
    title: string;
    description: React.ReactNode;
};

export const jobs: Job[] = [
    {
        id: 1,
        state: "Florence, Kentucky",
        title: "Warehouseperson, Lead",
        description: (
            <>
                Contract Logistics/Supply Chain Mgmt <br /> Professionals, Full Time
            </>
        ),
    },
    {
        id: 2,
        state: "Houston, Texas",
        title: "Warehouseperson",
        description: (
            <>
                Contract Logistics/Supply Chain Mgmt <br /> Professionals, Full Time
            </>
        ),
    },
    {
        id: 3,
        state: "Joliet, Illinois",
        title: "Mgr, On Site Support II",
        description: (
            <>
                Land Transport/Trucking Graduates, <br/> Full Time
            </>
        ),
    },
    {
        id: 4,
        state: "Portland, Maine",
        title: "Frontend Developer",
        description: (
            <>
                A Frontend Developer is needed to build <br/> high-quality applications.
            </>
        ),
    },
    {
        id: 5,
        state: "Portsmouth, New Hampshire",
        title: "Frontend Developer",
        description: (
            <>
                A Frontend Developer <br/> is needed.
            </>
        ),
    },
    {
        id: 6,
        state: "New York, New York",
        title: "Frontend Developer",
        description: (
            <>
                A Frontend Developer is needed to build <br/> high-quality applications.
            </>
        ),
    },
];
