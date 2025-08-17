import { BlogPostProps } from "@/app/utils/types";
import { fetchEntries } from "@/lib/contentful";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const entries = await fetchEntries<BlogPostProps>("blogPost");

  const entry = entries.find((e) => e.fields.slug === slug);

  if (!entry) {
    return <div>No content found.</div>;
  }

  const content = entry.fields;
  const heroImage = content.heroImageResolved;
  return (
    <div className="custom-iamgeBackground">
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        <img
          src={`https:${heroImage.fields.file.url}`}
          alt="land owners image"
          className="top-0 left-0 w-full h-[245px] sm:h-[324px] md:h-[360px] lg:h-[503px] object-cover object-center"
        />
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
          {content.title}
        </h2>
        <article className="markdown text-xl py-8 text-justify">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {content.body}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default SlugPage;
