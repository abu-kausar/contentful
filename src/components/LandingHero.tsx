"use client";
import React from "react";

const LargeVideo = () => {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const onLoadedData = () => {
//     setIsVideoLoaded(true);
//   };
  return (
    <video
      autoPlay
      muted
      controls
      loop
      playsInline
      className="focus:outline-none w-full h-[667px] appl1-hdvd-xx"
      onLoadedData={onLoadedData}
    >
      <source
        src="https://d2j8oo2nydfmnp.cloudfront.net/sizzle-less-cropped.m4v"
        type="video/mp4"
      />
    </video>
  );
};

const LandingHero = () => {
//   const [displayContent, setDisplayContent] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setDisplayContent(true);
//     }, 150);
//   }, []);

  return (
    <div className="flex flex-col md:flex-row md:min-h-3/4-screen">
      <div className="w-full md:w-1/2 bg-texture border-none flex justify-center items-center py-5 pb-10"
      >
        <div
          className="px-8 md:px-16 opacity-100 transition-opacity text-white"
        >
          {/* <XLHeader>{mainSplashHeadline}</XLHeader> */}
          <h1 className="font-heading font-bold text-8xl md:text-9xl uppercase tracking-wide">
            Building Black Power
          </h1>
          {/* <MarkdownContainer className="text-white py-8">
            {mainSplashDescription.childMarkdownRemark.html}
          </MarkdownContainer>*/}
          <div className="markdown font-body text-xl text-white py-8">
            King County Equity Now (KCEN) is a pro-Black advocacy and policy
            organizing nonprofit focused on developing liberated Black
            communities that own and control the resources and systems that
            impact Black lives. We are Black-led, Black-centered, and birthed
            out of a deep legacy of Black organizing in Martin Luther King Jr.
            County, Washington State.
          </div>
          {/* <ButtonNewWindow to={mainSplashCtaLink} variant={VariantRed}>
            {mainSplashCtaButtonText}
          </ButtonNewWindow> */}
          <a href="" target="_blank" rel="noreferrer">
            <button
              className={`px-10 py-2 cursor-pointer bg-green focus:outline-none rounded-full font-button uppercase tracking-wider`}
            >
              Recent wins
            </button>
          </a>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 opacity-100 transition-opacity pr-10"
      >
        <LargeVideo />
      </div>
    </div>
  );
};

export default LandingHero;
