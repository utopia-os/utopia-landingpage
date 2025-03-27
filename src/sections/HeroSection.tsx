"use client";
import * as React from "react";
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
      <section className="relative flex justify-center w-full bg-sky-500/15 text-base-content rounded-4xl overflow-hidden h-[calc(100vh-1em)] min-h-212">
        <div className="flex w-full max-w-screen-2xl max-md:flex-col pt-20">
          <div className="flex flex-col gap-8 py-36 pr-12 pl-20 w-[55%] max-md:w-full max-md:items-center max-md:p-10 max-md:text-center">
            <h1 className="text-6xl font-bold leading-12 md:leading-16 max-sm:text-4xl">
              {t('Hero_Heading')}
            </h1>
            <p className="leading-8 text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: t('Hero_Intro') }}></p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#" className="btn md:btn-lg h-15 rounded-full bg-[#2563eb] hover:bg-[#1e40af] text-white">
                <span>{t("Usecases_Button")}</span>
                <i className="ti ti-arrow-up-right" />
              </a>
              <a href="#" className="btn md:btn-lg h-15 rounded-full  !bg-[#C4037D] hover:!bg-[#A50268] text-white">
                <span>{t("Team_Button")}</span>
                <i className="ti ti-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[45%] max-md:static max-md:w-full"> 
            <img
                src="/world.png"
                alt="Globe visualization"
                className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
  );
};