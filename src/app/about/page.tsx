/* eslint-disable @next/next/no-img-element */
import { fetchEntries } from "@/lib/contentful";
import React from "react";
import ReactMarkdown from "react-markdown";
import { AboutPageFields } from "../utils/types";
import rehypeRaw from "rehype-raw";

const AboutPage = async () => {
  const entries = await fetchEntries<AboutPageFields>("blogPost");

  if (entries.length === 0) {
    return <div>No content found.</div>;
  }

  const about = entries[0].fields;
  const heroImage = about.heroImageResolved;

  return (
    <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
      <img
        src={`https:${heroImage.fields.file.url}`}
        alt="about hero image"
        className="top-0 left-0 w-full h-[245px] sm:h-[324px] md:h-[360px] lg:h-[503px] object-cover object-center"
      />
      <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
        {about?.title}
      </h2>
      <article className="markdown text-xl py-8 text-justify">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{about.body}</ReactMarkdown>
      </article>
    </div>
  );
};

export default AboutPage;
