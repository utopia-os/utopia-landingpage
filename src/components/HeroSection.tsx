"use client";
import * as React from "react";

export const HeroSection: React.FC = () => {
  return (
      <section className="relative flex justify-center w-full bg-sky-500/15 text-base-content rounded-4xl overflow-hidden">
        <div className="flex w-full max-w-screen-2xl max-md:flex-col pt-30">
          <div className="flex flex-col gap-8 py-36 pr-12 pl-20 w-[55%] max-md:w-full max-md:items-center max-md:p-10 max-md:text-center">
            <h1 className="text-6xl font-bold leading-16 max-sm:text-4xl">
              Maps to connect and create
            </h1>
            <p className="text-xl leading-8 max-sm:text-lg">
              <b>Grow your Community</b> with our Collaborative Maps that empower
              everyone build decentralized real-life networks to co-create
              positive change in your area and everywhere in the world ✨
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="flex gap-2 justify-center items-center px-5 py-0 h-16 text-lg font-semibold text-white !bg-[#05966a] hover:!bg-[#048257] focus:!outline-none transition-colors duration-200 ease-in-out !border-0 rounded-[1000px] max-sm:w-full no-underline">
                <span>Try out maps</span>
                <i className="ti ti-arrow-up-right" />
              </a>
              <a href="#" className="flex gap-2 justify-center items-center px-5 py-0 h-16 text-lg font-semibold text-white !bg-[#C4037D] hover:!bg-[#A50268] focus:!outline-none transition-colors duration-200 ease-in-out !border-0 rounded-[1000px] max-sm:w-full no-underline">
                <span>Join our team</span>
                <i className="ti ti-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[45%] max-md:static max-md:w-full">
            <img
                src="/src/assets/world.png"
                alt="Globe visualization"
                className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
  );
};