"use client";
import * as React from "react";
import { TeamMemberCard } from "../components/TeamMemberCard";

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Anton",
      role: "Mapping & Free Software",
      quote:
        "We are a group of creators and change-makers who believe amazing things can happen with the power of collective action.",
      imageUrl: "/team/anton.png",
    },
    {
      name: "Timo",
      role: "Visionary",
      quote:
        "Our goal is to create collaborative maps to connect people, projects and resources in ways that matter.",
      imageUrl: "/team/timo.png",
    },
    {
      name: "Shaira",
      role: "Support",
      quote:
        "Our mission is to connect the digital and real worlds to spark new ideas, make change and co-creation possible.",
      imageUrl: "/team/shaira.png",
    },
    {
      name: "Luca",
      role: "Mapping & Free Software",
      quote:
        "More than anything, we want to help communities unlock their potential and bring big dreams to life—together.",
      imageUrl: "/team/luca.png",
    },
  ];

  return (
    <section className="flex flex-col gap-16 items-center px-8 py-16 pb-24">
      <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
        Who's behind Utopia?
      </h2>
      <div className="flex flex-wrap gap-16 justify-center md:gap-20 lg:gap-24">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
