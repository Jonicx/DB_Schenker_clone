import React from "react";
import LoginSection from "./LoginSection";
import {ShippingForm} from "./ShippingForm";
import TrackingForm from "./TrackingForm";
import videos from "../../Assets/db_schenker_hero.webm"

export default function HeroSection() {
    return (
      <div className="relative font-dbheadr h-[80vh] xs:h-[95vh] sm:h-[95vh] md:h-[90vh] lg:h-[95vh] xl:h-[95vh]">
        {/* Hero Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full  h-full object-cover lg:object-cover xl:object-none"
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
            {/* Optional Fallback */}
            <p>Your browser does not support WebM videos. Please update your browser.</p>
          </video>
        </div>

        {/* Forms Section */}
        <div className="absolute inset-x-0 top-[115%] xs:top-[120%] xl:top-[95%] lg:top-[105%] md:top-[105%] sm:top-[110%] transform translate-y-[-27%] z-10 lg:-translate-y-[48%] px-0">
          <div className="px-10">
            <h1 className="text-white font-dbheadr font-normal lg:text-5xl text-3xl">
              Accelerating Logistics
            </h1>
            <div className="w-8 h-1 bg-red-600 mt-4 rounded-full"></div>
          </div>
          <div className="mx-auto lg:px-4 max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 bg-none rounded-lg p-6">
              <div className="col-span-12 lg:col-span-2 order-3 lg:order-1">
                <LoginSection />
              </div>
              <div className="col-span-12 lg:col-span-7 order-2 lg:order-2">
                <ShippingForm />
              </div>
              <div className="col-span-12 lg:col-span-3 order-1 lg:order-3">
                <TrackingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
