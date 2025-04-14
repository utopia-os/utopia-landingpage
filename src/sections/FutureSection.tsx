"use client";
import * as React from "react";
import { FeatureCard } from "../components/FeatureCard";
import { useTranslation } from "react-i18next";

export const FutureSection: React.FC = () => {
  const { t } = useTranslation()
  const features = [
    {
      icon: "calendar",
      title: {
        en: "Calendar Module",
        de: "Kalender Modul",
      },
      description: {
        en: "Create, display, join, observe, share, and even link events to your personal calendar directly on the map.",
        de: "Termine direkt auf der Karte erstellen, sichtbar machen, teilnehmen, beobachten, teilen und sogar mit deinem persönlichen Kalender verknüpfen.",
      },
    },
    {
      icon: "message",
      title: {
        en: "Telegram Bot",
        de: "Telegram Bot",
      },
      description: {
        en: "It connects the platform with Telegram groups and ensures that relevant events land directly where they're needed.",
        de: "Es verbindet die Plattform mit Telegram-Gruppen und sorgt dafür, dass relevante Ereignisse direkt dort landen, wo sie gebraucht werden.",
      },
    },
    {
      icon: "markdown",
      title: {
        en: "Markdown Editor",
        de: "Markdown Editor",
      },
      description: {
        en: "Easily design profile pages – with headings, lists, quotes, images, and links. Everything works intuitively through a user-friendly interface with live preview.",
        de: "Profilseiten ganz einfach gestalten – mit Überschriften, Listen, Zitaten, Bildern und Links. Alles funktioniert intuitiv über eine benutzerfreundliche Oberfläche mit Live-Vorschau.",
      },
    },
    {
      icon: "speakerphone",
      title: {
        en: "Maps for Event Organizing",
        de: "Karten für Event-Organisation",
      },
      description: {
        en: "Discover and create events that matter to you and your community. From workshops to festivals, it's all on the map.",
        de: "Entdecke und erstelle Events, die dir und deiner Community wichtig sind. Von Workshops bis Festivals, alles ist auf der Karte.",
      },
    },
  ];

  return (
    <><section className="flex justify-center px-8 pt-16 bg-sky-500/15">
      <div className="flex gap-16 max-w-[1200px] flex-col lg:flex-row">
        <div className="flex flex-col gap-8 max-lg:items-center max-lg:text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-10 sm:leading-12 md:leading-14">
            {t("Future_Heading")}
          </h2>
          <p className="text-center lg:text-left leading-8 text-lg lg:text-xl max-w-4xl">
            {t("Future_Intro")}
          </p>
          <div>
            <div className="card ml-4">
              <div className="card-body px-0 sm:justify-start flex sm:flex-row gap-4 justify-center items-center">
                <div className="flex text-center lg:text-left flex-col gap-2 w-full">
                  <h3 className="text-2xl font-bold">1. {t("Future_Step1_Title")}</h3>
                  <p className="ml-0 lg:ml-6">{t("Future_Step1_Desc")}</p>
                </div>
              </div>
            </div>
            <div className="card ml-4">
              <div className="card-body px-0  sm:justify-start flex sm:flex-row gap-4 justify-center items-center">
                <div className="flex text-center lg:text-left flex-col gap-2 w-full">
                  <h3 className="text-2xl font-bold">2. {t("Future_Step2_Title")}</h3>
                  <p className="ml-0 lg:ml-6">{t("Future_Step2_Desc")}</p>
                </div>
              </div>
            </div>
            <div className="card ml-4">
              <div className="card-body px-0  sm:justify-start flex sm:flex-row gap-4 justify-center items-center">
                <div className="flex text-center lg:text-left flex-col gap-2 w-full">
                  <h3 className="text-2xl font-bold">3. {t("Future_Step3_Title")}</h3>
                  <p className="ml-0 lg:ml-6">{t("Future_Step3_Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}

        </div>
      </div>

    </section><div className="flex-wrap gap-6 flex justify-center px-8 py-16 bg-sky-500/15">
        <a href="mailto:map@utopia-lab.org?subject=Utopia Proposal" className="btn h-12 md:h-14 btn-lg rounded-full text-white bg-[#05966a] hover:bg-[#048257] ">
          <span>{t("Future_Button1")}</span>
          <i className="ti ti-arrow-up-right" />
        </a>
        <a href="mailto:map@utopia-lab.org?subject=Join Utopia" className="btn h-12 md:h-14 btn-lg rounded-full  !bg-[#C4037D] hover:!bg-[#A50268] text-white">
          <span>{t("Future_Button2")}</span>
          <i className="ti ti-arrow-up-right" />
        </a>
      </div></>
  );
};
