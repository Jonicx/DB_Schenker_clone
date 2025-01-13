import React from "react";
import LoginSection from "./LoginSection";
import {ShippingForm} from "./ShippingForm";
import TrackingForm from "./TrackingForm";

export default function HeroSection() {
    return (
      <div className="relative h-[630px]">
        {/* Hero Background */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="A logistics-themed background with cargo containers"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50">

        </div>

        {/* Forms Section */}
        <div className="absolute inset-x-0 top-[110%] transform translate-y-[-27%] z-10 lg:-translate-y-[48%] px-0">
          <div className="px-10">
            <h1 className="text-white font-normal text-[clamp(1rem,5vw,3rem)]">
              Accelerating Logistics
            </h1>
            <div className="w-8 h-1 bg-red-600 mt-4 rounded-full"></div>
          </div>
          <div className="mx-auto px-4 max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 bg-none rounded-lg p-6">
              <div className="col-span-12 lg:col-span-2 order-2 lg:order-1">
                <LoginSection />
              </div>
              <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                <ShippingForm />
              </div>
              <div className="col-span-12 lg:col-span-3 order-3 lg:order-3">
                <TrackingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
