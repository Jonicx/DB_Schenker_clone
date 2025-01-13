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
                    className={`flex flex-col sm:flex-row items-center lg:gap-28 ${
                        blog.id === 2 ? "sm:flex-row-reverse" : ""
                    }`}
                >
                    {/* Image Replacement: Colored Background */}
                    <div
                        className={`relative flex-shrink-0 sm:w-1/2 h-64 rounded ${blog.bgColor}`}
                        style={{ height: '26rem'}}
                    >
                        <button
                            className="absolute bottom-4 rounded-full font-extrabold left-4 bg-white text-black text-xs px-4 py-2 shadow hover:bg-gray-200"
                         >
                            {blog.button}
                        </button>
                    </div>

                    {/* Description */}
                    <div className="sm:w-1/2 p-7">
                        <p className="text-sm font-light text-slate-500 mb-7">{blog.subheading}</p>
                        <h2 className="text-3xl font-normal mb-7">{blog.title}</h2>
                        <p className="text-xl font-light mb-10">{blog.description}</p>
                        <a
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
