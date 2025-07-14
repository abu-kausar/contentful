/* eslint-disable @typescript-eslint/no-unused-vars */
import { SolutionsPageFields } from "@/app/utils/types";
import { fetchEntries } from "@/lib/contentful";
import React from "react";
import ReactMarkdown from "react-markdown";

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
    <>
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        <img
          src={`https:${heroImage.fields.file.url}`}
          alt="land owners image"
          className="top-0 left-0 w-full h-full object-cover object-center"
        />
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
          {content.title}
        </h2>
        <article className="markdown text-xl py-8 text-justify use-source-sans-pro">
          <ReactMarkdown>{content.body}</ReactMarkdown>
        </article>
        {/*<div className="text-xl py-8 text-justify font-markdown-body">
          <p className="pb-4">
            When we say equity, we mean ownership. Thriving Black communities
            require control and agency over land. We prioritize Black land
            acquisition as a foundational pillar to our work.
            <br />
            <br />
            Seattle, Martin Luther King Jr. County has historically been the
            base for the vast majority of Washington State&apos;s Black
            population. Decades of racist covenants and anti-Black racial
            hostility narrowed places where the Black community could call home.
            In spite of such hostile and adverse circumstances, Blacks in
            Washington created vibrant communities in the spaces afforded,
            particularly in the Central District of Seattle and South Seattle.
            <br />
            <br />
            As demand for land grows at an unprecedented pace, the rapid
            gentrification and exclusion of Blacks from Seattle is important not
            merely due to the dismantling of historical Black cultural and
            societal spaces, but also due to the socio-economic, health, wealth,
            and education implications resulting from Blacks being pushed out of
            the State&apos;s largest economic and cultural engine.
            <br />
            <br />
            Below is a list of active Black land acquisition campaigns. Read,
            engage and tap-in below to support immediate opportunities to impact
            the material conditions of Black peoples locally, right now.
          </p>
        </div>
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
    </>
  );
};

export default SlugPage;