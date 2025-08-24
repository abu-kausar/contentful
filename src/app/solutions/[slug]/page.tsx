/* eslint-disable @next/next/no-img-element */

import { ArticleProps, BlogPostProps } from "@/app/utils/types";
import { fetchAssetById, fetchEntries, fetchEntryById } from "@/lib/contentful";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const entries = await fetchEntries<BlogPostProps>("solutionPage");

  const entry = entries.find((e) => e.fields.slug === slug);

  if (!entry) {
    return <div>No content found.</div>;
  }

  const content = entry.fields;
  const heroImage = content.heroImageResolved;
  const heroImageUrl = heroImage
    ? `https:${heroImage.fields.file.url}`
    : "/defaultImage.png";

  const articles = content?.articles ?? [];

  const articlesData =
    articles.length > 0
      ? await Promise.all(
          articles.map(async (a) => {
            try {
              const article = await fetchEntryById<ArticleProps>(a.sys.id);

              let articleHeroUrl = "/defaultImage.png";
              const articleHeroId = article.fields.heroImage?.sys?.id;

              if (articleHeroId) {
                const asset = await fetchAssetById(articleHeroId);
                if (asset?.fields?.file?.url) {
                  articleHeroUrl = `https:${asset.fields.file.url}`;
                }
              }

              return { ...article, heroImageUrl: articleHeroUrl };
            } catch (err) {
              console.warn(`Skipping article ${a.sys.id}:`, err);
              return null;
            }
          })
        ).then((results) => results.filter(Boolean))
      : [];

  console.log("articles", articlesData);

  return (
    <div className="custom-iamgeBackground">
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        <img
          src={heroImageUrl}
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

      {articlesData.length > 0 && (
        <div className="p-8 md:p-16">
          <h2 className="text-white font-heading font-bold text-5xl uppercase tracking-wide py-6">
            Related Links
          </h2>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articlesData.map((article, index) => (
              <a key={index} href={`/all-blog/${article?.fields.slug}`}>
                <div className="text-white text-center hover-yellow-text flex flex-col h-full cursor-pointer hover:text-yellow">
                  <img
                    src={article?.heroImageUrl || "/defaultImage.png"}
                    alt={article?.fields.title || ""}
                    className="w-full lg:h-[300px] 2xl:h-[380px]"
                  />
                  <h1 className="pt-2 text-2xl flex justify-start items-center text-left">
                    {article?.fields.title}
                  </h1>
                  <p className="px-2 text-white">
                    {article?.fields.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlugPage;
