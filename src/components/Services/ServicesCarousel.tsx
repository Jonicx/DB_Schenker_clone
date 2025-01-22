//ServiceCarousel.tsx
import React, { useRef, useState, useEffect } from 'react';
import { services } from '../../data/Services';
import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const scrollLeft = element.scrollLeft;
      const maxScroll = element.scrollWidth - element.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.offsetWidth || 300;
      scrollRef.current.scrollBy({
        left: cardWidth + 3, // Assuming a 16px gap between cards
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[45vh] lg:mt-10 -sm:mt-[33vh] -md:mt-[30vh] max-w-fit">
      <div className="pt-3">
        <h1 className="text-[clamp(1rem,5vw,3rem)] mb-3">Your new favorite track</h1>
      </div>

      <div className="relative lg:ml-48 ml-12 ">
        <div className="absolute lg:-left-44 -left-16 top-[80%] z-10 -translate-y-1/2">
          <button
            onClick={scrollRight}
            className="transform hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to the next service"
            tabIndex={0}
          >
            <ArrowRight 
              strokeWidth="0.7"
              className="text-[#005F6A] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
            />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-1 snap-x snap-mandatory pb-6 scrollbar-hide"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="mt-4 flex justify-center items-center h-1">
          <div className="w-1/5 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#005F6A] transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
