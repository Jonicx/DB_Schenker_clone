import React, { useEffect, useRef, useState } from "react";
import { jobs } from "../data/Jobs";
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
        className="flex gap-5 snap-x snap-mandatory pb-6 scrollbar-hide"
        style={{
          padding: "2rem", // Add padding to left and right of the container
          overflowX: "auto", // Allow horizontal scrolling
          width: "98vw", // Full viewport width
          maxWidth: "100%", // Prevent container overflow
          boxSizing: "border-box", // Ensure padding is included in width calculation
        }}
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex-shrink-0 snap-start rounded-md bg-white "
            style={{
              boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.1)",
              width: "27rem", // Fixed width for each job card
              height: "22rem", // Fixed height for each job card
            }}
          >
            <div className="relative bg-white p-8 rounded-lg h-full">
              {/* Job State */}
              <div className="text-sm text-gray-500 font-light mb-2">{job.state}</div>

              {/* Job Title */}
              <h3 className="text-3xl font-normal mb-2">{job.title}</h3>

              {/* Job Description */}
              <p
                className="absolute text-gray-700 text-lg"
                style={{ paddingRight: "6rem", top: "50%", fontWeight: "450" }}
              >
                {job.description}
              </p>

              {/* Job Button */}
              <button
                className="absolute bottom-6 left-6 bg-white text-[#005F6A] hover:text-teal-800 rounded-full font-semibold px-5 py-3 transition duration-200"
                style={{
                  boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                View Job
              </button>
            </div>
          </div>
        ))}
        {/* "Discover More Jobs" Card */}
        <div
          className="flex-shrink-0 snap-start"
          style={{
            boxShadow: "4px 6px 15px rgba(0, 0, 0, 0.1)",
            width: "27rem",
            height: "22rem",
          }}
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
        <div className="w-1/5 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#005F6A] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
