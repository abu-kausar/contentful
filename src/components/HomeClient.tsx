/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import LandingHero from "@/components/LandingHero";
import SplitSectionBlogSlider from "@/components/SplitSectionBlogSlider";
import CampaignTicker from "@/components/CampaignTicker";
import ColorSection from "@/components/ColorSection";
// import FeaturedSectionWithVideo from "@/components/FeaturedSectionWithVideo";
// import ArrowsCarousel from "@/components/ArrowCarousel";

export default function HomeClient({
  landingData,
  equitySectionData,
  payTheFeeSectionData,
  whatWeDoSectionData,
  solutionEntries,
  volunteerSectionData,
}: {
  landingData: any;
  equitySectionData: any;
  payTheFeeSectionData: any;
  whatWeDoSectionData: any;
  solutionEntries: any;
  volunteerSectionData: any;
}) {
  // const [selected, setSelected] = useState("recent");

  if (!landingData) {
    return <div>No content found.</div>;
  }

  return (
    <div className="">
      <LandingHero
        title={landingData.mainSplashHeadline}
        description={landingData.mainSplashDescription}
      />

      <CampaignTicker
        campaignTickerText={landingData.marqueeTickerText}
        marqueeTickerLink={landingData.marqueeTickerLink}
      />

      <ColorSection
        title={equitySectionData.headline}
        subtitle={equitySectionData.blurb}
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
        title={payTheFeeSectionData.headline}
        subtitle={payTheFeeSectionData.blurb}
        buttonLabel="Donate"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-red"
        showButton={true}
      />

      <SplitSectionBlogSlider
        data={whatWeDoSectionData}
        solutionEntries={solutionEntries}
      />

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
        title={volunteerSectionData.headline}
        subtitle={volunteerSectionData.blurb}
        buttonLabel="Tap In"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-green"
        showButton={true}
      />
    </div>
  );
}
