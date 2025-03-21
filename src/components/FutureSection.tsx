"use client";
import * as React from "react";
import { FeatureCard } from "./FeatureCard";

export const FutureSection: React.FC = () => {
  const features = [
    {
      icon: "messages",
      title: "Maps as social media",
      description:
        "Where people and places meet. Chat, talk, meet, follow your favourite people, but on maps",
    },
    {
      icon: "rocket",
      title: "Maps as potential development game",
      description:
        "Real-life quests and challenges as a playful way to discover new opportunities and unlock your potential.",
    },
    {
      icon: "gift",
      title: "Maps as market place",
      description:
        "A marketplace where location meets opportunity. Selling or buying a toaster or your time - bring it here!",
    },
    {
      icon: "speakerphone",
      title: "Maps as events platform",
      description:
        "Discover and create events that matter to you and your community. From workshops to festivals, it's all on the map.",
    },
  ];

  return (
    <section className="flex justify-center px-20 py-32 bg-sky-100 rounded-[60px_60px_0_0] max-sm:px-4 max-sm:py-16">
      <div className="flex gap-16 max-w-[1200px] max-lg:flex-col">
        <div className="flex flex-col gap-8 max-w-[550px] max-md:items-center max-md:text-center">
          <h2 className="text-5xl font-bold leading-10 text-sky-900">
            Interactive maps are just the beginning
          </h2>
          <p className="text-xl leading-8 text-sky-900">
            Utopia isn't just about maps—it's about transforming how we connect,
            co-create, share responsibility and act in the world. Maps'
            versatility helps us find our way through this change towards a
            thriving future. Together, we can change the world.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="flex gap-2 justify-center items-center px-5 py-0 h-16 text-lg font-semibold text-white !bg-[#05966a] hover:!bg-[#048257] focus:!outline-none transition-colors duration-200 ease-in-out !border-0 rounded-[1000px] max-sm:w-full">
              <span>Try out maps</span>
              <i className="ti ti-arrow-up-right" />
            </button>
            <button className="flex gap-2 justify-center items-center px-5 py-0 h-16 text-lg font-semibold text-white !bg-[#2563eb] hover:!bg-[#1e40af] focus:!outline-none transition-colors duration-200 ease-in-out !border-0 rounded-[1000px] max-sm:w-full">
              <span>Support funding</span>
              <i className="ti ti-arrow-up-right" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
