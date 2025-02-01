import React, { useEffect, useRef, useState } from "react";
import { jobs } from "../../data/Jobs";
import { ArrowRight } from "lucide-react";

export default function JobCard() {
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

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Horizontal Slider with Custom Scrollbar */}
      <div
        ref={scrollRef}
        className="flex gap-7 snap-x snap-mandatory p-7 overflow-auto w-[98vw] box-border max-w-full  scrollbar-hide"
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex-shrink-0 w-[25rem] h-[20rem]  snap-start rounded-md bg-white shadow-custom-dark"
          >
            <div className="flex flex-col bg-white gap-4 pl-5 rounded-lg h-full">
              {/* Job State */}

              <div className=" flex flex-col pt-5 gap-2">
                <p className="text-sm font-light ml-2 text-slate-400 ">{job.state}</p>
                
                {/* Job Title */}
                <h3 className="text-3xl ml-2 font-normal text-black ">{job.title}</h3>
              </div>

              {/* Job Description */}

              <div className=" py-7 flex flex-col gap-10 justify-end flex-1">
                <p
                  className="text-base font-normal ml-2  text-black"
                  
                >
                  {job.description}
                </p>

                {/* Job Button */}
                <button
                  className=" bg-white w-1/3 ml-2 text-[#005F6A] hover:text-teal-800 shadow-custom-medium rounded-full font-semibold px- py-3">
                  View Job
                </button>
              </div>

            </div>
          </div>
        ))}
        {/* "Discover More Jobs" Card */}
        <div
          className="flex-shrink-0 w-[25rem] h-[20rem]  snap-start rounded-md bg-white shadow-custom-dark"
        >
          <div className="relative bg-white p-10 rounded-lg h-full">
            {/* Job Title */}
            <h3 className="text-3xl font-normal mb-2 text-[#005F6A]">{jobs.length} Discover more jobs</h3>

            {/* Job Button */}
            <button className="absolute bottom-1 right-4 rounded-full font-bold">
              <ArrowRight strokeWidth="0.5" width="140" height="140" className="text-[#005F6A]" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="flex justify-center items-center h-1">
        <div className="lg:w-1/5 w-2/3 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#005F6A] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
