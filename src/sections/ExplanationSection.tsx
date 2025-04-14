"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

export const ExplanationSection: React.FC = () => {
      const { t } = useTranslation();
    
    return (
        <section className="flex flex-col gap-12 md:gap-18 py-12 md:py-18 items-center px-4 md:px-20">
            <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
                {t('Explainer_Heading')}
            </h2>
            <div className="w-full max-w-4xl mx-auto aspect-[1.49]">
                <iframe src="https://www.youtube-nocookie.com/embed/0Kp4wtnaGqY?si=MUfQUdYoBkiOhy9f"
                    className="w-full h-full rounded-2xl md:rounded-4xl shadow-2xl border-2 border-base-300"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </div>
        </section>
    );
};
