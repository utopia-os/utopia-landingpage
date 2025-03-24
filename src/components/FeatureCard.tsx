"use client";
import * as React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex gap-8 items-center px-12 py-7 bg-white shadow-xl rounded-4xl max-sm:flex-col max-sm:p-5 max-sm:text-center">
      <div className="flex justify-center items-center bg-emerald-600 rounded-2xl border-2 border-emerald-700 border-solid h-[72px] w-[72px] min-w-[72px]">
        <i className={`ti ti-${icon} text-4xl text-white`} />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-2xl font-bold leading-8 text-sky-900">{title}</h3>
        <p className="text-xl leading-8 text-sky-900">{description}</p>
      </div>
    </article>
  );
};
