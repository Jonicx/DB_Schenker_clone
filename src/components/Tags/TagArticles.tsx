import React from "react";

interface Article {
  id: string;
  title: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
}

interface ArticleCardProps {
  article: Article;
}

export function TagArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="overflow-hidden min-w-[450px] max-w-[450px] snap-start">
      {/* Date */}
      <div className="top-4 left-4 p-1 text-gray-400 font-light text-sm">{article.date}</div>

      {/* Image Section */}
      <div className="relative rounded-md overflow-hidden">
        {/* Displaying the actual image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[20rem] object-cover rounded-md shadow-md"
        />
        
        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 max-w-[90%]">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-white/90 backdrop-blur-sm text-black font-bold rounded-full 
                        truncate max-w-full hover:max-w-none transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title and Link Section */}
      <div className="max-w-[450px] p-1 mt-5 min-h-[100px] flex flex-col justify-between">
        <h3 className="text-xl text-black font-medium">{article.title}</h3>
      </div>
      <div className="max-w-[450px] p-1">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-[#004D55] hover:text-teal-700 font-extrabold"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
