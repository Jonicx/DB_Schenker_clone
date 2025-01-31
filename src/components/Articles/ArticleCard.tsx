import React from "react";
import { Articles } from "../../data/Articles";

interface ArticleCarouselProps {
  article: Articles;
}

export default function ArticleCard({ article }: ArticleCarouselProps) {
  return (
    <div className="min-w-[450px] p-2">
      {/* Date */}
      <div className="top-4 left-4 p-1 text-gray-500 font-light text-sm mb-2">{article.date}</div>

      <div className="rounded overflow-hidden">
        <div
          className="relative rounded bg-cover bg-center"
          style={{
            height: "20rem",
            backgroundImage: `url(${article.image || ""})`, // Dynamically sets the background image
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          {/* Buttons */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {article.buttons.map((button, index) => (
              <button
                key={index}
                className="bg-white/90 text-black text-xs px-4 py-1 rounded-full font-bold shadow hover:bg-gray-200"
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>

        {/* Title and Link */}
        <div className="max-w-[450px] p-1 mt-5 min-h-[100px] flex flex-col justify-between">
          <h3 className="bottom-4 left-4 text-xl text-black font-light">{article.title}</h3>
        </div>
        {/* <div className="max-w-[450px] p-1 mt-2 flex flex-col">
          <a
            href="#"
            className=" items-center text-teal-800 hover:text-teal-800 font-extrabold transition-colors duration-200"
          >
            Read more
          </a>
        </div> */}
      </div>
    </div>
  );
}
