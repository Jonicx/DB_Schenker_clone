import React from "react";
import type { Blogs } from "../../data/blogs";

interface BlogCardProps {
    blog: Blogs[]; // Expect an array of blogs
} 
 
export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="space-y-20">
            {blog.map((blog) => (
                <div
                    key={blog.id}
                    className={`flex flex-col lg:flex-row items-center lg:gap-28 ${
                        blog.id === 2 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                    {/* Image Section */}
                    <div
                        className="relative flex-shrink-0 w-full lg:w-1/2 h-64 rounded bg-cover bg-center"
                        style={{
                            height: "26rem",
                            backgroundImage: `url(${blog.image})`, // Dynamically sets the background image
                        }}
                    >
                        {/* Button Overlay */}
                        <button
                            className="absolute bottom-4 left-4 rounded-full font-extrabold bg-white text-black text-xs px-4 py-2 shadow hover:bg-gray-200"
                        >
                            {blog.button}
                        </button>
                    </div>

                    {/* Description */}
                    <div className="w-full lg:w-1/2 lg:p-7 flex flex-col">
                        <p className="text-sm font-light text-slate-500 lg:mb-7">{blog.subheading}</p>
                        <h2 className="text-3xl font-normal lg:mb-7">{blog.title}</h2>
                        <p className="text-xl font-light lg:mb-10">{blog.description}</p>
                        <a
                            href="#"
                            className="items-center text-[#005F6A] hover:text-teal-800 font-extrabold transition-colors duration-200"
                        >
                            {blog.link}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
