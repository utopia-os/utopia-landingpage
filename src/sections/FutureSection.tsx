"use client";
import * as React from "react";
import { FeatureCard } from "../components/FeatureCard";

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
      title: "Real Life Manifestation Games",
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
    <section className="flex justify-center  px-8 py-16 bg-sky-500/15 rounded-t-4xl">
      <div className="flex gap-16 max-w-[1200px] max-lg:flex-col">
        <div className="flex flex-col gap-8 max-w-[550px] max-md:items-center max-md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-14">
            Interactive maps are just the beginning
          </h2>
          <p className="text-xl leading-8">
            Utopia isn't just about maps—it's about transforming how we connect,
            co-create, share responsibility and act in the world. Maps'
            versatility helps us find our way through this change towards a
            thriving future. Together, we can change the world.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="btn btn-lg rounded-full text-white !bg-[#05966a]">
              <span>Try out maps</span>
              <i className="ti ti-arrow-up-right" />
            </a>
            <a href="#" className="btn btn-lg rounded-full text-white !bg-[#2563eb]">
              <span>Support funding</span>
              <i className="ti ti-arrow-up-right" />
            </a>
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
