"use client";
import * as React from "react";

export const ExplanationSection: React.FC = () => {
  return (
      <section className="flex flex-col gap-24 items-center px-20 py-24 max-sm:px-4 max-sm:py-12">
          <h2 className="text-4xl font-bold leading-10 text-center text-sky-900 max-sm:text-3xl">
              What is Utopia and how does it work?
          </h2>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0Kp4wtnaGqY?si=MUfQUdYoBkiOhy9f"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
          <h3 className="text-3xl font-bold leading-9 text-center text-neutral-600">
              Explore the Map and find People, Projects and Events around
          </h3>
      </section>
  );
};
