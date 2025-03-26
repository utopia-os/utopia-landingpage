"use client";
import * as React from "react";
import { UseCaseCard } from "../components/UseCaseCard";

export const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: "/usecases/wuerdekompass.png",
      title: "Würdekompass eV",
      subtitle: "Initiative for dignity awareness",
      description:
        "Interacting with priorities and events of groups. Members manage their own profiles, so admin work is reduced.",
      url: "https://www.wuerdekompass.org/aktivitaeten/gruppensuche",
    },
    {
      icon: "/usecases/docutopia.png",
      title: "Docutopia",
      subtitle: "Sustainable community platform",
      description:
        "Helping 50+ people to find their tribe and co-create harmonious society with dynamic real-time updates so that is easy to be a part of it.",
      url: "https://next.docutopia.de/",
    },
    {
      icon: "/usecases/pilgrimage.png",
      title: "The Pilgrimage",
      subtitle: "Interactive pilgrimage platform",
      description:
        "Planning routes, exploring sacred sites, participating in rituals and projects, and documenting journeys with multimedia.",
      url: "https://pilgrimage.utopia-map.org/",
    },
    {
      icon: "/usecases/vision-gesundheit.png",
      title: "Vision Gesundheit",
      subtitle: "Holistic healthcare organisation",
      description:
        'Finding "houses of healing" for everyone looking for better healthcare while helping people work together and support each other.',
      url: "https://vision-gesundheit.utopia-map.org/",
    },
    {
      icon: "/usecases/essbare-stadt-kassel.png",
      title: "Essbare Stadt Kassel",
      subtitle: "Urban agriculture initiative",
      description:
        "Guiding Kassel citizens to public edible trees and urban community gardens to raise awareness of food and nutrition.",
      url: "https://essbare-stadt.de/wp/",
    },
    {
      icon: "/usecases/our-journey.png",
      title: "Unsere Reise",
      subtitle: "Personal travel diary",
      description:
        "Sharing places, stories, and photos that matter to them from their journey with others and their community.",
      url: "https://unsere-reise.utopia-map.org/"
    },
  ];

  return (
    <section className="flex flex-col px-8 py-16 gap-12 items-center bg-sky-500/15 text-base-content rounded-t-4xl">
      <h2 className="md:text-4xl font-bold leading-10 text-center text-3xl">
        Here's how our maps are used
      </h2>
      <p className="text-center leading-8 text-lg md:text-xl max-w-4xl">
        Different goals, different maps. We're all about sparking genuine
        connections and making a positive impact in the world. Here's the magic
        of Utopia:
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </div>
      <p className="text-center leading-8 md:leading-12 font text-2xl max-w-4xl">
        Do you already have your network?
      </p>
      <a
          href="#"
      >
        <span className="btn btn-lg rounded-full text-white bg-violet-600 hover:bg-violet-700">Get your customised map        <i className="ti ti-arrow-up-right" />
        </span>
      </a>
    </section>
  );
};
