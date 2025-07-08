import Link from "next/link";
import { FC } from "react";

export interface ArticlePreviewFields {
  title: string;
  image: string;
  description: string;
}

interface BlogSlideProps {
  title: string;
  image: string;
  description: string;
}

export const BlogSlide: FC<BlogSlideProps> = ({ title, image, description }) => {
  return (
    <Link href="">
      <div className="text-white text-center">
        <img
          alt="blog image"
          src={image}
          className="w-full h-full my-8"
        />
        <h2 className="font-button text-2xl uppercase tracking-wide pb-4">
          {title}
        </h2>
        <div className="markdown font-body text-xl text-white px-4 pb-16">
          {description}
        </div>
      </div>
    </Link>
  );
};