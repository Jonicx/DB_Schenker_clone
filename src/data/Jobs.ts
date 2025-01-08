export type Job = {
    id: number;
    state: string;
    title: string;
    description: string;
};

export const jobs: Job[] = [
    {
        id: 1,
        state: "Florence, Kentucky",
        title: "Warehouseperson, Lead",
        description: "Contract Logistics/Supply Chain Mgmt Professionals, Full Time",
    },
    {
        id: 2,
        state: "Houston, Texas",
        title: "Warehouseperson",
        description: "Contract Logistics/Supply Chain Mgmt Professionals, Full Time",
    },
    {
        id: 3,
        state: "Joliet, Illinois",
        title: "Mgr, On Site Supoprt II",
        description: "Land Transport/Trucking Graduates, FullTime.",
    },
    {
        id: 4,
        state: "Maine, Portland",
        title: "Frontend Developer",
        description: "A Frontend Developer is needed to build high-quality.",
    },
    {
        id: 5,
        state: "PortsMouth, New Hampshire",
        title: "Frontend Developer",
        description: "A Frontend Developer is needed.",
    },
    {
        id: 6,
        state: "New York, New York",
        title: "Frontend Developer",
        description: "A Frontend Developer is needed to build high-quality.",
    },
];
