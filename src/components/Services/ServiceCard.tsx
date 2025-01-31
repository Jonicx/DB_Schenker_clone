//ServiceCard.tsx
import React from 'react';
import type { Service } from '../../data/Services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="min-w-[300px] sm:min-w-[330px] flex-shrink-0 snap-start p-2">
      <div className="rounded-sm overflow-hidden transform transition-transform duration-300">
        <div
          className="relative h-96 bg-cover bg-center hover:scale-105"
          style={{
            height: '30rem',
            backgroundImage: `url(${service.image})`, // Dynamically sets the WebP image
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <div className="py-4 mt-5 flex flex-col justify-between">
          <h3 className="text-2xl lg:text-3xl font-normal text-black">{service.title}</h3>
          <a
            href={service.link}
            className="mt-4 gap2 text-[#005F6A] hover:text-teal-800 font-extrabold transition-colors duration-200"
            aria-label={`Learn more about ${service.title}`}
          >
            Start here
          </a>
        </div>
      </div>
    </div>
  );
}