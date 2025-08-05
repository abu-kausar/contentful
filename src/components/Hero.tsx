import React from "react";

interface LandingHeroFields {
  title: string;
}

const Hero = ({ title }: LandingHeroFields) => {
  return (
    <div className="bg-black flex flex-col gap-9 items-center justify-center h-[400px] sm:h-[500px] md:h-[700px] text-white">
      <h1 className="font-heading font-bold text-6xl sm:text-8xl lg:text-[140px] uppercase tracking-wide">
        {title}
      </h1>

      <a href="/recentwins" rel="noreferrer">
        <button
          className={`px-10 py-2 cursor-pointer bg-green hover:bg-white text-white hover:text-green focus:outline-none rounded-full font-button uppercase tracking-wider`}
        >
          Recent wins
        </button>
      </a>
    </div>
  );
};

export default Hero;
