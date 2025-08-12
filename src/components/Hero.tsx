/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface HeroProps {
  title: string;
}

const MASK_URL = "/videoOverlay.svg";

const maskStyle: React.CSSProperties = {
  WebkitMaskImage: `url(${MASK_URL})`,
  maskImage: `url(${MASK_URL})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "cover",
  maskSize: "cover",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

const LargeVideo = ({ onPlay }: { onPlay: () => void }) => {
  return (
    <div className="relative w-full video-height overflow-hidden">
      {/* Video wrapped in a div that applies the CSS mask */}
      <div className="absolute inset-0 z-20" style={maskStyle}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d2j8oo2nydfmnp.cloudfront.net/sizzle-less-cropped.m4v"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Visible overlay artwork as a fallback/visual layer. pointer-events-none allows clicks through. */}
      <img
        src={MASK_URL}
        alt="Video overlay"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
      />

      {/* Play button sits above the overlay */}
      <button
        onClick={onPlay}
        aria-label="Play video"
        className="absolute z-30 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 lg:w-20 h-16 lg:h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition cursor-pointer"
      >
        <FaPlay />
      </button>
    </div>
  );
};

const Hero = ({ title }: HeroProps) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showVideo]);

  return (
    <>
      <div className="hidden relative md:flex flex-col items-center md:flex-row md:min-h-3/4-screen">
        {/* Background image for entire component */}
        <img
          src="/heroOverlay.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content layer */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center py-10 md:py-3 lg:py-5 md:pb-10">
          <div className="pl-[40%] lg:pl-[45%] text-white">
            <h1
              className="font-heading font-medium text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl xl:text-[140px] leading-[80%] uppercase tracking-wide"
              style={{ textShadow: "0 4px 12px rgba(0, 0, 0, 0.50)" }}
            >
              {title}
            </h1>
            <a href="/recentwins" rel="noreferrer">
              <button className="text-sm lg:text-base mt-7 px-8 lg:px-10 py-2 cursor-pointer bg-red hover:bg-white text-white hover:text-green focus:outline-none rounded-full font-button uppercase tracking-wider">
                Recent wins
              </button>
            </a>
          </div>
        </div>

        {/* Video section */}
        <div className="hidden md:block relative z-10 w-full md:w-1/2">
          <LargeVideo onPlay={() => setShowVideo(true)} />
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#000000A8] bg-opacity-80 backdrop-blur-sm"></div>

            <div className="relative w-full max-w-7xl z-50">
              {/* Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-3xl z-50 cursor-pointer"
              >
                <IoMdClose />
              </button>

              {/* Video player */}
              <div
                className="relative video-height"
                style={{ paddingBottom: "56.25%", paddingTop: "25px" }}
              >
                <video
                  controls
                  autoPlay
                  className="absolute w-full h-full object-cover object-center"
                >
                  <source
                    src="https://d2j8oo2nydfmnp.cloudfront.net/sizzle-less-cropped.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* mobile screen */}
      <div className="md:hidden flex flex-col">
        <div className="relative flex overlay-height items-center">
          {/* Background image for entire component */}
          <img
            src="/heroOverlay.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Content layer */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center py-10 md:py-3 lg:py-5 md:pb-10">
            <div className="text-white">
              <h1
                className="font-heading font-medium text-[50px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl xl:text-[140px] leading-[80%] uppercase tracking-wide"
                style={{ textShadow: "0 4px 12px rgba(0, 0, 0, 0.50)" }}
              >
                {title}
              </h1>
              <a href="/recentwins" rel="noreferrer">
                <button className="text-xs sm:text-sm lg:text-base mt-7 px-8 lg:px-10 py-2 cursor-pointer bg-red hover:bg-white text-white hover:text-green focus:outline-none rounded-full font-button uppercase tracking-wider">
                  Recent wins
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="relative z-10 w-full h-full bg-yellow">
          <LargeVideo onPlay={() => setShowVideo(true)} />
        </div>

        {/* video modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#000000A8] bg-opacity-80 backdrop-blur-sm"></div>

            <div className="relative w-full max-w-7xl z-50">
              {/* Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-3xl z-50 cursor-pointer"
              >
                <IoMdClose />
              </button>

              {/* Video player */}
              <div
                className="relative video-height"
                style={{ paddingBottom: "56.25%", paddingTop: "25px" }}
              >
                <video
                  controls
                  autoPlay
                  className="absolute w-full h-full object-cover object-center"
                >
                  <source
                    src="https://d2j8oo2nydfmnp.cloudfront.net/sizzle-less-cropped.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
