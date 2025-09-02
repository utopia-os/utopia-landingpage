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
        hsb: "Mapowy designer",
        dsb: "Kartowy designer",
      },
      quote: {
        en: "We are a group of creators and change-makers who believe in the power of collective action and local initiative.",
        de: "Wir sind eine Gruppe von Machern und Veränderern, die an die Kraft kollektiven Handelns und lokaler Eigeninitative glauben.",
        hsb: "Smy skupina tworičelow a změnowarjow, kotřiž wěraja na móc kollektiwnych nadawkow a lokalnych iniciatywow.",
        dsb: "Smy kupa twórjarjow a změnowarjow, kótarež wěri na móc kolektiwnego działanja a lokalnych iniciatywow.",
      },
      imageUrl: "/team/anton.png",
    },
    {
      name: "Timo",
      role: {
        en: "Visionary",
        de: "Visionär",
        hsb: "Wizionar",
        dsb: "Wizionar",
      },
      quote: {
        en: "Our goal is to create collaborative maps to connect people, projects and resources in real life.",
        de: "Unser Ziel ist es, kollaborative Karten zu erstellen, um Menschen, Projekte und Ressourcen im echten Leben zu verbinden.",
        hsb: "Naš cil je, kolaboratiwne karty tworić, zo bychmy ludźi, projekty a resursy w prawej realnosći zwjazali.",
        dsb: "Naš cel jo twóriś kolaboratiwne kórty, aby luźe, projekty a resurse w napšawdnem žycenju zwězał.",
      },
      imageUrl: "/team/timo.png",
    },
    {
      name: "Shaira",
      role: {
        en: "Community Support",
        de: "Community Support",
        hsb: "Community-podpěra",
        dsb: "Community-pódpěra",
      },
      quote: {
        en: "Our mission is to connect the digital and real worlds to spark new ideas, make change and co-creation possible.",
        de: "Unsere Mission ist es, die digitale und die reale Welt zu verbinden, um neue Ideen zu entfachen, Veränderungen zu bewirken und Co-Kreation zu ermöglichen.",
        hsb: "Naša misija je, digitalny a realny swět zwjazać, zo bychmy nowe ideje zapalili, změny spowodowali a sobutworjenje zmóžnili.",
        dsb: "Naša misija jo zwězaś digitalny a napšawdny swět, aby nowe ideje zapalili, změny pśewjadli a sobuwuwiśe zmóžnili.",
      },
      imageUrl: "/team/shaira.png",
    },
    {
      name: "Luca",
      role: {
        en: "Growth Marketing",
        de: "Growth Marketing",
        hsb: "Marketing rósta",
        dsb: "Marketing rosta",
      },
      quote: {
        en: "More than anything, we want to help communities unlock their potential and bring big dreams to life—together.",
        de: "Mehr als alles andere wollen wir Gemeinschaften dabei helfen, ihr Potenzial freizusetzen und große Träume gemeinsam zu verwirklichen.",
        hsb: "Wjace hač něšto druheho chcemy communityjam pomhać, swój potencial wotswobodzić a wulke sny hromadźe do žiwa přewjesć.",
        dsb: "Wěcej ako co druge pśajaś, chcemy communityjam pomagaś, jich potencjał wótwóliś a wjelike sny gromaźe k žywjenju pśewjasć.",
      },
      imageUrl: "/team/luca.png",
    },
    {
      name: "Ulf",
      role: {
        en: "Developer",
        de: "Entwickler",
        hsb: "Wuwiwary",
        dsb: "Wuwijowar",
      },
      quote: {
        en: "As a long-distance hiker, utopia-map is the ideal tool to document my travel.",
        de: "Als Fernwanderer ist Utopia-Map das ideale Werkzeug, um meine Reise zu dokumentieren.",
        hsb: "Jako dalokowandrowar je utopia-map idealny nastroj, zo bych swoju puć dokumentował.",
        dsb: "Ako dalokowurowar jo Utopia-Map idealny rěd, aby swóju drog dokumentěrował.",
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
