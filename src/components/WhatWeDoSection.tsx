/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { JSX, useState } from "react";

const WhatWeDoSection = ({
  data,
  solutionEntries,
}: {
  data: any;
  solutionEntries: any;
}) => {
  const defaultSlug = solutionEntries[0].fields.slug;
  const [activeId, setActiveId] = useState<string | null>(defaultSlug);

  const handleToggle = (slug: string) => {
    setActiveId((prevId) => (prevId === slug ? null : slug));
  };

  const activeItem = solutionEntries.find(
    (item: any) => item.fields.slug === activeId
  );

  return (
    <section className="relative bg-texture px-4 md:px-12 lg:px-[128px] py-16 overflow-hidden">
      <img
        src="/overlay.png"
        alt="Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      />
      <div className="relative z-10 w-full mx-auto">
        <h2 className="text-[128px] font-medium font-heading uppercase text-white">
          {data.headline}
        </h2>
        <p className="mb-10 text-xl font-normal text-white leading-7">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Accordion Section */}
          <div>
            {solutionEntries.map(
              (
                item: {
                  fields: {
                    slug: string;
                    title: string;
                    description: string;
                    icon: JSX.Element;
                  };
                },
                index: React.Key | null | undefined
              ) => (
                <div key={index} className="py-4 border-b-2 border-[#FFFFFF40]">
                  <div
                    className={`transition-all duration-300 ${
                      activeId === item.fields.slug
                        ? "border-l-3 border-yellow pl-4"
                        : "pl-0"
                    }`}
                  >
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() => handleToggle(item.fields.slug)}
                    >
                      <div className="flex items-center gap-3 py-2">
                        {/* Circle with icon inside */}
                        <div
                          className={`p-2 rounded-full border ${
                            activeId === item.fields.slug
                              ? "border-yellow"
                              : "border-white"
                          }`}
                          style={{ backgroundColor: "transparent" }}
                        >
                          {item.fields.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className={`font-button uppercase text-xl font-medium leading-7 ${
                            activeId === item.fields.slug
                              ? "text-yellow"
                              : "text-white"
                          }`}
                        >
                          {item.fields.title}
                        </h3>
                      </div>
                    </button>

                    {/* Description */}
                    {activeId === item.fields.slug &&
                      item.fields.description && (
                        <p className="text-white text-xl font-normal leading-7 pl-0 pr-2 pb-3">
                          {item.fields.description}
                        </p>
                      )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={`https:${activeItem.fields.heroImageResolved.fields.file.url}`}
              alt={activeItem.fields.title}
              className="w-full h-[500px] object-cover transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
