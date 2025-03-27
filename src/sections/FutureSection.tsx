"use client";
import * as React from "react";
import { FeatureCard } from "../components/FeatureCard";

export const FutureSection: React.FC = () => {
  const features = [
    {
      icon: "messages",
      title: "Maps for Social Networking",
      description:
        "Where people and places meet. Chat, talk, meet, follow your favourite people, but on maps",
    },
    {
      icon: "rocket",
      title: "Real Life Manifestation Games",
      description:
        "Real-life quests and challenges as a playful way to discover new opportunities and unlock your potential.",
    },
    {
      icon: "gift",
      title: "Maps as p2p Market Places",
      description:
        "A marketplace where location meets opportunity. Selling or buying a toaster or your time - bring it here!",
    },
    {
      icon: "speakerphone",
      title: "Maps for Event Organizing",
      description:
        "Discover and create events that matter to you and your community. From workshops to festivals, it's all on the map.",
    },
  ];

  return (
    <section className="flex justify-center  px-8 py-16 bg-sky-500/15 rounded-t-4xl">
      <div className="flex gap-16 max-w-[1200px] flex-col lg:flex-row">
        <div className="flex flex-col gap-8 max-lg:items-center max-lg:text-center">
          <h2 className="text-3xl lg:text-5xl font-bold leading-10  lg:leading-14">
            Interactive maps are just the beginning
          </h2>
          <p className="text-center lg:text-left leading-8 text-lg lg:text-xl max-w-4xl">
            Utopia isn't just about maps—it's about transforming how we connect,
            co-create, share responsibility and act in the world. Maps'
            versatility helps us find our way through this change towards a
            thriving future. Together, we can change the world.
          </p>
          <div className="flex-wrap gap-3 hidden lg:flex">
            <a href="#" className="btn btn-lg rounded-full text-white bg-[#2563eb] hover:bg-[#1e40af]">
              <span>Get your Custom Map</span>
              <i className="ti ti-arrow-up-right" />
            </a>
            <a href="#" className="btn btn-lg rounded-full text-white bg-[#05966a] hover:bg-[#048257] ">
              <span>Support Funding</span>
              <i className="ti ti-arrow-up-right" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
