"use client";
import * as React from "react";
import { StepCard } from "../components/StepCard";

export const StepsSection: React.FC = () => {
  const steps = [
    {
      icon: "map-pin",
      iconBgColor: "bg-emerald-600",
      borderColor: "border-emerald-700",
      title: "Connect and explore",
      description:
        "Get started by discovering people, communities, projects and events in your neighbourhood or anywhere in the world!",
    },
    {
      icon: "user",
      iconBgColor: "bg-orange-500",
      borderColor: "border-pink-700",
      title: "Create your profile",
      description:
        "Jump in and let your voice, ideas and stories be heard! Show what you can offer and what you need. Mark your spot.",
    },
    {
      icon: "users",
      iconBgColor: "bg-rose-500",
      borderColor: "border-pink-700",
      title: "Grow your community",
      description:
        "Share your own projects and events or pitch in others. Connect, invite friends, meet up outside, and take action together.",
    },
  ];

  return (
    <section className="flex flex-col gap-24 items-center px-8 py-16 bg-sky-500/15 rounded-b-4xl">
      <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
        How you can connect and take the first steps
      </h2>
      <div className="flex flex-wrap gap-16 justify-center px-5 py-0 max-sm:p-0">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
      <a
          href="#"
          className="flex gap-2 items-center justify-center px-5 py-0 mt-8 h-16 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 ease-in-out cursor-pointer border-[none] rounded-[1000px] no-underline"
      >
        <span>Try out maps</span>
        <i className="ti ti-arrow-up-right" />
      </a>
    </section>
  );
};
