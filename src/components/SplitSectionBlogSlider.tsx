/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { BlogSlide } from "./BlogSlide";
import { SplitArrowCarousel } from "./SplitArrowCarousel";

const SplitSectionBlogSlider = ({
  data,
  solutionEntries,
}: {
  data: any;
  solutionEntries: any;
}) => {

  return (
    <section className="border-t-2 border-b-2 border-gray-200 flex flex-col md: items-center md:flex-row">
      <div
        className={`w-full text-white hover:text-yellow md:w-1/2 px-8 md:px-16`}
      >
        <div className="h-full w-full flex flex-col justify-center items-center hover-yellow-text">
          <h1 className="w-full font-heading font-bold text-8xl md:text-9xl uppercase tracking-wide">
            {data.headline}
          </h1>
          <div className="font-body text-xl text-white py-8">
            {data.description}
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:w-1/2 px-8 md:px-16 md:border-b-0 md:border-l-2 border-gray-200">
        <SplitArrowCarousel>
          {solutionEntries.map(
            (
              solution: {
                fields: {
                  title: string;
                  slug: string;
                  heroImageResolved: { fields: { file: { url: any } } };
                  description: string;
                };
              },
              index: React.Key | null | undefined
            ) => (
              <BlogSlide
                key={index}
                title={solution.fields.title}
                slug={`/solutions/${solution.fields.slug}`}
                image={`https:${solution.fields.heroImageResolved.fields.file.url}`}
                description={solution.fields.description}
              />
            )
          )}
        </SplitArrowCarousel>
      </div>
    </section>
  );
};

export default SplitSectionBlogSlider;
