"use client";
import * as React from "react";
import { FeatureCard } from "../components/FeatureCard";
import { useTranslation } from "react-i18next";

export const FutureSection: React.FC = () => {
  const { t } = useTranslation()
  const features = [
    {
      icon: "calendar",
      title: "Kalender Modul",
      description:
        "Termine direkt auf der Karte erstellen, sichtbar machen, teilnehmen, beobachten, teilen und sogar mit deinem persönlichen Kalender verknüpfen.",
    },
    {
      icon: "message",
      title: "Telegram Bot",
      description:
        "Es verbindet die Plattform mit Telegram-Gruppen und sorgt dafür, dass relevante Ereignisse direkt dort landen, wo sie gebraucht werden",
    },
    {
      icon: "markdown",
      title: "Markdown Editor",
      description:
        "Profilseiten ganz einfach gestalten – mit Überschriften, Listen, Zitaten, Bildern und Links. Alles funktioniert intuitiv über eine benutzerfreundliche Oberfläche mit Live-Vorschau",
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
            {t("Future_Heading")}
          </h2>
          <p className="text-center lg:text-left leading-8 text-lg lg:text-xl max-w-4xl">
            {t("Future_Intro")}
          </p>
          <div>
            <div className="card">
              <div className="card-body px-0 sm:justify-start flex sm:flex-row gap-8 justify-center items-center">
                <div className="flex justify-center text-center sm:text-left items-center bg-orange-600 rounded-2xl border-2 border-orange-700 border-solid h-[72px] w-[72px] min-w-[72px]">
                  <i className={`ti ti-list-details text-4xl text-white`} />
                </div>
                <div className="flex text-center sm:text-left flex-col gap-2">
                  <h3 className="text-2xl font-bold">Module entdecken</h3>
                  <p className="">Informiere dich über die geplanten Features und deren Nutzen.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body px-0  sm:justify-start flex sm:flex-row gap-8 justify-center items-center">
                <div className="flex justify-center text-center sm:text-left items-center bg-blue-600 rounded-2xl border-2 border-blue-700 border-solid h-[72px] w-[72px] min-w-[72px]">
                  <i className={`ti ti-moneybag-heart text-4xl text-white`} />
                </div>
                <div className="flex text-center sm:text-left flex-col gap-2">
                  <h3 className="text-2xl font-bold">Unterstützen & Voten</h3>
                  <p className="">Spende für dein favorisiertes Modul und gib ihm damit deine Stimme.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body px-0  sm:justify-start flex sm:flex-row gap-8 justify-center items-center">
                <div className="flex justify-center text-center sm:text-left items-center bg-violet-600 rounded-2xl border-2 border-violet-700 border-solid h-[72px] w-[72px] min-w-[72px]">
                  <i className={`ti ti-${"eye"} text-4xl text-white`} />
                </div>
                <div className="flex text-center sm:text-left flex-col gap-2">
                  <h3 className="text-2xl font-bold">Entwicklung verfolgen</h3>
                  <p className="">Sieh in Echtzeit, wie viele Stimmen und Mittel jedes Modul erhalten hat.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-wrap gap-3 hidden md:flex">
            <a href="#" className="btn btn-lg rounded-full text-white bg-[#05966a] hover:bg-[#048257] ">
              <span>Idee vorschlagen</span>
              <i className="ti ti-arrow-up-right" />
            </a>
            <a href="#" className="btn md:btn-lg rounded-full  !bg-[#C4037D] hover:!bg-[#A50268] text-white">
              <span>Helfe bei der Umsetzung</span>
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
