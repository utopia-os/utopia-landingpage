"use client";
import * as React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
      <section className="relative flex justify-center w-full bg-sky-500/15 text-base-content overflow-hidden h-[calc(100vh-1em)] min-h-212">
        <div className="flex w-full max-w-screen-2xl max-md:flex-col pt-14 sm:pt-20">
          <div className="flex flex-col gap-8 md:py-12 lg:py-36 pr-12 pl-20 w-[55%] md:h-fit max-md:w-full items-center max-md:p-10 max-md:text-center">
            <h1 className="text-6xl font-bold leading-12 md:leading-16 max-sm:text-4xl">
              {t('Hero_Heading')}
            </h1>
            <p className="leading-8 text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: t('Hero_Intro') }}></p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start w-full">
              <Link to="/customizing" className="btn btn-lg h-12 md:h-14 rounded-full bg-[#2563eb] hover:bg-[#1e40af] text-white border-2 border-base-100">
                <span>{t("Usecases_Button")}</span>
                <i className="ti ti-arrow-up-right" />
              </Link>
              <a href="https://t.me/UtopiaMap" target="_blank" className="btn btn-lg h-12 md:h-14 rounded-full  !bg-[#C4037D] hover:!bg-[#A50268] text-white border-2 border-base-100">
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