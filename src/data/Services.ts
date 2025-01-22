import digitalServices from "../Assets/db-schenker-digital-services-hub-stage.webp"
import TransportServices from "../Assets/bu-transport-thumbnail.webp"
import ContractLogistics from "../Assets/db-schenker-contract-logistics-stage.webp"
import SupplyChainSolution from "../Assets/db-schenker-4pl-advanced-logistics-services-stage.webp"
import OneOfUse from "../Assets/careers-thumbnail.webp"
import KnowUs from "../Assets/insights-thumbnail.webp"

export interface Service {
  title: string;
  image: string;
  link: string;
  bgColor: string;
}

export const services: Service[] = [
  {
    title: 'Digital services',
    image: digitalServices,
    link: '#',
    bgColor: 'bg-blue-500'
  },
  {
    title: 'Transport',
    image: TransportServices,
    link: '#',
    bgColor: 'bg-green-500'
  },
  {
    title: 'Contract logistics',
    image: ContractLogistics,
    link: '#',
    bgColor: 'bg-purple-500'
  },
  {
    title: 'Supply chain solutions',
    image: SupplyChainSolution,
    link: '#',
    bgColor: 'bg-orange-500'
  },
  {
    title: 'Become one of us',
    image: OneOfUse,
    link: '#',
    bgColor: 'bg-yellow-500'
  },
  {
    title: 'Get to know us',
    image: KnowUs,
    link: '#',
    bgColor: 'bg-purpel-500'
  },
];