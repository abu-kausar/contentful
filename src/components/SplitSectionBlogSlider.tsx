import React from "react";
import { BlogSlide } from "./BlogSlide";
import { SplitArrowCarousel } from "./SplitArrowCarousel";

const featuredBlogPosts = [
  {
    index: 1,
    title: "Black Land Ownership",
    description:
      "When we say equity, we mean ownership. Thriving Black communities require control and agency over land. We prioritize Black land acquisition as a foundational pillar to our work.",
    image: "/march.jpeg ",
  },
  {
    index: 2,
    title: "Black Education",
    description:
      "When we say equity, we mean ownership. Thriving Black communities require control and agency over land. We prioritize Black land acquisition as a foundational pillar to our work.",
    image: "/april.jpg ",
  },
  {
    index: 3,
    title: "Black Finance",
    description:
      "When we say equity, we mean ownership. Thriving Black communities require control and agency over land. We prioritize Black land acquisition as a foundational pillar to our work.",
    image: "/may.jpg ",
  },
  {
    index: 4,
    title: "Black Community Safety",
    description:
      "When we say equity, we mean ownership. Thriving Black communities require control and agency over land. We prioritize Black land acquisition as a foundational pillar to our work.",
    image: "/june.jpg ",
  },
  {
    index: 5,
    title: "Black Health",
    description:
      "When we say equity, we mean ownership. Thriving Black communities require control and agency over land. We prioritize Black land acquisition as a foundational pillar to our work.When we say equity, we mean ownership. Thriving Black communities require control and agency over land. We prioritize Black land acquisition as a foundational pillar to our work.",
    image: "/july.jpg ",
  },
];

const SplitSectionBlogSlider = () => {
  return (
    <section className="border-t-2 border-b-2 border-gray-200 flex flex-col md: items-center md:flex-row">
      <div
        className={`w-full text-white hover:text-yellow md:w-1/2 px-8 md:px-16`}
      >
        <div className="h-full w-full flex flex-col justify-center items-center hover-yellow-text">
          <h1 className="w-full font-heading font-bold text-8xl md:text-9xl uppercase tracking-wide">
            what we do
          </h1>
          <div className="markdown font-body text-xl text-white py-8">
            KCEN identifies and uplifts powerful equity solutions that, if
            followed, would bring the Black community to equity across all
            measurable metrics including e.g., land, wealth, education, health,
            safety, organizational control and more. Scroll to the right to read
            our equity solutions.
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:w-1/2 px-8 md:px-16 md:border-b-0 md:border-l-2 border-gray-200">
        <SplitArrowCarousel>
          {featuredBlogPosts.map((blog, index) => (
            <BlogSlide
              key={index}
              title={blog.title}
              image={blog.image}
              description={blog.description}
            />
          ))}
        </SplitArrowCarousel>
      </div>
    </section>
  );
};

export default SplitSectionBlogSlider;
