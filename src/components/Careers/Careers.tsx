import React, { useState } from "react";
import videos from "../../Assets/dbSchenker-Career-Page.webm";
import MariamDbWorker from "../../Assets/dbShecnker-employee-story-quote-image.webp";
import RodDbWorker from "../../Assets/dbSchenker-rob-3-global-en-.webp";
import DbSchenkerFallback from "../../Assets/missing-image-fallback-svg-data.svg";
import DbMiguel from "../../Assets/dbSchenker-miguel-image.webp";
import DbMarta from "../../Assets/dbSchenker-marta-image.webp";
import DbEva from "../../Assets/dbSchenker-eva-image.webp";
import DbJulius from "../../Assets/dbSchenker-julius-image.webp";
import { careerData } from "./config/CareerData";
import Benefitspoe1 from "../../Assets/dbSchenker-benefits-pos3.webp"
import Benefitspoe2 from "../../Assets/dbSchenker-benefits-pos4.webp"
import Benefitspoe3 from "../../Assets/dbSchenker-benefits-pos2.webp"
import Benefitspoe4 from "../../Assets/dbschenker-career-benefits-mind-body-balance.webp"
import Jobs from "../Jobs/Jobs";


export default function Career() {

    const [activeTab, setActiveTab] = useState(0);

    // Tab data
    const tabData = [
        {
            title: "Making an impact",
            image: RodDbWorker, // Replace with actual image for "Making an impact"
            headline: "Rob knows no boundaries or limitations",
            description: "He’s excited by opportunities to drive change that impacts the company as a whole. ",
            signature: "Rob, Continuous Improvement Project Manager OpEx BeNeLux | DB SCHENKER",
        },

        {
            title: "Developing my skills",
            image: DbSchenkerFallback, // Replace with actual image for "Developing skills"
            headline: "Mariam is making history",
            description: "She’s continually growing her skills and breaking ground for women in her region.",
            signature: "Mariam, Forklift Driver | DB SCHENKER",
        },
        {
            title: "Greener future",
            image: MariamDbWorker, // Replace with actual image for "Greener future"
            headline: "Natalia is passionate about green projects",
            description: "She pioneered sustainability initiatives in her own country and inspired others to follow suit.",
            signature: "Natalia, Head of Procurement | Romania DB SCHENKER",
        },
        {
            title: "Finding work-life balance",
            image: DbSchenkerFallback, // Replace with actual image for "Work-life balance"
            headline: "Frank enjoys the freedom of the highway",
            description:
                "He appreciates the flexibility and variety as he drives around 140,000 km a year. ",
            signature: "Frank, Truck Driver | DB SCHENKER",
        },
    ];

    return (
        <div className="flex flex-col max-w-screen-6xl">
            {/* Video Section */}
            <div className="relative w-full h-[90vh] overflow-hidden">
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
                            Careers
                        </h1>
                        <div className="w-8 h-1 bg-red-600 mt-2 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-10 pb-10">
                <div className="max-w-4xl py-8 px-4 space-y-8">
                    <p className="text-xl font-extralight">
                    Do you want a career that’s focused on making an impact? Or possibly you’re looking for the flexibility to balance your work and family life? Or maybe a little of both? Everyone has a unique motivation, but whatever matters to you, you’ll be able to find your fit with a role at DB SCHENKER. Whether you’re just starting out on your journey, or you’re ready to level up your career, let’s get moving together.​
                    </p>
                    <h1 className="text-3xl font-normal">
                    What are your career priorities? 
                    </h1>
                    <p className="text-xl font-extralight">
                    What matters to you will be as diverse as we are as individuals. We all focus on different aspects of a potential job based on factors such as our background, personal aspirations, and life phase.   
                    </p>
                </div>
            </div>
            {/* End of section */}

            <div className="flex flex-col items-center w-full pb-20">
                {/* Header on White Background */}
                <div className="w-full bg-white pt-8 pb-2">
                    <h1 className="text-3xl font-normal text-center">Are any of these important to you?</h1>
                </div>

                {/* Content on Gray Background */}
                <div className="w-full bg-gray-100 py-10">
                    <div className="flex overflow-x-auto gap-8 max-w-8xl p-10 mx-auto scrollbar-hide"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {[
                            {
                                color: "bg-green-600",
                                title: "Contributing to a greener future",
                                description:
                                    "Join our innovative team and we can accelerate the transformation to a more sustainable tomorrow together.",
                            },
                            {
                                color: "bg-purple-900",
                                title: "Finding work-life balance",
                                description:
                                    "Many of our positions give you the flexibility to shape your own schedule so you can work in a way that supports your life.",
                            },
                            {
                                color: "bg-teal-700",
                                title: "Developing your skills",
                                description:
                                    "You never stop growing, and with our range of development opportunities, neither will your career potential.",
                            },
                            {
                                color: "bg-orange-600",
                                title: "Making an impact",
                                description:
                                    "At DB SCHENKER, you're encouraged to speak up, voice your opinion, and influence decision-making.",
                            },
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center text-center space-y-3 flex-shrink-0 snap-center"
                            >
                                <div
                                    className={`w-44 h-44 ${item.color} rounded-full flex items-center justify-center`}
                                ></div>
                                <div className="w-14 h-1 bg-teal-700 mt-2 rounded-full"></div>
                                <div className="gap-3 flex flex-col items-center">
                                    <h3 className="text-2xl font-normal">{item.title}</h3>
                                    <p className="text-base font-light max-w-xs">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End of section */}

            {/* Workers Content on Tabs  */}
            <div className="bg-white py-12 pb-20">
                <div className="max-w-6xl mx-auto px-4 text-center space-y-10">
                    {/* Title */}
                    <h1 className="text-3xl font-normal">This matters to our people.</h1>
                    {/* Tab Navigation */}
                    <div className="mt-6">
                        {/* Tab container */}
                        <div
                            className="flex lg:justify-center overflow-x-auto px-4 sm:px-6 gap-10 scrollbar-hide w-full"
                            style={{
                                scrollSnapType: "inline mandatory",
                            }}
                        >
                            {tabData.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-xl  ${
                                        activeTab === index
                                            ? "font-extrabold border-b-2 border-black"
                                            : "font-light "
                                    } hover:text-black whitespace-nowrap`}
                                    style={{
                                        scrollSnapAlign: "start",
                                    }}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto mt-12 px-4 gap-8">
                    {/* Image Section */}
                    <div
                        className={`w-full lg:w-1/2 h-96 flex items-center justify-center rounded-sm ${
                            tabData[activeTab].image === "bg-teal-900" ? "DbSchenkerFallback" : ""
                        }`}
                    >
                        {tabData[activeTab].image !== "DbSchenkerFallback" ? (
                            <img
                                src={tabData[activeTab].image}
                                alt={tabData[activeTab].headline}
                                className="rounded-lg w-full h-full object-cover"
                            />
                        ) : (
                            <img
                                src={tabData[activeTab].image}
                                alt="Fallback"
                                className="w-1/2 h-auto"
                            />
                        )}
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 lg:px-10 flex flex-col">
                        <h3 className="text-3xl font-normal">{tabData[activeTab].headline}</h3>
                        <p className="mt-4 text-xl font-extralight">{tabData[activeTab].description}</p>
                        <p className="mt-4 text-xl font-extralight">{tabData[activeTab].signature}</p>
                    </div>
                </div>
            </div>
            {/* End of section */}

            {/* Employees Content on gray background */}

            <div className="flex flex-col items-center w-full pb-20">
                {/* Content on Gray Background */}
                <div className="w-full bg-gray-100 py-10">
                    <div
                        className="flex overflow-x-auto gap-8 max-w-8xl p-10 mx-auto scrollbar-hide"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {[
                            {
                                image: DbMiguel, // Replace with the actual image path or URL
                                title: "Miguel",
                                description:
                                    "I want to work on a variety of tasks with up-to-date tools.",
                            },
                            {
                                image: DbMarta, // Replace with the actual image path or URL
                                title: "Marta",
                                description:
                                    "I enjoy a friendly and positive working environment.",
                            },
                            {
                                image: DbEva, // Replace with the actual image path or URL
                                title: "Eva",
                                description:
                                    "Family is important to me so I look for work-life balance.",
                            },
                            {
                                image: DbJulius, // Replace with the actual image path or URL
                                title: "Julius",
                                description:
                                    "Teamwork! You can only make a difference working together.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-3 flex-shrink-0 snap-center"
                            >
                                {/* Image Section */}
                                <div className="w-44 h-44 rounded-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Divider */}
                                <div className="w-14 h-1 bg-teal-700 mt-2 rounded-full"></div>
                                {/* Text Section */}
                                <div className="gap-3 flex flex-col items-center">
                                    <h3 className="text-2xl font-normal">{item.title}</h3>
                                    <p className="text-base font-light max-w-xs">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End of section */}

            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-20 ">
                <div className="container mx-auto p-4">
                    {/* Card Container */}
                    <div className="space-y-20 flex-shrink-0">
                        {/* Individual Card */}
                        {careerData.map((item) => (
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

            {/* if this matters to you it matters to us */}

            <div className="flex flex-col items-center w-full pb-20">
                {/* Header on White Background */}
                <div className="w-full bg-white pt-8 pb-2">
                    <h1 className="text-3xl font-normal text-center px-5">If it matters to you, it matters to us. Browse our open positions to find out more.</h1>
                </div>

                {/* Content on Gray Background */}
                <div className="w-full bg-gray-100 py-10">
                    <div className="flex overflow-x-auto gap-8 max-w-8xl p-10 mx-auto scrollbar-hide"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {[
                            {
                                image: Benefitspoe1, // Replace with the actual image path or URL
                                title: (
                                    <>
                                        Is a career with purpose <br/> important to you?
                                    </>
                                ),
                                description:
                                    "We’re working on the future of sustainable logistics – come and join us!",
                            },
                            {
                                image: Benefitspoe2, // Replace with the actual image path or URL
                                title: 
                                (
                                    <>
                                        Is diversity and inclusion <br/> important to you?
                                    </>
                                ),
                                description:
                                    "We welcome people from all backgrounds to move with us.",
                            },
                            {
                                image: Benefitspoe3, // Replace with the actual image path or URL
                                title:(
                                    <>
                                        Is a strong team <br/> important to you?
                                    </>
                                ),
                                description:
                                    "Join a global network of colleagues and support is never far away.",
                            },
                            {
                                image: Benefitspoe4, // Replace with the actual image path or URL
                                title:(
                                    <>
                                    Are added incentives <br/> important to you?
                                    </>
                                ),
                                description:
                                    "Our range of benefits will make your career more rewarding.",
                            },

                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center text-center space-y-3 flex-shrink-0 snap-center"
                            >
                                <div className="w-44 h-44 rounded-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-14 h-1 bg-teal-700 mt-2 rounded-full"></div>
                                <div className="gap-3 flex flex-col items-center">
                                    <h3 className="text-2xl font-normal">{item.title}</h3>
                                    <p className="text-base font-light max-w-xs">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* end of section */}

            {/* jobs section */}
            <div className="mx-auto pb-16">
                <Jobs />
            </div>

        </div>
    )
}