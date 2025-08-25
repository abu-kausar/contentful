/* eslint-disable @next/next/no-img-element */
import { ArticleProps, BlogPostProps } from "@/app/utils/types";
import BackButton from "@/components/BackButton";
import { fetchAssetById, fetchEntries, fetchEntryById } from "@/lib/contentful";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const entries = await fetchEntries<BlogPostProps>("blogPost");

  const entry = entries.find((e) => e.fields.slug === slug);

  if (!entry) {
    return (
      <div className="custom-iamgeBackground">
        <h1 className="font-heading font-bold text-8xl md:text-9xl uppercase tracking-wide p-8 md:p-16 text-white">
          No Content Found
        </h1>
        <p className="font-body text-xl pl-8 pb-8 md:pl-16 md:pb-16 text-white">
          No content found for this url. Explore others <BackButton />
        </p>
      </div>
    );
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
          })
        )
      : [];

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

      {/* article section */}
      {articlesData.length > 0 && (
        <div className="grid grid-cols-1 gap-4 px-8 max-w-screen-lg mx-auto">
          {articlesData.map((article, index) => (
            <a key={index} href={article.fields.url} target="_blank">
              <div className="mb-4">
                <div className="flex items-center flex-col md:flex-row text-white rounded-lg w-full gap-4 md:gap-8">
                  <div className="w-full md:w-1/3">
                    <Image
                      src={article.heroImageUrl}
                      alt="Event Banner"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                      className="w-full h-[245px] sm:h-[384px] md:h-[200px] object-cover object-center"
                    />
                  </div>

                  <div className="w-full md:w-2/3 hover:text-yellow">
                    <h2 className="font-button text-2xl font-bold uppercase mb-2">
                      {article.fields.title}
                    </h2>
                    <p className="text-sm text-white leading-relaxed">
                      {article.fields.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlugPage;
