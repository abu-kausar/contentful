"use client";
import LandingHero from "@/components/LandingHero";
import SplitSectionBlogSlider from "@/components/SplitSectionBlogSlider";
import CampaignTicker from "@/components/CampaignTicker";
import ColorSection from "@/components/ColorSection";
// import FeaturedSectionWithVideo from "@/components/FeaturedSectionWithVideo";
// import ArrowsCarousel from "@/components/ArrowCarousel";
// import Link from "next/link";
// import { useState } from "react";

// const featuredBlogPosts = [
//   {
//     index: 1,
//     title: "Black Community-Owned Health Institutions",
//     image: "/community.jpeg ",
//   },
//   {
//     index: 2,
//     title: "Take All Freedom Actions",
//     image: "/land.jpg ",
//   },
//   {
//     index: 3,
//     title: "Help Invest $300M in the Black Community",
//     image: "/education.jpg ",
//   },
//   {
//     index: 4,
//     title: "Help Build the Family Empowerment Center",
//     image: "/finance.jpg ",
//   },
//   {
//     index: 5,
//     title: "Support Black Farming Liberation",
//     image: "/health.jpg ",
//   },
// ];

export default function Home() {
  // const [selected, setSelected] = useState("recent");

  return (
    <div className="">
      <LandingHero />

      <CampaignTicker campaignTickerText="KING COUNTY EQUITY NOW" />

      <ColorSection
        title="We have a plan"
        subtitle="We leverage the brilliance of our local Black ecosystem to identify, elevate, and co-create Black equity
          solutions to combat anti-Black racism and bring about sustained, thriving Black communities."
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-green"
        showButton={false}
      />

      {/* <section>
        <div className="flex w-full px-8 md:px-12 mt-8 flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-x-2">
          <h2 className="font-button text-xl uppercase tracking-wide pb-4 mr-5 text-white mt-4">
            Recent Actions
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-x-2">
            <a target="_blank" rel="noreferrer">
              <button onClick={() => setSelected("recent")} className={`w-fit focus:outline-none font-button py-2 px-5 uppercase tracking-wider ${selected === "recent" ? "bg-red" : "bg-black"} hover:bg-red-500 text-white rounded-none undefined cursor-pointer`}>
                Recent wins
              </button>
            </a>
            <a target="_blank" rel="noreferrer">
              <button onClick={() => setSelected("freedom")} className={`w-fit focus:outline-none font-button py-2 px-5 uppercase tracking-wider ${selected === "freedom" ? "bg-red" : "bg-black"} hover:bg-red-500 text-white rounded-none undefined cursor-pointer`}>
                Freedom Actions
              </button>
            </a>
            <a target="_blank" rel="noreferrer">
              <button onClick={() => setSelected("initiatives")} className={`w-fit focus:outline-none font-button py-2 px-5 uppercase tracking-wider ${selected === "initiatives" ? "bg-red" : "bg-black"} hover:bg-red-500 text-white rounded-none undefined cursor-pointer`}>
                Initiatives
              </button>
            </a>
          </div>
        </div>
        <ArrowsCarousel>
          {featuredBlogPosts.map((blog, index) => (
            <Link key={index} href="">
              <div className="text-white">
                <img
                  alt="blog image"
                  src={blog?.image}
                  className="w-full h-[200px] my-2"
                />
                <h2 className="text-2xl tracking-wide pb-4">
                  {blog?.title}
                </h2>
              </div>
            </Link>
          ))}
        </ArrowsCarousel>
      </section> */}

      <ColorSection
        title="#PaytheFee"
        subtitle="Help make this work more sustainable and donate (#PayTheFee)."
        buttonLabel="Donate"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-red"
        showButton={true}
      />

      <SplitSectionBlogSlider />

      <ColorSection
        title="We Are Africatown"
        subtitle="Watch our latest episode in We Are Africatown video series. Help Sami's Corner Store expand and grow"
        linkText="here"
        linkHref="https://www.gofundme.com/f/save-sami039s-store"
        linkColorClass="text-yellow"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-bostonBlue"
        showButton={false}
      />

      {/* <FeaturedSectionWithVideo youTubeLink="https://www.youtube.com/watch?v=O8rL4YcPH1g" /> */}

      <ColorSection
        title="Join the team"
        subtitle="Sign-up to volunteer."
        buttonLabel="Tap In"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-green"
        showButton={true}
      />
    </div>
  );
}