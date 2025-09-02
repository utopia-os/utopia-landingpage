"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

type Lang = "de" | "en" | "hsb" | "dsb";

interface StepCardProps {
  icon: string;
  iconBgColor: string;
  borderColor: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const StepCard: React.FC<StepCardProps> = ({
  icon,
  iconBgColor,
  borderColor,
  title,
  description,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Lang;
  return (
      <article className="flex flex-col gap-6 w-90 max-sm:items-center max-sm:w-full max-sm:text-center">
          <div className="flex flex-col max-md:items-center gap-4">
              <div
                  className={`flex justify-center items-center ${iconBgColor} rounded-2xl border-2 ${borderColor} border-solid h-[72px] w-[72px]`}
              >
                  <i className={`ti ti-${icon} text-4xl text-white`} />
              </div>
              <h3 className="text-2xl font-medium leading-8">
                  {title[lang]}
              </h3>
          </div>
          <div>
              <p className="text-base leading-7 max-md:text-center">{description[lang]}</p>
          </div>
      </article>
  );
};
