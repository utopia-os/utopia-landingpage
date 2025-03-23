"use client";
import * as React from "react";
import { UseCaseCard } from "./UseCaseCard";

export const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: "/src/assets/usecases/our-journey.png",
      title: "Our Journey",
      subtitle: "Personal travel diary",
      description:
        "Sharing places, stories, and photos that matter to them from their journey with others and their community.",
      url: ""
    },
    {
      icon: "src/assets/usecases/wuerdekompass.png",
      title: "Würdekompass eV",
      subtitle: "Initiative for dignity awareness",
      description:
        "Interacting with priorities and events of groups. Members manage their own profiles, so admin work is reduced.",
      url: "",
    },
    {
      icon: "src/assets/usecases/docutopia.png",
      title: "Docutopia",
      subtitle: "Sustainable community platform",
      description:
        "Helping 50+ people to find their tribe and co-create harmonious society with dynamic real-time updates so that is easy to be a part of it.",
      url: "",
    },
    {
      icon: "src/assets/usecases/pilgrimage.png",
      title: "The Pilgrimage",
      subtitle: "Interactive pilgrimage platform",
      description:
        "Planning routes, exploring sacred sites, participating in rituals and projects, and documenting journeys with multimedia.",
      url: "",
    },
    {
      icon: "src/assets/usecases/vision-gesundheit.png",
      title: "Vision Gesundheit",
      subtitle: "Holistic healthcare organisation",
      description:
        'Finding "houses of healing" for everyone looking for better healthcare while helping people work together and support each other.',
      url: "",
    },
    {
      icon: "src/assets/usecases/essbare-stadt-kassel.png",
      title: "Essbare Stadt Kassel",
      subtitle: "Urban agriculture initiative",
      description:
        "Guiding Kassel citizens to public edible trees and urban community gardens to raise awareness of food and nutrition.",
      url: "",
    },
  ];

  return (
    <section className="flex flex-col gap-24 items-center px-20 pt-24 pb-0 bg-sky-100 rounded-[60px_60px_0_0] max-sm:px-4 max-sm:py-12">
      <h2 className="text-4xl font-bold leading-10 text-center text-sky-900 max-sm:text-3xl">
        Here's how our maps are used
      </h2>
      <p className="text-base leading-7 text-center text-sky-700 max-w-[800px]">
        Different goals, different maps. We're all about sparking genuine
        connections and making a positive impact in the world. Here's the magic
        of Utopia:
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </div>
      <a
          href="#"
          className="flex gap-2 items-center px-5 py-0 mt-8 h-16 text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 transition-colors duration-200 ease-in-out cursor-pointer border-[none] rounded-[1000px] no-underline justify-center"
      >
        <span>Get your customised map</span>
        <i className="ti ti-arrow-up-right" />
      </a>
    </section>
  );
};
