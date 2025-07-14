import { BlogSlideProps } from "@/app/utils/types";
import Link from "next/link";
import { FC } from "react";

export const BlogSlide: FC<BlogSlideProps> = ({
  title,
  slug,
  image,
  description,
}) => {
  return (
    <Link href={slug}>
      <div className="text-white text-center">
        <img
          alt="blog image"
          src={image}
          className="w-full h-[246px] sm:h-[325px] md:h-[145px] lg:h-[217px] xl:h-[290px] 2xl:h-[450px] my-8"
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
