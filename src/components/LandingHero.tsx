"use client";
import React from "react";

const LargeVideo = () => {
  return (
    <div className="relative w-full video-height overflow-hidden lg:py-2 xl:py-5">
      <video
        autoPlay
        muted
        controls
        loop
        playsInline
        className="w-full h-full object-cover object-center focus:outline-none"
      >
        <source
          src="https://d2j8oo2nydfmnp.cloudfront.net/sizzle-less-cropped.m4v"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

const LandingHero = () => {
  return (
    <div className="flex flex-col md:items-center md:flex-row md:min-h-3/4-screen">
      <div className="w-full md:w-1/2 bg-texture border-none flex justify-center items-center py-5 md:pb-10"
      >
        <div
          className="px-8 md:px-16 opacity-100 transition-opacity text-white"
        >
          <h1 className="font-heading font-bold text-8xl md:text-9xl uppercase tracking-wide">
            Building Black Power
          </h1>
          <div className="markdown font-body text-xl text-white py-8">
            King County Equity Now (KCEN) is a pro-Black advocacy and policy
            organizing nonprofit focused on developing liberated Black
            communities that own and control the resources and systems that
            impact Black lives. We are Black-led, Black-centered, and birthed
            out of a deep legacy of Black organizing in Martin Luther King Jr.
            County, Washington State.
          </div>
          <a href="/recentwins" rel="noreferrer">
            <button
              className={`px-10 py-2 cursor-pointer bg-green hover:bg-white text-white hover:text-green focus:outline-none rounded-full font-button uppercase tracking-wider`}
            >
              Recent wins
            </button>
          </a>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 opacity-100 transition-opacity md:pr-10"
      >
        <LargeVideo />
      </div>
    </div>
  );
};

export default LandingHero;
