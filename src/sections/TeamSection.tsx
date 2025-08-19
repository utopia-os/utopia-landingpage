"use client";
import * as React from "react";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { useTranslation } from "react-i18next";

export const TeamSection: React.FC = () => {
  const {t} = useTranslation()
  const teamMembers = [
    {
      name: "Anton",
      role: {
        en: "Map Designer",
        de: "Map Designer",
      },
      quote: {
        en: "We are a group of creators and change-makers who believe in the power of collective action and local initiative.",
        de: "Wir sind eine Gruppe von Machern und Veränderern, die an die Kraft kollektiven Handelns und lokaler Eigeninitative glauben.",
      },
      imageUrl: "/team/anton.png",
    },
    {
      name: "Timo",
      role: {
        en: "Visionary",
        de: "Visionär",
      },
      quote: {
        en: "Our goal is to create collaborative maps to connect people, projects and resources in real life.",
        de: "Unser Ziel ist es, kollaborative Karten zu erstellen, um Menschen, Projekte und Ressourcen im echten Leben zu verbinden.",
      },
      imageUrl: "/team/timo.png",
    },
    {
      name: "Shaira",
      role: {
        en: "Community Support",
        de: "Community Support",
      },
      quote: {
        en: "Our mission is to connect the digital and real worlds to spark new ideas, make change and co-creation possible.",
        de: "Unsere Mission ist es, die digitale und die reale Welt zu verbinden, um neue Ideen zu entfachen, Veränderungen zu bewirken und Co-Kreation zu ermöglichen.",
      },
      imageUrl: "/team/shaira.png",
    },
    {
      name: "Luca",
      role: {
        en: "Growth Marketing",
        de: "Growth Marketing",
      },
      quote: {
        en: "More than anything, we want to help communities unlock their potential and bring big dreams to life—together.",
        de: "Mehr als alles andere wollen wir Gemeinschaften dabei helfen, ihr Potenzial freizusetzen und große Träume gemeinsam zu verwirklichen.",
      },
      imageUrl: "/team/luca.png",
    },
    {
      name: "Ulf",
      role: {
        en: "Developer",
        de: "Entwickler",
      },
      quote: {
        en: "As a long-distance hiker, utopia-map is the ideal tool to document my travel.",
        de: "Als Fernwanderer ist Utopia-Map das ideale Werkzeug, um meine Reise zu dokumentieren.",
      },
      imageUrl: "/team/ulf.jpg",
    },
  ];
  

  return (
    <section className="flex flex-col gap-12 md:gap-18 py-12 md:py-18 items-center px-8">
      <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
        {t("Team_Heading")}
      </h2>
      <div className="flex flex-wrap gap-16 justify-center md:gap-20 lg:gap-24">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
      <a
          href="mailto:map@utopia-lab.org?subject=Join Utopia"
      >
        <span className="btn btn-lg h-12 md:h-14 rounded-full text-white !bg-[#C4037D] hover:!bg-[#A50268]">{t("Team_Button")}<i className="ti ti-arrow-up-right" />
        </span>
      </a>
    </section>
  );
};
