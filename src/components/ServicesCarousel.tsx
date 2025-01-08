import React, { useRef, useState, useEffect } from 'react';
import { services } from '../data/Services';
import ServiceCard from '../components/ServiceCard';
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
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
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
    <div className="container mx-auto" style={{maxWidth: 'fit-content'}}>
      <div className="pt-3">
        <h1 className="text-5xl mb-10">
          Your new favorite track
        </h1>
      </div>

      <div className="relative ml-24" style={{marginLeft: '12rem'}}>
        <div className=' ' >
          <div className="absolute -left-24 top-3/4 -translate-y-1/2" style={{marginLeft:'-4rem', top:'80%', transform: 'translateY(-50%)'}}>
            <button
              onClick={scrollRight}
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label="Next slide"
            >
              <ArrowRight 
                strokeWidth="0.7"
                width="170" height="170" className="text-[#005F6A]" 
              />
            </button>
          </div>
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-6 scrollbar-hide"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
          <div className="mt-4 flex justify-center items-center h-1">
            <div className="w-1/5 h-1 bg-gray-200  rounded-full overflow-hidden">
              <div
                className="h-full bg-[#005F6A] transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
      </div>
    </div>
  );
} // End of ServicesCarousel component