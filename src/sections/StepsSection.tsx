"use client";
import * as React from "react";
import { StepCard } from "../components/StepCard";
import { useTranslation } from "react-i18next";

export const StepsSection: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: "map-pin",
      iconBgColor: "bg-emerald-600",
      borderColor: "border-emerald-700",
      title: {
        en: "Connect and explore",
        de: "Verbinden und entdecken",
        hsb: "Zwjazaj a wotkrywaj",
        dsb: "Zwězuj a wótkryj",
      },
      description: {
        en: "Get started by discovering people, communities, projects and events in your neighbourhood or anywhere in the world!",
        de: "Entdecke Menschen, Communities, Projekte und Veranstaltungen in deiner Nachbarschaft oder überall auf der Welt!",
        hsb: "Wotkryj ludźi, communityje, projekty a podawki we swojim susodstwie abo wšudźe na swěće!",
        dsb: "Wótkryj luźi, community, projekty a tšojenja w twojim susedstwie abo wšuźi na swěśe!",
      },
    },
    {
      icon: "user",
      iconBgColor: "bg-orange-500",
      borderColor: "border-pink-700",
      title: {
        en: "Create your profile",
        de: "Erstelle dein Profil",
        hsb: "Wutwor swój profil",
        dsb: "Twórj swój profil",
      },
      description: {
        en: "Jump in and let your voice, ideas and stories be heard! Show what you can offer and what you need. Mark your spot.",
        de: "Mach mit und lass deine Stimme, Ideen und Geschichten hören! Zeige, was du bieten kannst und was du brauchst. Markiere deinen Platz.",
        hsb: "Skoč do toho a dźer swoje hłosy, ideje a stawizny słyszeć! Pokaž, što móžeš poskićić a što trjebaš. Markuj swoje městno.",
        dsb: "Skoč do togo a daj swój głos, ideje a stawizny słysć! Pokaž, co móžoš pónujaś a co trjebaš. Markěruj swójo městno.",
      },
    },
    {
      icon: "users",
      iconBgColor: "bg-rose-500",
      borderColor: "border-pink-700",
      title: {
        en: "Grow your community",
        de: "Lass deine Community wachsen",
        hsb: "Rostń swoju community",
        dsb: "Wusć swóju community",
      },
      description: {
        en: "Share your own projects and events or pitch in others. Connect, invite friends, meet up outside, and take action together.",
        de: "Teile eigene Projekte und Veranstaltungen oder mach bei anderen mit. Vernetze dich, lade Freunde ein, triff dich draußen und handelt gemeinsam.",
        hsb: "Dźěl swoje projekty a podawki abo wobdźěl so při druhich. Zwjazaj so, přizwij přećelow, potkaj so zwonka a dźěłajće hromadźe.",
        dsb: "Źěl swóje projekty a tšojenja abo wobźěluj se pśi drugich. Zwězuj se, pśizjaw pśijaśele, zgromaź se zwonka a źěłajśo gromaźe.",
      },
    },
  ];

  return (
    <section className="flex flex-col gap-24 items-center px-8 py-16 pb-32 bg-sky-500/15 rounded-b-4xl">
      <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
        {t("Steps_Heading")}
      </h2>
      <div className="flex flex-wrap gap-16 justify-center px-5 py-0 max-sm:p-0">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};
