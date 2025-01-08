export interface Blogs {
    id: number;
    title: string;
    description: string;
    image: string;
    subheading: string;
    button: string;
    link: string;
    bgColor: string;
}

export const blogs: Blogs[] = [
    {
        id: 1,
        title: 'The future of sustainable logistics',
        image: '',
        subheading: 'Corporate sustainability',
        description: 'Sustainable logistics requires a movement.',
        link: 'Join us',
        button: 'Sustainability ESG',
        bgColor: 'bg-blue-600'
    },
    {
        id: 2,
        title: 'The smart solutions you deserve',
        image: '',
        subheading: 'Innovation and digitalization',
        description: 'With our passionate teams and best-in-class partners, we’re challenging the status quo every day. Interested in tomorrow already today?',
        link: 'Stay ahead',
        button: 'Smart logistics',
        bgColor: 'bg-red-600'
    },
    {
        id: 3,
        title: 'Logistics Matters',
        image: '',
        subheading: 'Our logistics blog',
        description: 'This is us – and you! Tune into the news and stories that move our customers, the industry, and our teams.',
        link: 'Top of mind',
        button: 'Blog',
        bgColor: 'bg-green-600'
    }
]