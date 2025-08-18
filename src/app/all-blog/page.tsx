/* eslint-disable @next/next/no-img-element */
import { fetchEntries } from "@/lib/contentful";
import { BlogPostProps } from "../utils/types";
import Link from "next/link";

const AllBlogsPage = async () => {
  const entries = await fetchEntries<BlogPostProps>("blogPost");

  // define a default image path (can be local or external)
  const defaultImage = "/defaultImage.png"; 

  return (
    <div className="custom-iamgeBackground">
      <div className="container mx-auto px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-full">
          {entries.map((item, index) => {
            const imageUrl =
              item.fields.heroImageResolved?.fields?.file?.url
                ? `https:${item.fields.heroImageResolved.fields.file.url}`
                : defaultImage;

            const imageAlt =
              item.fields.heroImageResolved?.fields?.description || "Blog Image";

            return (
              <Link
                key={index}
                href={`/all-blog/${item.fields.slug}`}
                className="flex flex-col items-center mt-1"
              >
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-[432px] object-cover"
                />
                <div className="text-center p-2 mt-4 w-full">
                  <p className="text-white text-lg uppercase truncate w-full">
                    {item.fields.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;