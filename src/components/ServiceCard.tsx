import React from 'react';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="min-w-[330px] flex-shrink-0 snap-start p-2">
      <div className=" rounded overflow-hidden transform transition-all duration-300 ">
        <div className={`relative h-96 ${service.bgColor} hover:scale-105 `} style={{height: '30rem'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-1 mt-5 min-h-[100px] flex flex-col justify-between">
          <h3 className="bottom-4 left-4 text-3xl text-black">{service.title}</h3>
          <a
            href={service.link}
            className="items-center gap-2 text-[#005F6A] hover:text-teal-800 font-extrabold transition-colors duration-200"
          >
            Start here
          </a>
        </div>
      </div>
    </div>
  );
}