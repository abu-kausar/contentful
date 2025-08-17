/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SolutionsPageFields } from "@/app/utils/types";
import { fetchEntries } from "@/lib/contentful";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const entries = await fetchEntries<SolutionsPageFields>("solutionPage");

  const entry = entries.find((e) => e.fields.slug === slug);

  if (!entry) {
    return <div>No content found.</div>;
  }

  const content = entry.fields;
  const heroImage = content.heroImageResolved;

  return (
    <div className="custom-iamgeBackground">
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        c
        {/* TODO: add call to action
         <div className="flex items-center justify-center">
          <a
            href=""
            className="bg-red text-black px-5 py-2 rounded-full text-base uppercase font-bold hover:bg-green- hover:text-white"
          >
            take action
          </a>
        </div> */}
      </div>
      <h2 className="p-8 md:p-16 text-white font-heading font-bold text-5xl uppercase tracking-wide py-6">
        Related Links
      </h2>
    </div>
  );
};

export default SlugPage;