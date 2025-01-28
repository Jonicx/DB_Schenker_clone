import React from "react";
import videos from "../../Assets/dbSchenker-business-background.webm";
import dbSchenkerEservices from '../../Assets/dbschenker-eservices-stage.webp'
import { business } from "./config/business.tsx";
import dbSchenkerVideo from '../../Assets/db-schenker-video-business.mp4';

export default function Business() {
    return (
        <div className="flex flex-col max-w-screen-6xl">
            {/* Video Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videos} type="video/webm" />
                    <source src={videos} type="video/mp4" />
                    <img
                        src={videos}
                        alt="Fallback background"
                        className="w-full h-full object-cover"
                    />
                </video>
                {/* Text Overlay */}
                <div className="relative top-48 z-10 flex flex-col items-start justify-center h-full text-center px-0">
                    <div className="px-10">
                        <h1 className="text-white font-normal text-5xl">
                            Buisness
                        </h1>
                        <div className="w-8 h-1 bg-red-600 mt-2 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Additional Content Section */}
            <div className="flex flex-col items-center justify-center pt-10 pb-10">
                <div className="max-w-4xl py-8 px-4 space-y-11">
                    <h1 className="text-3xl font-normal">
                        Access all your transport and logistics services on one platform.
                    </h1>
                    <p className="text-xl font-extralight">
                        Looking for a quick quote? Or a long-term partnership? <b className="font-extrabold"> DB SCHENKER | connect</b> offers you our most advanced logistics solutions yet. It incorporates all services into one portal, giving you maximum support at every stage of your supply chain.
                    </p>
                    <p className="text-xl font-extralight">
                        For <b className="font-extrabold"> connect 4.0 </b> and <b className="font-extrabold">eSchenker </b> customers, we have good news for you! Your account has automatically been upgraded to <b className="font-extrabold"> DB SCHENKER | connect</b>. Enjoy the benefits of all your services on one platform.   
                    </p>
                </div>
                {/* Add more components here as needed */}
                <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory ">
                    <div className="container mx-auto p-4">
                        {/* Card Container */}
                        <div className="space-y-20 flex-shrink-0">
                            {/* Individual Card */}
                            {business.map((item) => (
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
                                        <h1 className="text-3xl lg:text-3xl font-normal text-black mb-2">
                                            {item.title}
                                        </h1>
                                        <p className="text-base lg:text-xl font-extralight text-black mb-6">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-0">
                                            <a
                                                href="#"
                                                className="text-[#005F6A] font-extrabold text-xl hover:text-teal-800 transition duration-200"
                                            >
                                                {item.link}
                                            </a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right text-[#005F6A]"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* New Video Section */}
            <div className="flex items-center justify-center py-10 lg:min-h-screen">
                <div className="w-full max-w-6xl px-10">
                    <h2 className="text-3xl font-normal text-center mb-5 pb-10">
                        Most trusted logistics company
                    </h2>
                    <div className="relative w-full aspect-video">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                        >
                            <source
                                src={dbSchenkerVideo}
                                type="video/webm"
                            />
                            <source
                                src={dbSchenkerVideo}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="text-sm font-extralight text-center ">
                        Your logistics – our factory / DB Schenker
                    </p>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-20 mt-12">
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
                                    backgroundImage: `url(${dbSchenkerEservices})`, // Ensure the image URL is passed correctly
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
                            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                                <p className="text-sm font-light text-slate-500 lg:mb-7">Digital Services Hub, Land Transport</p>
                                <h1 className="text-3xl lg:text-3xl font-normal text-black mb-2">
                                    Advanced eServices
                                </h1>
                                <p className="text-base lg:text-xl font-extralight text-black mb-6">
                                    Enjoy the benefits of all your services on one platform.
                                    Advanced eServicesContinue 
                                    <br/>
                                    <br/>
                                    Our American air transport eServices get your business moving! They help you ship more productively, more sustainably, and with less effort.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

