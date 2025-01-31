import DbSchenkerPowering from "../Assets/header-cl-uk-promotion.webp"
import dbSchenkerEmployess from "../Assets/header-image-gpt.webp"
import dbSchenkerSemiConductor from "../Assets/e-mobility-image.webp"

export interface Articles {
    title: string;
    image: string;
    buttons: Array<{ text: string; url?: string }>;
    date: string;
    bgColor: string;
    id: string;
  }
   
  export const articles: Articles[] = [
    {
      id: '1',
      title: 'DB SCHENKER is Elevating Logistics and Empowering Businesses',
      image: DbSchenkerPowering,
      buttons: [
        { text: 'Blog', url: '#' },
        { text: 'Contract Logistics', url: '#' },
      ],
      bgColor: 'bg-green-600',
      date: 'Nov 19, 2024',
    },
    {
      id: '2',
      title: 'Interested in how DB SCHENKER employees get fit for the world of AI?',
      image: dbSchenkerEmployess,
      buttons: [
        { text: 'Blog', url: '#' },
        { text: 'Artificial Intelligence', url: '#' },
      ],
      bgColor: 'bg-orange-700',
      date: 'Nov 13, 2024',
    },
    {
      id: '3',
      title: 'Powering the Future of e-Mobility',
      image: dbSchenkerSemiConductor,
      buttons: [
        { text: 'PR', url: '#' },
        { text: 'News', url: '#' },
        { text: 'Smart Logistics', url: '#' },

      ],
      bgColor: 'bg-yellow-500',
      date: 'Oct 9, 2024',
    },
    {
      id: '4',
      title: 'DB Schenker to launch new warehouse for semiconductors in the Netherlands',
      image: 'Powering the Future of e-Mobility',
      buttons: [
        { text: 'PR', url: '#' },
        { text: 'News', url: '#' },
        { text: 'Smart Logistics', url: '#' },

      ],
      bgColor: 'bg-yellow-500',
      date: 'Oct 9, 2024',
    },
  ];
  