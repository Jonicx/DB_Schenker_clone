import React from "react";
import { blogs } from "../../data/blogs";
import BlogCard from "./BlogCard";

export default function BlogCarousel() {
    return (
        <div className="container mx-auto justify-center">
            <div className="pt3">
                <h1 className="lg:text-3xl text-2xl lg:mb-24 mb-10 text-center">
                    What moves us
                </h1>
            </div>
            <div 
                className="flex overflow-x-auto gap-2 snap-x snap-mandatory pb-6"
            >
                <div className="container mx-auto p-4">
                    <BlogCard blog={blogs} />
                </div>
            </div>
        </div>
    ) 
}  // End of BlogCarousel component 