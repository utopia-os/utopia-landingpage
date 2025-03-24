"use client";
import * as React from "react";

export const ExplanationSection: React.FC = () => {
    return (
        <section className="flex flex-col gap-12 items-center px-4 py-24 md:px-20">
            <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
                What is Utopia and how does it work?
            </h2>
            <div className="w-full max-w-4xl mx-auto aspect-[1.49]">
                <iframe src="https://www.youtube-nocookie.com/embed/0Kp4wtnaGqY?si=MUfQUdYoBkiOhy9f"
                    className="w-full h-full rounded-2xl md:rounded-4xl shadow-2xl"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </div>
        </section>
    );
};
