"use client";
import * as React from "react";
import { TeamMemberCard } from "./TeamMemberCard";

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Anton",
      role: "Mapping & Free Software",
      quote:
        "We are a group of creators and change-makers who believe amazing things can happen with the power of collective action.",
      imageUrl: "/src/assets/team/anton.png",
    },
    {
      name: "Timo",
      role: "Visionary",
      quote:
        "Our goal is to create collaborative maps to connect people, projects and resources in ways that matter.",
      imageUrl: "/src/assets/team/timo.png",
    },
    {
      name: "Shaira",
      role: "Support",
      quote:
        "Our mission is to connect the digital and real worlds to spark new ideas, make change and co-creation possible.",
      imageUrl: "/src/assets/team/shaira.png",
    },
    {
      name: "Luca",
      role: "Mapping & Free Software",
      quote:
        "More than anything, we want to help communities unlock their potential and bring big dreams to life—together.",
      imageUrl: "/src/assets/team/luca.png",
    },
  ];

  return (
    <section className="flex flex-col gap-24 items-center px-20 py-24">
      <h2 className="text-xs font-medium tracking-wider text-gray-400 uppercase">
        who's behind utopia
      </h2>
      <div className="flex flex-wrap gap-30 justify-center max-md:gap-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
