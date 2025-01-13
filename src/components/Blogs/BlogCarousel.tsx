import React from "react";
import { blogs } from "../../data/blogs";
import BlogCard from "./BlogCard";

export default function BlogCarousel() {
    return (
        <div className="container mx-auto" style={{ justifyItems: 'center'}}>
            <div className="pt3">
                <h1 className="text-4xl mb-24" style={{textAlign:"center"}}>
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