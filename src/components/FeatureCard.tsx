"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface FeatureCardProps {
  icon: string;
  title: {
    en: string;
    de: string
  };
  description: {
    en: string;
    de: string
  };
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'de' | 'en';
  return (
    <div className="card bg-base-100 rounded-2xl p-4 shadow-2xl">
      <div className="card-body sm:justify-start flex sm:flex-row gap-8 justify-center items-center">
        <div className="flex justify-center text-center sm:text-left items-center bg-emerald-600 rounded-2xl border-2 border-emerald-700 border-solid h-[72px] w-[72px] min-w-[72px]">
          <i className={`ti ti-${icon} text-4xl text-white`} />
        </div>
        <div className="flex text-center sm:text-left flex-col gap-2">
          <h3 className="text-2xl font-bold">{title[lang]}</h3>
          <p className="">{description[lang]}</p>
        </div>
      </div>
    </div>
  );
};
