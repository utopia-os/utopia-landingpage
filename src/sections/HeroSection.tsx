"use client";
import * as React from "react";

export const HeroSection: React.FC = () => {
  return (
      <section className="relative flex justify-center w-full bg-sky-500/15 text-base-content rounded-4xl overflow-hidden h-[calc(100vh-1em)]">
        <div className="flex w-full max-w-screen-2xl max-md:flex-col pt-20">
          <div className="flex flex-col gap-8 py-36 pr-12 pl-20 w-[55%] max-md:w-full max-md:items-center max-md:p-10 max-md:text-center">
            <h1 className="text-6xl font-bold leading-16 max-sm:text-4xl">
              Maps to connect and create
            </h1>
            <p className="leading-8 text-lg md:text-xl ">
              <b>Grow your Community with our Collaborative Maps</b> that empower
              everyone build decentralized real-life networks to co-create
              positive change in your area and everywhere in the world ✨
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="btn md:btn-lg rounded-full !bg-[#05966a] hover:!bg-[#048257] text-white">
                <span>Try out maps</span>
                <i className="ti ti-arrow-up-right" />
              </a>
              <a href="#" className="btn md:btn-lg rounded-full  !bg-[#C4037D] hover:!bg-[#A50268] text-white">
                <span>Join us</span>
                <i className="ti ti-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[45%] max-md:static max-md:w-full">
            <img
                src="/world.png"
                alt="Globe visualization"
                className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
  );
};