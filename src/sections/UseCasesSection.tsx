"use client";
import React from 'react';
import { UseCaseCard } from '../components/UseCaseCard';
import { useTranslation } from 'react-i18next';



const useCases = [
  {
    icon: "/usecases/wuerdekompass.png",
    title: "Würdekompass eV",
    subtitle: "Initiative for dignity awareness",
    description: {
      en: "Interacting with priorities and events of groups. Members manage their own profiles, so admin work is reduced.",
      de: "Interaktion mit Themen von Gruppen. Mitglieder verwalten ihre Profile, wodurch sich der Administrationsaufwand reduziert."
    },
    url: "https://www.wuerdekompass.org/aktivitaeten/gruppensuche",
  },
  {
    icon: "/usecases/pilgrimage.png",
    title: "The Pilgrimage",
    subtitle: "Interactive pilgrimage platform",
    description: {
      en: "Planning routes, exploring sacred sites, participating in rituals and projects, and documenting journeys with multimedia.",
      de: "Routen gestalten, heilige Orte entdecken, an Ritualen und Projekten mitwirken und Reisen multimedial festhalten."
    },
    url: "https://pilgrimage.utopia-map.org/",
  },
  {
    icon: "/usecases/docutopia.png",
    title: "Docutopia",
    subtitle: "Sustainable community platform",
    description: {
      en: "Helping 50+ people to find their tribe and co-create harmonious society with dynamic real-time updates so that it is easy to be a part of it.",
      de: "Ein dezentrales Multiversum, das Kunst, Technologie und Nachhaltigkeit verbindet, und  ökosoziale Transformation fördert."
    },
    url: "https://next.docutopia.de/",
  },
  {
    icon: "/usecases/vision-gesundheit.png",
    title: "Vision Gesundheit",
    subtitle: "Holistic healthcare organisation",
    description: {
      en: 'Finding "houses of healing" for everyone looking for better healthcare while helping people work together and support each other.',
      de: "„Häuser der Heilung“ finden, für alle die nach besserer Gesundheitsversorgung suchen und sich Zusammenarbeit wünschen."
    },
    url: "https://vision-gesundheit.utopia-map.org/",
  },
  {
    icon: "/usecases/essbare-stadt-kassel.png",
    title: "Essbare Stadt Kassel",
    subtitle: "Urban agriculture initiative",
    description: {
      en: "Guiding Kassel citizens to public edible trees and urban community gardens to raise awareness of food and nutrition.",
      de: "Bürger zu essbaren Bäumen und urbanen Gemeinschaftsgärten führen, um das Bewusstsein für Lebensmittel zu stärken."
    },
    url: "https://essbare-stadt.de/wp/",
  },
  {
    icon: "/usecases/our-journey.png",
    title: "Unsere Reise",
    subtitle: "Personal travel diary",
    description: {
      en: "Sharing places, stories, and photos that matter to them from their journey with others and their community.",
      de: "Teile bedeutende Orte, spannende Erlebnisse und atemberaubende Fotos von Deinen Reisen mit Deiner Community."
    },
    url: "https://unsere-reise.utopia-map.org/"
  },// Verwenden von i18next für die aktuelle Sprache
];

export const UseCasesSection: React.FC = () => {
const {t} = useTranslation()
  return (
    <section className="flex flex-col px-8 py-16 gap-12 items-center bg-sky-500/15 text-base-content rounded-4xl">
      <h2 className="md:text-4xl font-bold leading-10 text-center text-3xl">
        {t("Usecases_Heading")}
      </h2>
      <p className="text-center leading-8 text-lg md:text-xl max-w-4xl">
        {t("Usecases_Intro")}
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </div>
      <p className="text-center font-semibold leading-8 md:leading-12 font text-2xl max-w-4xl">
        {t("Usecases_Question")}
      </p>
      <a
          href="mailto:map@utopia-lab.org?subject=Custom Utopia Map"
      >
        <span className="btn btn-lg h-12 md:h-14 rounded-full text-white bg-[#2563eb] hover:bg-[#1e40af]">{t("Usecases_Button")}<i className="ti ti-arrow-up-right" />
        </span>
      </a>
    </section>
  );
};

