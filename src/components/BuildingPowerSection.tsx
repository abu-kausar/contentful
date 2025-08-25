import Link from "next/link";
import React from "react";

const BuildingPowerSection = () => {
  return (
    <section className="custom-overlay bg-red text-white text-center py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-5 ">
      <h2 className="text-7xl lg:text-8xl xl:text-9xl font-medium font-heading uppercase mb-4">
        Building Power Through Equity
      </h2>

      <div className="bg-yellow inline-flex items-center justify-center px-6 mb-6">
        <p className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-heading font-black leading-12 md:leading-[64px] lg:leading-[72px]">
          #PAYTHEFEE
        </p>
      </div>

      <p className="max-w-2xl mx-auto font-body text-lg xl:text-xl leading-relaxed text-white">
        Your donation directly supports grassroots organizing, community-led
        programs, and the teams behind the movement. By contributing, you help
        us continue building equity, amplifying Black voices, and creating
        lasting impact.
      </p>
      <p className="text-white font-medium">#PayTheFee</p>

      <button className="mt-6 lg:mt-8 bg-yellow hover:bg-yellow/80 transition-all text-black font-button uppercase font-normal lg:font-medium py-3 md:py-4 lg:py-5 px-[30px] sm:px-9 lg:px-[70px] cursor-pointer rounded-full">
        <Link href={"https://secure.qgiv.com/for/africatowncommunitylandtrust/"} target="_blank">Donate Now</Link>
      </button>
    </section>
  );
};

export default BuildingPowerSection;
