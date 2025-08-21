/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const InitiativePageClient = ({ entries }: { entries: any[] }) => {
  const [filter, setFilter] = useState("All");
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (entries.length === 0) {
    return <div>No content found.</div>;
  }

  return (
    <div className="custom-iamgeBackground">
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8">
          <div className="w-full text-center md:text-left md:w-1/2 pr-10">
            <h1 className="font-heading text-center md:text-left text-white font-bold text-5xl md:text-8xl uppercase">
              Making a difference through one initiative at a time.
            </h1>
            <p className="text-center md:text-left text-white text-xl mt-2">
              We are Black-led, Black-centered, and birthed out of a deep legacy
              of Black organizing in Martin Luther King Jr. County, Washington
              State.
            </p>
            <button
              data-campaign-id="4028"
              data-custom="true"
              className="commitchange-donate focus:outline-none rounded-full font-button py-2 uppercase tracking-wider text-black bg-yellow px-6 mb-4 md:mb-0 mt-5 cursor-pointer"
            >
              Make a Donation
            </button>
          </div>

          <div className="w-full h-full md:w-1/2">
            <img src="/initiative.png" className="w-full h-full" alt="Hero" />
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex flex-col mt-10">
          <h1 className="text-white text-5xl font-heading font-bold uppercase">
            Trending
          </h1>

          <div className="relative mt-5">
            {/* Custom Navigation Buttons */}
            <div className="absolute -top-16 right-0 flex gap-4 z-10">
              <button
                ref={prevRef}
                className="bg-red hover:bg-red-700 text-white px-6 py-3 flex items-center justify-center cursor-pointer"
                aria-label="Previous"
              >
                <img src="/Left_Arrow.png" alt="Prev" />
              </button>
              <button
                ref={nextRef}
                className="bg-green hover:bg-green-700 text-white px-6 py-3 flex items-center justify-center cursor-pointer"
                aria-label="Next"
              >
                <img src="/Right_Arrow.png" alt="Next" />
              </button>
            </div>

            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              loop
              initialSlide={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onBeforeInit={(swiper) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              navigation={
                prevRef.current && nextRef.current
                  ? {
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }
                  : false
              }
              breakpoints={{
                320: { slidesPerView: 1, centeredSlides: false }, // mobile small
                640: { slidesPerView: 3, centeredSlides: true }, // sm
                768: { slidesPerView: 2, centeredSlides: false }, // md → exactly 2
                1024: { slidesPerView: 3, centeredSlides: true }, // lg+
              }}
            >
              {entries.map((item) => {
                const imageUrl = item.fields.heroImageResolved?.fields?.file
                  ?.url
                  ? `https:${item.fields.heroImageResolved.fields.file.url}`
                  : "/defaultImage.png";

                return (
                  <SwiperSlide key={item.id}>
                    <Link
                      href={`/all-blog/${item.fields.slug}`}
                      className="flex flex-col items-center"
                    >
                      <img
                        src={imageUrl}
                        alt={
                          item.fields.heroImageResolved?.fields?.description ||
                          "Default Blog Image"
                        }
                        className="w-full h-[432px] object-cover"
                      />

                      <div className="text-center p-2 mt-4 w-full">
                        <p className="text-white text-lg uppercase truncate">
                          {item.fields.title}
                        </p>
                        <p className="text-white text-base font-light mt-2 truncate">
                          {item.fields.slug}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {/* Filtered Contents */}
        <div className="py-10">
          <div className="w-full">
            <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
              {[
                "All",
                "Recent Wins",
                "News & Publications",
                "Current Initiatives",
                "Blogs",
              ].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setFilter(btn)}
                  className={`w-full px-2 py-3 md:py-5 text-white outline-none border-none shadow-none 
                        text-base font-button font-bold uppercase cursor-pointer 
                        ${
                          filter === btn ? "bg-red" : "bg-blue-500 hover:bg-red"
                        }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* recent wins section */}
            {(filter === "All" || filter === "Recent Wins") && (
              <div>
                <div className="flex items-center justify-between mt-10">
                  <h1 className="text-white text-5xl font-heading font-bold uppercase">
                    Recent Wins
                  </h1>
                  <Link href="/all-blog">
                    <p className="uppercase text-white text-base">View all</p>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-[100%]">
                  {entries
                    .slice(filter === "All" ? 0 : 0, filter === "All" ? 3 : 6)
                    .map((item) => {
                      const imageUrl = item.fields.heroImageResolved?.fields
                        ?.file?.url
                        ? `https:${item.fields.heroImageResolved.fields.file.url}`
                        : "/defaultImage.png";

                      return (
                        <Link
                          key={item.fields.slug}
                          href={`/all-blog/${item.fields.slug}`}
                          className="flex flex-col items-center"
                        >
                          <img
                            src={imageUrl}
                            alt={
                              item.fields.heroImageResolved?.fields
                                ?.description || "Default Blog Image"
                            }
                            className="w-full h-[432px] object-cover"
                          />

                          <div className="text-center p-2 mt-4 w-full">
                            <p className="text-white text-lg uppercase truncate">
                              {item.fields.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            )}

            {/* news and publication section */}
            {(filter === "All" || filter === "News & Publications") && (
              <div>
                <div className="flex items-center justify-between mt-10">
                  <h1 className="text-white text-5xl font-heading font-bold uppercase">
                    News & Publications
                  </h1>
                  <Link href="/all-blog">
                    <p className="uppercase text-white text-base">View all</p>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5 w-[100%]">
                  {entries.slice(0, 5).map((item, index) => {
                    const imageUrl = item.fields.heroImageResolved?.fields?.file
                      ?.url
                      ? `https:${item.fields.heroImageResolved.fields.file.url}`
                      : "/defaultImage.png";

                    return (
                      <Link
                        key={item.fields.slug}
                        href={`/all-blog/${item.fields.slug}`}
                        className={`${
                          index === 0
                            ? "md:col-span-2 flex flex-col md:flex-row text-white border border-[#a09999]"
                            : "flex flex-col items-center"
                        }`}
                      >
                        {/* First card (special layout) */}
                        {index === 0 ? (
                          <>
                            {/* Text side */}
                            <div className="flex flex-col justify-center p-6 w-full md:w-1/2 text-left">
                              <h2 className="text-white text-xl md:text-2xl font-bold uppercase mb-3">
                                {item.fields.title}
                              </h2>
                              <p className="text-white text-base mb-3 line-clamp-4 border-t border-[#a09999] pt-3">
                                {item.fields.description ||
                                  "Click to read more about this publication."}
                              </p>
                              <span className="text-yellow-400 font-semibold cursor-pointer">
                                Read more
                              </span>
                            </div>

                            {/* Image side */}
                            <div className="w-full md:w-1/2">
                              <img
                                src={imageUrl}
                                alt={
                                  item.fields.heroImageResolved?.fields
                                    ?.description || "Default Blog Image"
                                }
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Normal cards */}
                            <img
                              src={imageUrl}
                              alt={
                                item.fields.heroImageResolved?.fields
                                  ?.description || "Default Blog Image"
                              }
                              className="w-full object-cover h-68"
                            />
                            <div className="text-center p-2 mt-4 w-full">
                              <p className="text-white text-lg uppercase truncate">
                                {item.fields.title}
                              </p>
                            </div>
                          </>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* current initiatives section */}
            {(filter === "All" || filter === "Current Initiatives") && (
              <div>
                <div className="flex items-center justify-between mt-10">
                  <h1 className="text-white text-5xl font-heading font-bold uppercase">
                    Current Initiatives
                  </h1>
                  <Link href="/all-blog">
                    <p className="uppercase text-white text-base">View all</p>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-[100%]">
                  {entries
                    .slice(filter === "All" ? 0 : 0, filter === "All" ? 3 : 6)
                    .map((item) => {
                      const imageUrl = item.fields.heroImageResolved?.fields
                        ?.file?.url
                        ? `https:${item.fields.heroImageResolved.fields.file.url}`
                        : "/defaultImage.png"; // <-- fallback

                      return (
                        <Link
                          key={item.fields.slug}
                          href={`/all-blog/${item.fields.slug}`}
                          className="flex flex-col items-center"
                        >
                          <img
                            src={imageUrl}
                            alt={
                              item.fields.heroImageResolved?.fields
                                ?.description || "Default Blog Image"
                            }
                            className="w-full h-[432px] object-cover"
                          />

                          <div className="text-center p-2 mt-4 w-full">
                            <p className="text-white text-lg uppercase truncate">
                              {item.fields.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            )}

            {/* blogs section */}
            {(filter === "All" || filter === "Blogs") && (
              <div>
                {/* Header Section */}
                <div className="flex items-center justify-between mt-10">
                  <h1 className="text-white text-5xl font-heading font-bold uppercase">
                    Blogs
                  </h1>
                  <Link href="/all-blog">
                    <p className="uppercase text-white text-base">View all</p>
                  </Link>
                </div>

                {/* Blog Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-full">
                  {/* Left Column (2 stacked small cards) */}
                  <div className="flex flex-col gap-5 xl:h-[640px]">
                    {entries.slice(0, 2).map((item) => {
                      const imageUrl = item.fields.heroImageResolved?.fields
                        ?.file?.url
                        ? `https:${item.fields.heroImageResolved.fields.file.url}`
                        : "/defaultImage.png";

                      return (
                        <Link
                          key={item.fields.slug}
                          href={`/all-blog/${item.fields.slug}`}
                          className="flex flex-col"
                        >
                          <img
                            src={imageUrl}
                            alt={
                              item.fields.heroImageResolved?.fields
                                ?.description || "Default Blog Image"
                            }
                            className="w-full h-[250px] object-cover"
                          />
                          <div className="text-center p-2 mt-4 w-full">
                            <p className="text-white text-lg uppercase truncate">
                              {item.fields.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right Column (Big Featured Card) */}
                  <div>
                    {entries[2] && (
                      <Link
                        href={`/all-blog/${entries[2].fields.slug}`}
                        className="relative block w-full h-full xl:h-[640px]"
                      >
                        <img
                          src={
                            entries[2].fields.heroImageResolved?.fields?.file
                              ?.url
                              ? `https:${entries[2].fields.heroImageResolved.fields.file.url}`
                              : "/defaultImage.png"
                          }
                          alt={
                            entries[2].fields.heroImageResolved?.fields
                              ?.description || "Default Blog Image"
                          }
                          className="w-full h-full object-cover rounded"
                        />
                        {/* Overlay Content */}
                        <div className="absolute bottom-8 left-8">
                          <p className="text-white text-lg uppercase font-bold max-w-[100%]">
                            {entries[2].fields.title}
                          </p>
                          <button className="mt-2 px-4 py-2 bg-[#b7953b] rounded text-black text-sm uppercase font-semibold opacity-100 cursor-pointer">
                            Read More
                          </button>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativePageClient;
