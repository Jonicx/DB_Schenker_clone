import React, { useEffect, useRef, useState } from "react";
import { articles } from "../../data/Articles";
import ArticleCard from "./ArticleCard";
import "../../style/styles.css"; // Ensure global CSS for scrollbar-hide

export default function ArticleCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Filter to include only the first three articles
  const filteredArticles = articles.filter(article => ["1", "2", "3"].includes(article.id));

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
    <div className="container mx-auto max-w-fit justify-center">
      <div className="pt-1">
        <h1 className="lg:text-3xl text-2xl lg:mb-24 mb-10 text-center">
          Trending articles for you
        </h1>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-1 snap-x snap-mandatory pb-6 scrollbar-hide"
        style={{
          maxWidth: "100%", // Constrain width to prevent overflow
        }}
      >
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center h-1">
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
