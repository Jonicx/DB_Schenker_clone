import React from "react";
import background from "../../Assets/DbSchenker-header-cl-uk.webp";
import LogisticsMatter from "../../Assets/DbSchenker-blog-logo.webp";
import ArticleCarousel from "../Articles/ArticleCarousel";
import MediaCenter from "../../Assets/db-schenker-insights-db-mediathek.webp"
import { insightsData, insightsIndexData } from "./config/insightsData";
import TagCarousel from "../Tags/TagCarousel";

export default function Insights() {
    return ( 
        <div className="flex flex-col max-w-screen-6xl">
            {/* Image Section */}
            <div className="relative w-full h-[70vh] overflow-hidden pb-20">
                <img
                    src={background} // Use the imported background variable here
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dimmed Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                {/* Text Overlay */}
                <div className="relative top-48 lg:top-20 z-10 flex flex-col items-start justify-center h-full px-0">
                    <div className="px-10">
                        <h1 className="text-white font-normal text-5xl xl:text-9xl">
                            Get to know us.
                        </h1>
                        <div className="w-8 h-1 bg-red-600  mt-2 rounded-full"></div>
                    </div>
                </div>
            </div>
            {/* end of section */}

            <div className="flex flex-col items-center justify-center pt-10 pb-10">
                <div className="max-w-4xl py-8 px-6 space-y-11">
                    <h1 className="text-3xl font-normal">
                        Logistics Matters: Your window into the world of forward-thinking logistics solutions!
                    </h1>
                    <p className="text-xl font-extralight">
                        In our blog, we explore the latest trends, the day-to-day business of logistics, and new technologies and innovations that are shaping the transport sector. Dive in and discover how we are mastering the global logistics challenges of today and tomorrow. Stay informed, inspired, and ready for the future of logistics.
                    </p>
                    <img
                        src={LogisticsMatter} // Use the imported background variable here
                        alt="Logistics Matters"
                        className="w-auto h-44 mx-auto"
                    />
                </div>
            </div>
            {/* end of section */}

            <div className="mx-auto pb-16" style={{ margin: '0rem', marginRight: '0rem', marginLeft: '0rem', maxWidth: '100%' }}>
                <ArticleCarousel />
            </div>
            {/* end of section */}

            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-20">
                <div className="container mx-auto p-4">
                    {/* Card Container */}
                    <div className="space-y-20 flex-shrink-0">
                        {/* Individual Card */}
                        <div className="flex flex-col lg:flex-row items-center lg:gap-10">

                            {/* Image Section */}
                            <div
                                className="relative w-full lg:w-1/2 h-64 rounded-lg bg-cover bg-center flex-shrink-0"
                                style={{
                                    height: "26rem", // Adjust height as needed
                                    backgroundImage: `url(${MediaCenter})`, // Ensure the image URL is passed correctly
                                }}
                            >
                                {/* Button Overlay */}
                                <button
                                    className="absolute bottom-4 left-4 bg-black/40 text-white text-xs px-4 py-2 font-extrabold rounded-full shadow-lg hover:bg-gray-200"
                                >
                                    DB Schenker
                                </button>
                            </div>

                            {/* Description Section */}
                            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center gap-4">
                                <p className="text-sm font-light text-slate-500 lg:mb-7">Media center</p>
                                <h1 className="text-3xl lg:text-3xl font-normal text-black mb-2">
                                    Stay up-to-date
                                </h1>
                                <p className="text-base lg:text-xl font-extralight text-black">
                                    Access our most recent press releases, media downloads, and archives, wherever and at anytime that you wish, for the latest news and updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of section */}

            <div className="flex flex-col items-center justify-center pt-10 pb-16">
                <div className="max-w-4xl py-8 px-6 space-y-5">
                    <h1 className="text-3xl font-normal">
                        For generations to come
                    </h1>
                    <p className="text-xl font-light">
                    150 years ago, we were beginners in every way. Today we are again. As a company and as an industry, we face enormous challenges that require us to change how we all work and live. There is no single solution – we know that. Everything we do now can only be the beginning.
                    </p>

                </div>
            </div>
            {/* end of section */}

            <div className="flex flex-col items-center w-full pb-16">
                {/* Content on Gray Background */}
                <div className="w-full bg-gray-100 py-10">
                    <div className="flex overflow-x-auto justify-center gap-12 max-w-8xl py-10 px-2 mx-auto scrollbar-hide"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {insightsData.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center text-center space-y-3 flex-shrink-0 snap-center"
                            >
                                <div
                                    className={`flex items-center justify-center`}
                                >
                                    <h3 className="text-[3.75rem]  font-[1000]">{item.title}</h3>
                                </div>
                                <div className="w-14 h-1 bg-teal-700 mt-2 rounded-full"></div>
                                <div className="gap-3 flex flex-col items-center">
                                    <p className="text-base font-light max-w-xs">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* end of section */}

            <div className="flex flex-col items-center justify-center pt-10 pb-16">
                <div className="max-w-4xl py-8 px-6 space-y-5">
                    <h1 className="text-3xl font-normal">
                        Your business deserves to be in tune with tomorrow
                    </h1>
                    <p className="text-xl font-light">
                        That’s why we’re ready to hit the road toward sustainable logistics. We believe that sustainable logistics requires a movement. We want to join forces and tackle these challenges with you – as we need every hand on deck to create a sustainable and worthwhile future.
                    </p>

                </div>
                <div className="max-w-4xl  px-6 space-y-5">
                    <h1 className="text-3xl font-normal">
                        Our commitment
                    </h1>
                    <p className="text-xl font-light">
                        New paths are created by walking. We’ve realized that we must change course – even more than we currently do – to preserve the world as we know it. Environmentally, socially and governance-minded. 
                        <br/>
                        <br/>

                        We’re aware that this is a historic task. But we’re convinced that we will succeed if we all pitch in. We’re ready to take responsibility. For us and for others. We will move forward with courage in the transport and logistics industry to become more sustainable, transparent, and accountable in everything we do. We strive to grow our business through supporting our employees, customers, and society in the most sustainable way – to ensure a better future for our planet and future generations.
                    </p>

                </div>
            </div>
            {/* end of section */}

            <div className="flex flex-col items-center justify-center pt-10 pb-16 space-y-10">
                    <h1 className="max-w-2xl text-4xl text-center lg:text-6xl font-normal block">
                        <p className="text-center lg:text-6xl font-normal text-4xl block">
                            "We believe this challenge can’t be solved alone but needs joint efforts by participants in the supply chain ecosystem."
                        </p>
                    </h1>
                    <p className="text-sm font-extralight text-gray-500">Jochen Thewes / Chief Executive Officer</p>
            </div>
            {/* end of section */}

            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-20 ">
                <div className="container mx-auto p-4">
                    {/* Card Container */}
                    <div className="space-y-20 flex-shrink-0">
                        {/* Individual Card */}
                        {insightsIndexData.map((item) => (
                            <div  key={item.id} className={`flex flex-col lg:flex-row items-center lg:gap-28 ${
                                item.id === 2 ? "lg:flex-row-reverse" : ""
                            }`}>
                                {/* Image Section */}
                                <div
                                    className={`relative w-full lg:w-1/2 h-64 rounded-lg bg-cover bg-center flex-shrink-0 ${item.bgColor}`}
                                    style={{
                                        height: "26rem", // Adjust height as needed
                                        backgroundImage: `url(${item.image})`, // Ensure the image URL is passed correctly
                                    }}
                                >
                                    {/* Button Overlay */}
                                    <button
                                        className="absolute bottom-4 left-4 bg-black/80 text-white text-xs px-4 py-2 font-extrabold rounded-full shadow-lg hover:bg-gray-200"
                                    >
                                        {item.button}
                                    </button>
                                </div>

                                {/* Description Section */}
                                <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                                    <p className="text-sm font-light text-slate-500 ">{item.subheading}</p>
                                    
                                    <h1 className="text-3xl lg:text-3xl font-normal text-black mb-2">
                                        {item.title}
                                    </h1>
                                    <p className="text-base lg:text-xl font-extralight text-black mb-6">
                                        {item.description}
                                    </p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                <TagCarousel />
            </div>

        </div>
    );
}
