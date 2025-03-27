"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface UseCaseCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: {
    de: string;
    en: string;
  };
  url: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  url,
}) => {
  const { t, i18n } = useTranslation(); 
  const lang = i18n.language as 'de' | 'en'; 

  return (
    <div className="card rounded-2xl bg-base-100 w-96 shadow-2xl">
      <div className="card-body">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={icon} alt="Avatar" />
          </div>
          <div className="overflow-hidden">
            <h1 className="text-xl font-semibold truncate">{title}</h1>
            <p className="text-xs text-gray-500 truncate">{subtitle}</p>
          </div>
        </div>
        <p className="py-2">{description[lang]}</p> {/* Hier wird die Beschreibung basierend auf der aktuellen Sprache angezeigt */}
        <div className="card-actions justify-end">
          <a href={url} target="_blank">
            <button className="btn bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">{t("Show_Map_Button")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};
