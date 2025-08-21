/* eslint-disable @next/next/no-img-element */
import { fetchEntries } from "@/lib/contentful";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BlogPostProps } from "../utils/types";

const AboutPage = async () => {
  const entries = await fetchEntries<BlogPostProps>("blogPost");

  // Find the entry with slug = "about-us"
  const aboutEntry = entries.find(
    (entry) => entry.fields.slug === "about-us"
  );

  if (!aboutEntry) {
    return <div>No content found.</div>;
  }

  const about = aboutEntry.fields;
  const heroImage = about.heroImageResolved;

  return (
    <div className="custom-iamgeBackground">
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        {heroImage && (
          <img
            src={`https:${heroImage.fields.file.url}`}
            alt="about hero image"
            className="top-0 left-0 w-full h-[245px] sm:h-[324px] md:h-[360px] lg:h-[503px] object-cover object-center"
          />
        )}
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
          {about?.title}
        </h2>
        <article className="markdown text-xl py-8 text-justify">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {about.body}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;