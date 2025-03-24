"use client";
import * as React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  quote,
  imageUrl,
}) => {
  return (
      <section className="card p-6 bg-white shadow-md  rounded-4xl ">
        <img
            src={imageUrl}
            alt={`${name} - ${role}`}
            className="absolute left-0 w-24 h-24 rounded-full -translate-x-2/4 max-sm:static max-sm:mb-4"
        />
        <div className="card text-center">
          <header className="relative mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold leading-7 text-gray-800">{name}</h3>
                <p className="text-base leading-5 text-neutral-600">{role}</p>
              </div>
              <img
                  src="/src/assets/quote.png"
                  alt="Quote symbol"
                  className="w-8 h-8 object-contain max-sm:hidden"
              />
            </div>
          </header>
          <blockquote className="relative text-lg font-semibold leading-6 text-gray-800">
            &quot;{quote}&quot;
          </blockquote>
        </div>
      </section>
  );
};
