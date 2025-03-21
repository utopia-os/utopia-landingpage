"use client";
import * as React from "react";

interface UseCaseCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon,
  title,
  subtitle,
  description,
}) => {
  return (
    <article className="flex flex-col gap-2.5 items-center px-7 py-10 w-96 bg-white shadow-2xl rounded-[60px] max-sm:w-full">
      <header className="flex gap-5 justify-between items-center text-gray-800 w-full">
        <img
            src={icon}
            alt="Initiative Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[72px]"
        />
        <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-[164px]">
          <h1 className="text-2xl font-medium leading-none">
            {title}
          </h1>
          <p className="text-base">
            {subtitle}
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-8 w-full">
        <p className="text-base leading-6 text-gray-800">{description}</p>
        <button className="px-5 py-2 mx-auto my-0 text-base font-semibold text-white bg-emerald-600 cursor-pointer border-[none] rounded-[30.4px] w-[186px]">
          Check out this map
        </button>
      </div>
    </article>
  );
};
