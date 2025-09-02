"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

type Lang = "de" | "en" | "hsb" | "dsb";

interface TeamMemberCardProps {
  name: string;
  role: Record<Lang, string>;
  quote: Record<Lang, string>;
  imageUrl: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  quote,
  imageUrl,
}) => {
    const {i18n } = useTranslation();
    const lang = i18n.language as Lang;
  return (
    <section className="card bg-white rounded-2xl shadow-lg ml-8 max-w-lg">
      <div className="card-body">
        <img
          src={imageUrl}
          alt={`${name} - ${role}`}
          className="absolute left-0 w-24 h-24 rounded-full -translate-x-2/4 "
        />
        <div className="ml-12">
          <header className="relative mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold leading-7 text-gray-800">{name}</h3>
                <p className="text-base leading-5 text-neutral-600">{role[lang]}</p>
              </div>
              <img
                src="/quote.png"
                alt="Quote symbol"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>
          </header>
          <blockquote className="relative text-lg font-semibold leading-6 text-gray-800">
            &quot;{quote[lang]}&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
